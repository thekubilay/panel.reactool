<template>
  <div id="project">
    <BarTool>
      <div class="part-wrap flex align-center relative">
        <h3 class="title" v-html="project.name"></h3>
        <ButtonDropdown id="project_setting" :items="items"/>
        <a style="margin-left: 5px;color: #2ecc71" target="_blank" :href="FRONTAPP">APPへ</a>
      </div>
      <span class="divider"></span>
      <div class="part-wrap flex align-center">
        <router-link v-for="(link, idx) in links" :key="idx"
                     class="pn-item flex align-center justify-center"
                     active-class="active"
                     :to="{name:link?.panel_name, params:{dynid:route?.params.dynid}}">
          {{ link?.title.replace('<br>', "") }}
        </router-link>
      </div>

      <Dialog v-model="d" :title="title.replaceAll('<br>', '')" :overflow="tabs.length > 0 && activeTab === 3">
        <FormQuery v-model="d"
                   v-model:response="response"
                   v-model:activeTab="activeTab"
                   :onload="onload"
                   :tabs="tabs"
                   :form="reform"
                   :data="data"
                   :loading="loading"
                   :query="query"
                   :submit="submit">
          <ContextImagesThumbnailContainer v-if="activeTab === 2 || activeTab === 3"
                                           :containerId="containerId"
                                           :images="images"
                                           :remove="removeImage"/>
        </FormQuery>

        <div class="token-dialog" v-if="dpc">
          <div class="window">
            <h4 class="title">新規トークン</h4>
            <div class="copy-container relative">
              <input id="token_text" type="text" disabled v-model="token">
              <i @click="copyText('token_text')" class="pi pi-copy flex align-center justify-center"></i>
            </div>
            <p class="warning-text">
              *作成されたトークンは、トークン名と日付含めてAPIトークン一覧に登録されています。<br>
              **こちらのトークンから権限を外したい場合、一覧から消してください。</p>
            <div class="action-wrapper flex justify-end">
              <button @click="dpc=false">閉じる</button>
            </div>
          </div>
        </div>
      </Dialog>

      <Dialog v-model="d2" title="APIトークン一覧" overflow>
        <FormNested v-model="d2" :form="[[]]"
                    :loading="loading">
          <DataTable :value="project.api_tokens" rowindex="index"
                     style="padding-bottom: 14px"
                     responsiveLayout="scroll" class="option-datatable">
            <Column field="name" header="トークン名"></Column>
            <Column field="start_date" header="開始日"></Column>
            <Column field="end_date" header="終了日"></Column>
            <Column style="width:40px; text-align: right; margin-left: auto" body="index">
              <template #body="slotProps">
                <span @click="removeToken(slotProps.data.id)"
                      class="remove pointer">
                  <i class="pi pi-times"></i>
                </span>
              </template>
            </Column>
          </DataTable>
        </FormNested>
      </Dialog>
    </BarTool>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import BarTool from "@/components/bars/BarTool.vue";
import Dialog from "@/components/dialog/Dialog.vue";
import ButtonDropdown from "@/components/buttons/ButtonDropdown.vue";
import FormQuery from "@/components/form/FormQuery.vue";
import ContextImagesThumbnailContainer from "@/components/contexts/ContextImagesThumbnailContainer.vue";
import FormNested from "@/components/form/FormNested.vue";


import {onMounted, nextTick, ref, watch} from "vue";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useStore from "@/helpers/useStore";
import useHelpers from "@/common/useHelpers";
import {update as FormProject} from "@/components/form/templates/FormProject";
import {form as FormProjectApiToken} from "@/components/form/templates/FormProjectApiToken";
import {useRoute} from "vue-router";
import {Form} from "@/types/Form";
import useUtils from "@/common/useUtils";
import APIexecutor from "@/services/APIexecutor";
import {ProjectRoutes, Routes} from "@/types/Routes";

const {get} = APIexecutor()
const {submit, remove} = useFormRequestBuilder()
const {payload, user, project, progress, onload,} = useStore()
const {checkPermission, findAndUpdateFormElement} = useUtils()
const {d, d2, dpc, data, images, useToggle} = useHelpers()
const {copyText} = useUtils()
const FRONTAPP = ref<any>(import.meta.env.VITE_APP_FRONT_PATH + project.value?.id)
const route = useRoute()
const response = ref<any>(null)
const token = ref<string>("");
const title = ref<string>("")
const reform = ref<Form[][]>(FormProject)
const loading = ref<boolean>(false)
const activeTab = ref<number>(0);
const containerId = ref<string>("pin_input")
const links = ref<ProjectRoutes[]>([])

