import * as THREE from 'three/build/three.module.js';
import {ref} from "vue";

export default function () {
  const container = ref<HTMLElement>()
  const loader = ref<any>(null);
  const pointerX = ref<number>(0)
  const pointerY = ref<number>(0)
  const gestureZoom = ref(false)
  const pinchZoomStart = ref(null);
  const camera = ref<any>(null)
  const renderer = ref<any>(null)
  const geometry = ref<any>(null)
  const texture = ref<any>(null)
  const material = ref<any>(null)
  const isUserInteracting = ref<boolean>(false)
  const onPointerDownMouseX = ref<number>(0)
  const onPointerDownMouseY = ref<number>(0)
  const onPointerDownX = ref<number>(0)
  const onPointerDownY = ref<number>(0)
  const phi = ref<number>(0)
  const theta = ref<number>(0)
  const offset = ref<number[][]>([])
  let scene: any = null, mesh: any = null


  const onWindowResize = (): void => {
    camera.value.aspect = window.innerWidth / window.innerHeight;
    camera.value.updateProjectionMatrix();
    renderer.value.setSize(window.innerWidth, window.innerHeight);
  }

  const onPointerDown = (event: MouseEvent): void => {
    if (container.value) {
      isUserInteracting.value = true;
      container.value.style.cursor = "grabbing"
      onPointerDownMouseX.value = event.clientX;
      onPointerDownMouseY.value = event.clientY;
      onPointerDownX.value = pointerX.value;
      onPointerDownY.value = pointerY.value;

      container.value.addEventListener('pointermove', onPointerMove);
      container.value.addEventListener('pointerup', onPointerUp);
    }
  }

  const onPointerMove = (event: MouseEvent): void => {
    // if (event.isPrimary === false) return;
    if (!gestureZoom.value) {
      pointerX.value = (onPointerDownMouseX.value - event.clientX) * 0.1 + onPointerDownX.value;
      pointerY.value = (event.clientY - onPointerDownMouseY.value) * 0.1 + onPointerDownY.value;
    }
  }

  const onPointerUp = (event: MouseEvent): void => {
    // if (event.isPrimary === false) return;
    if (container.value) {
      container.value.style.cursor = "grab"
      container.value.removeEventListener('pointermove', onPointerMove);
      container.value.removeEventListener('pointerup', onPointerUp);
    }

    isUserInteracting.value = false;
  }

  const onDocumentMouseWheel = (event: any): void => {
    const fov = camera.value.fov + event.deltaY * 0.05;
    camera.value.fov = THREE.MathUtils.clamp(fov, 10, 130);
    camera.value.updateProjectionMatrix();
  }

  const onDocumentFingerGestureStart = (event: any): void => {
    if (event.touches.length > 1) {
      event.preventDefault();
      pinchZoomStart.value = event.scale;
      gestureZoom.value = true
    } else {
      gestureZoom.value = false
    }
  }

  const onDocumentFingerGestureMove = (event: any): void => {
    if (event.touches.length > 1) {
      event.preventDefault();
      let fov: any;
      if (pinchZoomStart.value && pinchZoomStart.value > event.scale) {
        fov = camera.value.fov + event.changedTouches[0].pageY * 0.002;
      } else {
        fov = camera.value.fov - event.changedTouches[0].pageY * 0.002;
      }

      camera.value.fov = THREE.MathUtils.clamp(fov, 10, 130);
      camera.value.updateProjectionMatrix();
    }
  }

  const init = (src: string, degree: number = 1) => {
    pointerX.value = degree

    camera.value = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);

    scene = new THREE.Scene();

    geometry.value = new THREE.SphereGeometry(500, 60, 40);
    geometry.value.scale(-1, 1, 1);

    loader.value = new THREE.TextureLoader();

    texture.value = loader.value.load(src, (txt: any) => {
      material.value.map = txt;
      material.value.map.needsUpdate = true
    }, (xhr: any) => {
      console.log(xhr)
    }, (xhr: any) => {
      console.log(xhr)
    });

    texture.value.minFilter = THREE.LinearFilter;

    material.value = new THREE.MeshBasicMaterial({map: texture.value});
    mesh = new THREE.Mesh(geometry.value, material.value);
    scene.add(mesh);

    renderer.value = new THREE.WebGLRenderer({
      preserveDrawingBuffer: true,
      alpha: true,
    });

    renderer.value.setPixelRatio(window.devicePixelRatio);
    renderer.value.setSize(window.innerWidth, window.innerHeight);

    if (container.value) {
      window.addEventListener('resize', onWindowResize);
      container.value.appendChild(renderer.value.domElement);
      container.value.style.touchAction = 'none';
      container.value.addEventListener('pointerdown', onPointerDown);
      container.value.addEventListener('wheel', onDocumentMouseWheel);
      container.value.addEventListener('touchstart', onDocumentFingerGestureStart);
      container.value.addEventListener('touchmove', onDocumentFingerGestureMove);
    }

    camera.value.fov = THREE.MathUtils.clamp(104, 10, 130);
    camera.value.updateProjectionMatrix();
  }

  const update = (img: string | null, dg: number | null) => {
    if (img) {
      geometry.value = new THREE.SphereGeometry(500, 60, 40);
      geometry.value.scale(-1, 1, 1);
      texture.value = loader.value.load(img, (tex: any): void => {
        material.value.map = tex;
        material.value.map.needsUpdate = true
      })
      texture.value.minFilter = THREE.LinearFilter;
      material.value = new THREE.MeshBasicMaterial({map: texture.value,});
      mesh = new THREE.Mesh(geometry.value, material.value);
      scene.add(mesh);
    }

    pointerY.value = Math.max(-85, Math.min(85, pointerY.value));
    phi.value = THREE.MathUtils.degToRad(90 - pointerY.value);

    if (dg) {
      theta.value = THREE.MathUtils.degToRad(dg);
    } else {
      theta.value = THREE.MathUtils.degToRad(pointerX.value);
    }

    const reX: number = 500 * Math.sin(phi.value) * Math.cos(theta.value);
    const reY: number = 500 * Math.cos(phi.value);
    const reZ: number = 500 * Math.sin(phi.value) * Math.sin(theta.value);

    camera.value.lookAt(reX, reY, reZ);
    renderer.value.render(scene, camera.value);
  }

  const animate = () => {
    requestAnimationFrame(animate);
    update(null, null)
  }

  return {
    container, pointerX, pointerY,
    init, animate, update,
  }
}
