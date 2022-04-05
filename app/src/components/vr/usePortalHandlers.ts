// import {ref} from "vue";
//
// export default function (portals: any, mi: any, container: { value: any },) {
//   const clicked = ref<boolean>(false)
//   const innerOffset = ref<number[][]>([])
//   const cx = ref<number>(0)
//   function mouseMoveForAllRefs(e: MouseEvent): void {
//     cx.value = e.clientX
//     if (clicked.value) {
//       mi.value.forEach((item: any, i: number) => {
//         item.style.left = (e.clientX / window.innerWidth * 100) + innerOffset.value[i][0] + "%";
//         // item.style.top = (my + item.computedStyleMap().get('left').value) + "%";
//       })
//     }
//   }
//
//   const mouseDownForAllRefs = (e: MouseEvent): void => {
//     container.value.style.cursor = "grabbing"
//     clicked.value = true
//     if (portals.value.length) {
//       mi.value.forEach((item: any, i: number) => {
//         innerOffset.value[i] = [
//           item.computedStyleMap().get('left').value - e.clientX / window.innerWidth * 100,
//           // item.computedStyleMap().get('top').value - e.clientY / window.innerHeight * 100
//         ];
//       })
//     }
//   }
//
//   const mouseUpForAllRefs = (e: MouseEvent): void => {
//     container.value.style.cursor = "grab"
//     clicked.value = false
//     if (portals.value.length) {
//       mi.value.forEach((item: any, i: number) => {
//         innerOffset.value[i] = [
//           item.computedStyleMap().get('left').value - e.clientX / window.innerWidth * 100,
//           // item.computedStyleMap().get('top').value - e.clientY / window.innerHeight * 100
//         ];
//       })
//     }
//
//   }
//
//   return {
//     cx, innerOffset,
//     mouseMoveForAllRefs, mouseDownForAllRefs, mouseUpForAllRefs
//   }
// }
