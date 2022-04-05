<template>
  <div id="project_calendar" class="panel-board overflow-y">
    <FullCalendar ref="cal" :options="options"/>
    <Dialog v-model="d" title="スケジュールフォーム">
      <Spinner v-model="loading" text=""/>
      <div id="form">
        <form action="" @submit.prevent="false">
          <div class="row flex justify-space-between">
            <div class="flex-column column-1 relative">
              <span class="label flex">タイトル<span class="required flex align-start">*必須</span></span>
              <InputText class="cfec" :class="{error:form.title.error}" v-model="form.title.model"
                         placeholdeR="新規イベント"/>
            </div>
          </div>

          <div class="row flex justify-space-between">
            <div class="row flex justify-space-between column-2-space">
              <div class="flex-column column-2-space">
                <span class="label flex">開始日</span>
                <p style="height: 34px; font-size: .85rem; padding-top: 4px; color: #969595"
                   class="date flex align-center">{{ setDateJPDateFormat(form.start.model) }}</p>
              </div>
              <div class="flex-column column-2-space">
                <span class="label flex">終了日</span>
                <p style="height: 34px; font-size: .85rem; padding-top: 4px; color: #969595"
                   class="date flex align-center">{{ setDateJPDateFormat(form.end.model) }}</p>
              </div>
            </div>
            <div class="row flex justify-space-between column-2-space">
              <div class="flex-column column-2-space relative">
                <span class="label flex">開始日<span class="required flex align-start">*必須</span></span>
                <div class="overlay absolute pointer" @click="clicked('start')"
                     style="width: 100%; height: 100%; z-index: 99"></div>
                <Calendar v-model="form.start.model" ref="startTime" hour-format="24" timeOnly date-format="yy年mm月dd日"/>
              </div>
              <div class="flex-column column-2-space relative">
                <span class="label flex">終了日<span class="required flex align-start">*必須</span></span>
                <div class="overlay absolute pointer" @click="clicked('end')"
                     style="width: 100%; height: 100%; z-index: 99"></div>
                <Calendar v-model="form.end.model" ref="endTime" hour-format="24" timeOnly date-format="yy年mm月dd日"/>
              </div>
            </div>
          </div>
          <div class="row flex">
            <div class="flex-column column-1 relative">
              <span class="label flex">内容</span>
              <Editor :class="{error:form.description.error}" v-model="form.description.model"/>
            </div>
          </div>
          <div class="action-wrapper flex align-center">
            <button class="flex align-center justify-center cancel">中止</button><!--v-if-->
            <button @click="dr=true" v-if="rm" class="flex align-center justify-center remove">削除</button>
            <button @click="submit()" class="flex align-center justify-center submit-or-next">登録</button>
          </div>
        </form>
      </div>

      <DialogDelete v-model="dr">
        <div class="button-wrapper flex justify-end">
          <button @click="dr=false" class="cancel">いいえ</button>
          <button @click="removeItem()" class="delete">はい</button>
        </div>
      </DialogDelete>
    </Dialog>


    <Dialog v-model="d2">
      <Spinner v-model="loading" text=""/>
      <form @submit.prevent="false">
        <div class="row flex justify-space-between column-1">
          <div class="flex-column column-2-space relative">
            <span class="label flex">休日<span class="required flex align-start">*必須</span></span>
            <MultiSelect class="cfec" v-model="holidays" :options="holopts" option-value="value" option-label="name"/>
          </div>
        </div>
        <div class="action-wrapper flex align-center">
          <button class="flex align-center justify-center cancel">中止</button><!--v-if-->
          <button @click="submitHolidays()" class="flex align-center justify-center submit-or-next">登録</button>
        </div>
      </form>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import Editor from "primevue/editor";
import Dropdown from "primevue/dropdown";
import MultiSelect from "primevue/multiselect";
import Dialog from "@/components/dialog/Dialog.vue"
import DialogDelete from "@/components/dialog/DialogDelete.vue";

import {onMounted, reactive, ref, watch} from "vue";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import APIexecutor from "@/services/APIexecutor";
import useHelpers from "@/common/useHelpers";
import useUtils from "@/common/useUtils";
import useStore from "@/helpers/useStore";
import {CalendarEvent} from "@/types/Calendar";
import Spinner from "@/components/loading/Spinner.vue";


