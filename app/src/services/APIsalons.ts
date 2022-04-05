import {Company} from "@/types/Company";
import {Salon} from "@/types/Salon";

export default function (){
  const {store} = useSto
  function storeData(data: Salon){
    store.company = data
  }

  const save = (salon: Salon) => {
    storeData(salon)
  }

  return {
    save,
  }
}
