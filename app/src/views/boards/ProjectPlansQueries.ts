import {reactive} from "vue";
import {PlanContext, PlanField} from "@/types/Plans";

export default function (project: any){
  const q1 = reactive<PlanField>({
    id: null,
    order_id: null,
    project: project.value.id,
    name: null,
    type: null,
    class_name: null,
    plan_field_options: []
  })

  const q2 = reactive<PlanContext>({
    id: null,
    order_id: null,
    plan_field: null,
    plan_content: null,
    value: null,
    field: null,
    image: null,
    thumbnail: null,
  })

  return {
    q1, q2,
  }
}