const {get} = APIexecutor()
const {remove, submitAsFormObject} = useFormRequestBuilder()
const {d, d2, dr, data, useToggle,} = useHelpers()
const {daysInBetween, setDateJPDateFormat, findDaysInAYear} = useUtils()
const {project, payload, content} = useStore()
const startTime = ref<HTMLElement>()
const endTime = ref<HTMLElement>()
const response = ref<any>(null)
const loading = ref<boolean>(false)
const color = ref<string>("")
const colors = ref<string[]>([])
const holopts = ref<{ name: string, value: number }[]>([
  {name: "日曜日", value: 0}, {name: "月曜日", value: 1},
  {name: "火曜日", value: 2}, {name: "水曜日", value: 3},
  {name: "木曜日", value: 4}, {name: "金曜日", value: 5},
  {name: "土曜日", value: 6},])
const holidays = ref<number[]>()
const cal = ref<HTMLElement>()
const rm = ref<boolean>(false)
const selectedId = ref<number | null>(null)
const form = reactive<any>({
  title: {required: true, model: null, error: false,},
  start: {required: true, model: null, error: false,},
  end: {required: true, model: null, error: false},
  description: {required: false, model: null, error: false},
})
const options = ref({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialDate: new Date(),
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    // right: 'dayGridMonth,timeGridWeek,timeGridDay',
    right: "",
    today: '今日',
    month: '月表',
    week: '週表',
    day: '日表',
  },
  locale: "ja",
  editable: true,
  droppable: true,
  eventDrop: function (info: any) {
    content.value = true
    payload.value = {
      method: "patch",
      endpoints: ["app/calendar_events/" + info.event.id, "project_details/" + project.value?.id],
      state: "project"
    }
    submitAsFormObject({start: info.event.start, end: info.event.end})
  },
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  events: [],
  dateClick: function (info: any): void {
    payload.value = {
      method: "post",
      endpoints: ["app/calendar_events", "project_details/" + project.value?.id],
      state: "project"
    }
    selectedId.value = null
    Object.keys(form).forEach(key => {
      form[key].error = false
    })

    let start = new Date(info.date);
    start.setDate(start.getDate())
    start.setHours(10);
    start.setMinutes(0);
    start.setMilliseconds(0);
    form.start.model = start

    let end = new Date(info.date);
    end.setDate(end.getDate())
    end.setHours(12);
    end.setMinutes(0);
    end.setMilliseconds(0);
    form.end.model = end

    form.title.model = null
    form.description.model = null
    d.value = true
  },
  eventClick: function (info: any): void {
    info.jsEvent.preventDefault(); // don't let the browser navigate
    payload.value = {
      method: "patch",
      endpoints: ["app/calendar_events/" + info.event.id, "project_details/" + project.value?.id],
      state: "project"
    }
    Object.keys(form).forEach(key => {
      form[key].error = false
    })

    selectedId.value = parseInt(info.event._def.publicId)
    form.title.model = info.event.title

    form.start.model = new Date(info.event.start.setHours(info.event.start.getHours()))
    form.end.model = new Date(info.event.end.setHours(info.event.end.getHours()))

    form.description.model = info.event.extendedProps.description

    rm.value = true
    d.value = true

  },
  select: function (info: any): void {
    payload.value = {
      method: "post",
      endpoints: ["app/calendar_events", "project_details/" + project.value?.id],
      state: "project"
    }

    Object.keys(form).forEach(key => {
      form[key].error = false
    })

    let start = new Date(info.start);
    start.setDate(start.getDate())
    start.setHours(10);
    start.setMinutes(0);
    start.setMilliseconds(0);
    form.start.model = start

    let end = new Date(info.end - 1);
    end.setDate(end.getDate())
    end.setHours(12);
    end.setMinutes(0);
    end.setMilliseconds(0);
    form.end.model = end

    // let days = daysInBetween(start, end);
    // query.between = days.map((v) => v)

    form.title.model = null
    form.description.model = null
    d.value = true
  },
});


function removeItem() {
  loading.value = true
  dr.value = false
  remove("app/calendar_events/" + selectedId.value).then(() => {
    setTimeout((): void => {
      get("project_details/" + project.value?.id, "project").then(() => {
        loading.value = false
        d.value = false
      })
    }, 1000)
  })
}

function submit(): void {
  let errors: string[] = [];
  let query: CalendarEvent = {
    calendar: project.value?.calendar.id,
    title: form.title.model,
    start: form.start.model,
    end: form.end.model,
    description: form.description.model
  }
  const keys: string[] = Object.keys(form)
  keys.forEach(key => {
    if (form[key].required && (form[key].model === "" || !form[key].model)) {
      form[key].error = true
      errors.push(key)
    }
  })
  if (selectedId.value) query.id = selectedId.value.id

  if (!errors.length) {
    loading.value = true
    submitAsFormObject(query).then(() => {
      setTimeout(() => {
        loading.value = false
        d.value = false
      }, 1000)
    })
  }
}

