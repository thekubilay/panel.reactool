import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import AppEntryService from "@/services/AppEntryService";
import InputNumber from "primevue/inputnumber";
import {createSplash as splash} from "@/helpers/useSplash";


import '@fullcalendar/core/vdom' // solves problem with Vite

import "primevue/resources/themes/lara-light-indigo/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"
import "./assets/css/app.css"
import "./assets/css/admin.css"
import "./assets/css/irregulars.css"
import "./assets/css/flex.css"
import "./assets/css/columns.css"
import "./assets/css/reset.css"
import "./assets/css/form.css"
import "./assets/css/primevue.css"
import "./assets/css/transitions.css"
import "./assets/css/root.css"
import "./assets/css/spreadsheet.css"
import "./assets/css/card-sheet.css"
import "./assets/css/buttons.css"
import Tooltip from 'primevue/tooltip';

const app = createApp(App)
const pinia = createPinia()
const service = new AppEntryService()


/* create splash screen */
// splash()

app.component("InputNumber", InputNumber)
app.directive('tooltip', Tooltip)
app.use(pinia)
app.use(PrimeVue)
app.use(router)
app.mount('#app')
/* set app data */
// service.getAll().then((response) => {
//
// })