const tabs = ref<string[]>(['詳細', '設定', '地図のピン', 'ロゴ画像',])
const query = ref({})
const items = ref<DropdownMenu[]>([
  {
    label: '編集',
    icon: 'pi pi-pencil',
    command: () => {
      onload.value = ""
      title.value = project.value?.name || ""
      tabs.value = ['詳細', '設定', '地図のピン', 'ロゴ画像',]
      reform.value = FormProject
      if (!checkPermission(project.value?.permissions, "is_token") && !user.value?.is_superuser)
        reform.value = findAndUpdateFormElement(reform.value, "token_on", "disabled", true, 1)
      else
        reform.value = findAndUpdateFormElement(reform.value, "token_on", "disabled", false, 1)

      query.value = {
        id: null,
        name: null,
        company: null,
      }
      nextTick((): void => {
        useToggle({
          method: "patch",
          endpoints: ["projects/" + project.value?.id, "project_details/" + project.value?.id],
          state: "project"
        }, project.value)
      })
    },
  },
  {
    label: 'APIトークン作成',
    icon: 'pi pi-unlock',
    command: (): void => {
      onload.value = "トークン作成中"
      title.value = "トークン"
      tabs.value = []
      query.value = {project: project.value?.id,}
      reform.value = FormProjectApiToken
      reform.value[0][1].elements[0].model = new Date()
      reform.value[0][1].elements[1].model = new Date()
      nextTick((): void => {
        useToggle({
          method: "post",
          endpoints: ["project_api_tokens", "project_details/" + project.value?.id],
          state: "project"
        })
      })
    },
  },
  {
    label: 'APIトークン一覧',
    icon: 'pi pi-list',
    command: (): void => {
      d2.value = true
    },
  },
  {
    label: 'JSON エクスポート',
    icon: 'pi pi-database',
    command: (): void => {
      window.open(import.meta.env.VITE_APP_DATABASE_URL + "project_details/" + project.value?.id + "/?format=json", "_blank")
    },
  },
])


onMounted((): void => {
  if (!checkPermission(project.value?.permissions, "is_token"))
    items.value = items.value.filter(item => !["APIトークン作成", "APIトークン一覧"].includes(item.label))
  updateNavLinks()
})

function updateNavLinks(): void {
  links.value = JSON.parse(JSON.stringify(project.value?.routes || [])).filter((item: ProjectRoutes) => {
    return item.active
  }).filter((item: Routes) => {
    return !["Frame1", "Frame2"].includes(item.component as string)
  })
  if (user.value?.is_staff || user.value?.is_superuser) {
    links.value.unshift({panel_name: "ProjectRoutes", title: "ルート"})
    links.value.unshift({panel_name: "ProjectScopePermissions", title: "パーミッション"})
  }

  /* tokyu fdou dake  */
  if (!user.value?.company_owner && user.value?.company === 29499988) {
    links.value = links.value.filter(item => {
      return !["ColorSimulator", "Plans", "VistaSimulator"].includes(item.name as string)
    })
  }
}

function removeImage() {
  loading.value = true
  payload.value = {
    method: "patch",
    endpoints: ["projects/" + data.value.id, "project_details/" + project.value?.id],
    state: "project"
  }
  if (activeTab.value === 2) submit({pin: null}, null, "object").then(() => {
    loading.value = false
    images.value = []
  })
  else if (activeTab.value === 3) submit({logo: null}, null, "object").then(() => {
    loading.value = false
    images.value = []
  })
}

function removeToken(id: number): void {
  loading.value = true
  remove("project_api_tokens/" + id).then(() => {
    get("project_details/" + project.value?.id, "project").then(() => {
      setTimeout(() => {
        loading.value = false
      }, 500)
    })
  })
}

watch(() => project.value, project => {
  updateNavLinks()
  FRONTAPP.value = import.meta.env.VITE_APP_FRONT_PATH + project?.id
  if (activeTab.value === 2) {
    images.value = project?.pin ? [{image: project.pin}] : []
  } else if (activeTab.value === 3) {
    images.value = project?.logo ? [{image: project.logo}] : []
  }
})