function submitHolidays(): void {
  payload.value = {
    method: "patch",
    endpoints: ["app/calendars/"+project.value?.calendar.id, "project_details/" + project.value?.id],
    state: "project"
  }
  const days: Date[] = []
  const removeDays: Date[] = []
  holidays.value.forEach(holiday => {
    findDaysInAYear(holiday).forEach(day => {
      days.push({
        calendar: project.value?.calendar.id,
        title: "休日",
        start: day,
        end: day,
        holiday: true,
        display: "background",
        color: "rgba(255, 121, 121, .3)"
      })
    })
  })
  const removes: number[] = [];
  [0, 1, 2, 3, 4, 5, 6].forEach(item => {
    if (!holidays.value?.includes(item)) removes.push(item)
  })


  removes.forEach(holiday => {
    findDaysInAYear(holiday).forEach(day => {
      removeDays.push({
        calendar: project.value?.calendar.id,
        title: "休日",
        start: day,
        end: day,
        color: "#ff7979"
      })
    })
  })


  submitAsFormObject({holiday_codes:holidays.value?.join()}).then(() => {
    loading.value = true
    payload.value = {
      method: "post",
      endpoints: ["app/calendar_events", "project_details/" + project.value?.id],
      state: "project"
    }
    submitAsFormObject({holiday: days, remove: removeDays}).then(() => {
      setTimeout(() => {
        loading.value = false
        d2.value = false
      }, 1000)
    })
  })
}

function clicked(param: string): void {
  if (param === "start")
    startTime.value.input.focus()
  else
    endTime.value.input.focus()
}

watch(() => d.value, val => {
  if (!val) {
    rm.value = false
    dr.value = false
  }
})

watch(() => d2.value, val => {
  if (val) {
    if (project.value?.calendar.holiday_codes) {
      holidays.value = project.value?.calendar.holiday_codes.split(",").map(item => {
        return parseInt(item)
      })
    }
  }
})

watch(() => project.value, val => {
  options.value.events = val?.calendar.events || []
})

watch(() => cal.value, val => {
  if (val) {
    const [...bars]: any = document.getElementsByClassName("fc-toolbar-chunk")
    bars.forEach((item: any, i: number) => {
      if (i === 2) {
        const button: any = document.createElement("button")
        button.classList = "fc-button"
        button.textContent = "休日設定"
        button.onclick = () => {
          d2.value = true
        }
        item.appendChild(button)
      }
    })
  }
})

onMounted((): void => {
  options.value.events = project.value?.calendar.events || []
})

</script>

<style>
#project_calendar {
  padding: 14px;
  width: 100%;
  height: calc(100% - 54px);
}

#project_calendar .fc-daygrid-body,
#project_calendar .fc-media-screen,
#project_calendar .fc-scrollgrid-sync-table {
  width: 100% !important;
  height: 100% !important;
}

#project_calendar .fc-col-header {
  width: 100% !important;
}

#project_calendar .fc-media-screen .fc-view-harness {
  overflow-y: scroll;
}

#project_calendar .fc-media-screen .fc-toolbar-chunk {
}

#project_calendar .fc-media-screen .fc-view-harness td.fc-daygrid-day {
  cursor: pointer;
}

#project_calendar .fc.fc-theme-standard .fc-toolbar .fc-button {
  background-color: #1D4ED8;
  border-radius: 0;
  border: 0;
  padding: 0 10px;
  font-size: .7rem;
}

#project_calendar .fc-popover {
  z-index: 101;
}

#project_calendar .fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button,
#project_calendar .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button,
#project_calendar .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button {
  background-color: #1D4ED8;
  color: #FFFFFF;
}

#project_calendar .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button {
}

#project_calendar .fc.fc-theme-standard .fc-toolbar .fc-button.fc-today-button:disabled,
#project_calendar .fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button.fc-button-active,
#project_calendar .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button.fc-button-active,
#project_calendar .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button.fc-button-active {
  color: #1D4ED8;
  background-color: rgba(9, 132, 227, 0.1);
}

#project_calendar .fc.fc-theme-standard .fc-toolbar .fc-button:not(:disabled):focus {
  outline: 0;
  box-shadow: none;
}

#project_calendar .rf-dialog .p-editor-container {
  height: 200px;
}

#project_calendar .rf-dialog .p-editor-container .p-editor-content {
  height: calc(100% - 66px);
}

#project_calendar .p-editor-container .p-editor-content,
#project_calendar .p-editor-container .p-editor-toolbar {
  border-radius: 0;
}

</style>
