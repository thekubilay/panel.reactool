import {State} from "@/stores/modules/state";

export function getters() {
  return {
    GET_SALON_PROJECTS(state: State) {
      return state.projects.filter(item => {
        return item.salon === state.salon?.id
      })
    },
  }
}
