import useStore from "@/helpers/useStore";
import {User} from "@/types/User";
import {request} from "@/services/request";

export default function (){
  const {store} = useStore()

  function storeData(data: User): void {
    store.user = data
  }

  const save = () => {
    return new Promise<User>((resolve): User => {
      request("current", "get").then(response => {
        storeData(response)
        resolve(response)
      })
    })
  }

  return {
    save,
  }
}
