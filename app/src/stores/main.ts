import {defineStore} from 'pinia';
import {state} from '@/stores/modules/state';
import {getters} from '@/stores/modules/getters';
import {actions} from "@/stores/modules/actions";

export default defineStore({
  id: "main",
  state: state,
  getters: {
    ...getters()
  },
  actions: {
    ...actions()
  },
});