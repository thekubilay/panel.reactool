import {ref} from "vue";

export default function () {

  const element = ref<any>();
  const clicked = ref<boolean>(false)
  const offset = ref<number[]>([0, 0])
  const vr_moved = ref<boolean>(false)

  const onMouseEnter = (e: MouseEvent): void => {
    vr_moved.value = false
    element.value.style.cursor = "grab";
  }

  const onMouseDown = (e: MouseEvent): void => {
    vr_moved.value = false
    clicked.value = true
    element.value.style.cursor = "grabbing";
    offset.value = [
      element.value.computedStyleMap().get('left').value - (e.clientX / window.innerWidth * 100),
      element.value.computedStyleMap().get('top').value - (e.clientY / window.innerHeight * 100)
    ];
  }

  const onMouseMove = (e: MouseEvent) => {
    if (clicked.value) {
      if (element.value) {
        element.value.style.left = ((e.clientX / window.innerWidth * 100) + offset.value[0]) + "%";
        element.value.style.top = ((e.clientY / window.innerHeight * 100) + offset.value[1]) + "%";
      }
    }
  }

  const onMouseUp = (e: MouseEvent) => {
    clicked.value = false
    element.value.style.cursor = "grab"
    offset.value = [
      element.value.computedStyleMap().get('left').value - (e.clientX / window.innerWidth * 100),
      element.value.computedStyleMap().get('top').value - (e.clientY / window.innerHeight * 100)
    ];
  }

  const onMouseLeave = (e: MouseEvent) => {
    clicked.value = false
    element.value.style.cursor = "default"
  }

  return {
    element, offset, clicked, vr_moved,
    onMouseEnter, onMouseDown, onMouseMove, onMouseUp, onMouseLeave,
  }
}
