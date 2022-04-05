import {ref} from "vue";
import useStore from "@/helpers/useStore";
import {Payload} from "@/types/Payload";

export default function () {
  const {store} = useStore()
  const d = ref<boolean>(false) // dialog
  const d2 = ref<boolean>(false) // dialog 2
  const dpc = ref<boolean>(false) // dialog popup content (inner dialog)
  const dr = ref<boolean>(false) // dialog remove
  const dw = ref<boolean>(false) // dialog warning
  const images = ref<object[]>([])
  const data = ref<any>(null)


  const useToggle = (payload: Payload, object: object|null = null) => {
    store.SET_PAYLOAD(payload)
    d.value = !d.value
    data.value = object
  }

  return {
    d, d2, dpc, dr, dw, images, data,
    useToggle,
  }
}
