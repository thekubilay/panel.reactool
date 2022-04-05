import {ref, watch} from "vue";

export default function () {
  const element = ref<any>()
  const clicked = ref<boolean>(false)
  const offset = ref<number[]>([0, 0])

  const onMouseEnter = (e: MouseEvent) => {
    if (element.value){
      element.value.style.cursor = "grab"
    }
  }

  const onMouseDown = (e: MouseEvent) => {
    clicked.value = true
    if (element.value) {
      element.value.style.cursor = "grabbing"
      offset.value = [
        element.value.computedStyleMap().get('left').value - e.clientX,
        element.value.computedStyleMap().get('top').value - e.clientY
      ];
    }
  }

  const onMouseMove = (e: MouseEvent) => {
    if (clicked.value) {
      if (element.value) {
        element.value.style.left = (e.clientX + offset.value[0]) + 'px';
        element.value.style.top  = (e.clientY + offset.value[1]) + 'px';
      }
    }
  }

  const onMouseUp = (e: MouseEvent) => {
    if (element.value) {
      element.value.style.cursor = "grab"
      clicked.value = false
      offset.value = [
        element.value.computedStyleMap().get('left').value - e.clientX,
        element.value.computedStyleMap().get('top').value - e.clientY
      ];
    }
  }

  const onMouseLeave = (e: MouseEvent) => {
    clicked.value = false
    if (element.value)
      element.value.style.cursor = "default"
  }



  return {
    element, offset,
    onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, onMouseMove
  }
}
