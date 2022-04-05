import theStore from '../stores/main'
import {storeToRefs} from 'pinia'
import {computed} from "vue";
export default function () {
  const store = theStore()
  const users = computed(() => store.company.users)
  return {
    store, users,
    ...storeToRefs(store)
  }
}