watch(() => response.value, val => {
  if (val && query.value.hasOwnProperty("project")) {
    onload.value = "encryption スタート"
    loading.value = true
    setTimeout((): void => {
      const site: string = import.meta.env.VITE_APP_FRONT_PATH
      token.value = site + project.value?.id + "/?token=" + val.token_id
      loading.value = false
      nextTick((): void => {
        dpc.value = true
      })
    }, 2000)
  }
})

watch(() => d.value, val => {
  if (!val) {
    dpc.value = false
    activeTab.value = 0
    token.value = ""
    response.value = null
  }
})

watch(() => dpc.value, val => {
  if (!val) {
    token.value = ""
    response.value = null
  }
})

watch(() => activeTab.value, val => {
  if (val === 0) {
    images.value = []
    query.value = {
      id: null,
      order_id: null,
      name: project.value?.name,
      context: project.value?.context,
      address: project.value?.address,
      archive: project.value?.archive,
      token_on: project.value?.token_on,
      salon_view: project.value?.salon_view,
      legacy: project.value?.legacy
    }
  } else if (val === 1) {
    images.value = []
    query.value = {
      salon: project.value?.salon,
      salon_view: project.value?.salon_view,
      archive: project.value?.archive,
      token_on: project.value?.token_on,
    }
  } else if (val === 2) {
    query.value = {
      logo: null,
      logo_width: null,
      logo_height: null,
      logo_place: 3,
      archive: project.value?.archive,
      token_on: project.value?.token_on,
      salon_view: project.value?.salon_view,
      legacy: project.value?.legacy
    }
    images.value = project.value?.pin ? [{image: project.value.pin}] : []
    containerId.value = "pin_input"
  } else if (val === 3) {
    query.value = {
      pin: null,
      pin_width: project.value?.pin_width,
      pin_height: project.value?.pin_height,
      archive: project.value?.archive,
      token_on: project.value?.token_on,
      salon_view: project.value?.salon_view,
      legacy: project.value?.legacy
    }
    images.value = project.value?.logo ? [{image: project.value.logo}] : []
    containerId.value = "logo_input"
  }
})

</script>
<style>

#project .toolbar .part-wrap .title {
  margin-right: 10px;
}

#project .toolbar .part-wrap .p-button {
  border-radius: 0;
  height: 26px;
  width: 26px;
  padding: 0;
  background-color: #ffffff;
  border: 0;
  color: #969595;
  transition: .3s;
}

#project .toolbar .part-wrap .p-button:hover {
  color: #1a1f21;
  background-color: #f1f1f1;
}

#project .toolbar .part-wrap .p-button:enabled:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: none;
}

#project .toolbar .part-wrap .p-button .pi-chevron-down {
  position: relative;
  top: 3px;
}

#project .toolbar span.divider {
  height: 40%;
  width: 2px;
  margin-left: 12px;
  background-color: #dcdde1;
}


#project .toolbar a.pn-item {
  height: 30px;
  padding: 0 8px;
  font-size: .75rem;
  font-weight: 500;
  color: #969595;
}

#project .toolbar a.pn-item:first-child {
  margin-left: 14px;
}

#project .toolbar a.pn-item.active {
  background-color: rgba(116, 185, 255, 0.2);
  color: #0984e3;
}

#project .token-dialog {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .7);
}

#project .token-dialog .window {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 500px;
  background-color: #FFFFFF;
  padding: 20px;
  transform: translate(-50%, -50%);
  box-shadow: rgba(149, 157, 165, 0.7) 0px 8px 24px;
}

#project .token-dialog .window h4 {
  font-size: 1.1rem;
  font-weight: 400;
  margin-top: 14px;
  margin-bottom: 24px;
}

#project .token-dialog .window input {
  height: 38px;
  width: 100%;
  border: 1px solid #ced6e0;
  border-radius: 0;
  background-color: rgba(116, 185, 255, 0.04);
  outline: 0;
  padding-left: 8px;
  font-size: .75rem;
  padding-right: 40px;
}

#project .token-dialog .window p {
  font-size: .7rem;
  color: #969595;
  margin-top: 10px;
}

#project .token-dialog .window i {
  cursor: pointer;
  position: absolute;
  font-size: 1rem;
  color: #969595;
  right: 4px;
  width: 30px;
  height: 30px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ffffff;
  border: #edeae9;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
}

#project .token-dialog .window i:hover {
  color: #1D4ED8;
}

#project .token-dialog .window .action-wrapper {
  height: 40px;
}
</style>

