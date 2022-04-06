<template>
  <div id="project_vista" class="panel-board relative">
    <Spinner v-model="content"/>

    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="階を追加"
                @click="createOrUpdate()"/>
        <Button type="button" class="submit-button icon-button" icon="pi pi-cog" icon-pos="left"
                @click="createOrUpdate('sim', project.vista_simulator)"/>
      </div>
      <div class="part-wrap part-end">
        <Dropdown style="margin-left: 0; width: 60px" class="dropdown" v-model="time" :options="times"
                  placeholder="タイム"/>
        <!--        <Dropdown style="margin-left: 10px; width: 100px" class="dropdown" v-model="type" :options="types" placeholder="タイプ"  />-->
      </div>
    </BarTool>

    <div class="spreadsheet-wrapper overflow-x">

      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center">階数</div>
          <div class="sheet-cell img flex align-center">画像</div>
          <div class="sheet-cell num flex align-center">時間帯</div>
          <div class="sheet-cell value sheet-cell-long flex align-center">画像名</div>
          <div class="sheet-cell value flex align-center">間取りタイプ</div>
        </div>
      </div>

      <div class="sb-container ss-container">
        <div v-for="(element, idx) in sortByDesc(vistas, 'floor_num')" :key="idx"
             @click="open(element)"
             @contextmenu="isRCOn($event, element)"
             aria-haspopup="true"
             aria-controls="rc_menu"
             class="sheet-row flex align-center list-group-item relative pointer">
          <Menu id="rc_menu" ref="rcm" class="rc has-final-action" :model="rightClickMenu" :popup="true"/>
          <div class="sheet-cell handle flex align-center handle grab"></div>
          <div class="sheet-cell num flex align-center"><span class="text block">{{ element.floor_num }}</span></div>
          <div class="sheet-cell img flex align-center">
            <Icon v-if="element.image" svg="image"/>
          </div>
          <div class="sheet-cell num flex align-center"><span class="text block">{{ element.time }}</span></div>
          <div class="sheet-cell value sheet-cell-long flex align-center">
            <span v-if="element.image" class="text block">{{ element.image?.split("/", 6)[5].split(".", 1)[0] }}</span>
          </div>
          <div class="sheet-cell value flex align-center">{{ element.plan_type }}</div>
        </div>
      </div>

    </div>

    <Dialog v-model="d" title="眺望フォーム" overflow>
      <FormQuery v-model="d"
                 v-model:dr="dr"
                 v-model:form="reform"
                 :close-after="closeAfter"
                 topProgress
                 :progress="progress"
                 :data="data"
                 :loading="loading"
                 :query="query"
                 :remove="rm"
                 :submit="submit">
        <div v-if="query.hasOwnProperty('project') ||
                   query.hasOwnProperty('plan_type') && reform[0][1].elements[1].model"
             class="slider-container">
          <span class="label block">コンパスの向き</span>
          <Slider v-model="slider" :min="1" :max="360"/>

          <div v-if="project.vista_simulator.image" class="land-print relative overflow-hidden">
            <div class="row relative image-container relative">
              <img class="print" :src="project.vista_simulator?.image" alt="landplan">
              <img :draggable="false"
                   @mousemove="onMouseMove"
                   @mouseenter="onMouseEnter"
                   @mouseleave="onMouseLeave"
                   @mousedown="onMouseDown"
                   @mouseup="onMouseUp"
                   ref="element"
                   class="compass" alt="compass">
              <button v-if="query.hasOwnProperty('project')" @click="removeImage()" class="remove">
                画像削除
              </button>
            </div>
            <span class="hint">*コンパスをドラッグで移動できます</span>
          </div>
        </div>
      </FormQuery>

      <DialogDelete v-model="dr">
        <div class="button-wrapper flex justify-end">
          <button @click="dr=false" class="cancel">いいえ</button>
          <button @click="removeItem()" class="delete">はい</button>
        </div>
      </DialogDelete>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import draggable from "vuedraggable";
import Button from "primevue/button";
import Menu from "primevue/menu";
import Dropdown from "primevue/dropdown";
import Slider from "primevue/slider";
import Dialog from "@/components/dialog/Dialog.vue";
import Spinner from "../../components/loading/Spinner.vue";
import BarTool from "../../components/bars/BarTool.vue";
import Icon from "@/components/icons/Icon.vue";
import FormQuery from "@/components/form/FormQuery.vue";
import DialogDelete from "@/components/dialog/DialogDelete.vue";

import {onMounted, ref, watch, watchEffect} from "vue";
import ProjectVistas from "@/views/boards/ProjectVistas"
import useUtils from "@/common/useUtils";
import useGrabAndMoveHandler from "@/helpers/useGrabAndMoveHandler";
import {VistaContent} from "@/types/Vista";

const {sortByDesc} = useUtils()
const {
  reform, query, type, types, time, times, vistas, rm, slider, closeAfter, loading,
  d, dr, data, content, images,
  progress, project,
  createOrUpdate, open,
  rightClickMenu, rcm,
  isRCOn,
  useToggle, removeItem, removeImage, removeContentImage,
  submit, submitRowReorder, remove
} = ProjectVistas()
const {
  element, offset,
  onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, onMouseMove,
} = useGrabAndMoveHandler()


const imgUrl = ref<HTMLImageElement | null>(null)

function setFilterArgs(data: VistaContent[], args: { time: string, type: string | null }): VistaContent[] {
  return data.filter(item => item.time === time.value) || []
}

function setEffects(): void {
  const raw: VistaContent[] = project.value?.vista_simulator.vista_simulator_contents || []
  vistas.value = setFilterArgs(raw, {time: time.value, type: type.value})
  slider.value = parseInt(data.value?.compass_start);
}

watchEffect(() => setEffects())

watch(slider, () => {
  if (element.value) element.value.style.transform = "rotate(" + slider.value + 'deg)'
  if (element.value) query.value.compass_start = slider.value
})


watch(() => element.value, val => {
  if (val && data.value) {
    setTimeout((): void => {
      val.setAttribute("src", imgUrl.value)
      element.value.style.top = data.value.compass_top + "px"
      element.value.style.left = data.value.compass_left + "px"
      element.value.style.transform = "rotate(" + data.value.compass_start + 'deg)';
    }, 50)
  }
})
watch(() => offset.value, val => {
  query.value.compass_top = element.value.computedStyleMap().get('top').value
  query.value.compass_left = element.value.computedStyleMap().get('left').value
})

onMounted(() => {
  imgUrl.value = new URL('../../assets/svg/compass.svg', import.meta.url)

  vistas.value = project.value?.vista_simulator.vista_simulator_contents?.filter(item => {
    return item.time === time.value
  })
})

</script>

<style>
#project_vista {
  height: calc(100% - 54px);
}

#project_vista .slider-container span.label {
  margin-top: 20px;
}

#project_vista .land-print {
  margin-top: 20px;
}

#project_vista .land-print .image-container {
  border: 1px solid #edeae9;
  padding: 10px 10px 6px 10px;
  margin-bottom: 5px;
}

#project_vista .land-print .image-container button.remove {
  position: absolute;
  font-size: .7rem;
  padding: 5px 14px;
  bottom: 10px;
  right: 10px;
  background-color: #e74c3c;
  color: #FFFFFF;
}

#project_vista .land-print .image-container img.print {
  width: 200px;
  max-width: 200px;
}

#project_vista .land-print .image-container img.compass {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 120px;
}
</style>
