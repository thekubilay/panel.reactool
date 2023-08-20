import {ref} from "vue";
import {onClickOutside} from "@vueuse/core";

export default function (data: { value: object|null }) {
  const rcm = ref<any>(null)
  const rcmOpened = ref<boolean>()

  onClickOutside(rcm, (e: any): void => {
    if (rcm.value && rcmOpened.value) {
      // rcm.value.toggle()
      // setTimeout(():void => {
      //   rcmOpened.value = false
      // }, 100)
    }
  })

  const isRCOn = (event: any, element: any): void => {
    event.preventDefault()
    rcmOpened.value = true
    try {
      rcm.value.toggle(event);
      setTimeout(() => {
        if (rcm.value.container){
          rcm.value.container.style.top = (event.clientY + 10) +'px'
          rcm.value.container.style.left = (event.clientX) +'px'
          data.value = element
        } else {
          data.value = null
        }
      }, 20)
    } catch (e) {
      console.log("right click toggle error, probably *rcm is empty")
      // console.log(e)
    }
  }

  return {
    rcm, rcmOpened,
    isRCOn,
  }
}
