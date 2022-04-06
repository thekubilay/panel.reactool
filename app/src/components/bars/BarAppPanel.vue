<template>
  <header id="bar_app" class="container flex justify-space-between">
    <div class="bar-app-brand">
      <router-link class="brand flex align-center" :to="{name:'Dashboard', params:{cid:user.company}}">
        <Icon svg="reactool" width="100px"/>
      </router-link>
    </div>

    <div class="bar-app-global-filter flex align-center">
      <FilterApp />
    </div>

    <div class="bar-app-global-actions flex justify-end">
      <router-link v-if="user.is_superuser" class="tutorials flex align-center justify-center" :to="{name:'BoardTutorials', params:{cid:route.params.cid}}"><i class="pi pi-question-circle"></i></router-link>
      <button @click="newsSummary=!newsSummary" class="news-button flex align-center justify-center relative">
        <span v-if="unseen>0" class="badge flex align-center justify-center text-center">{{ unseen }}</span>
        <i class="pi pi-bell" :class="{active:unseen>0}"></i>
      </button>

      <transition name="fade">
        <div v-if="newsSummary" class="news" ref="newsOutside">
          <div class="header flex align-center">
            <h3 class="ht">通知</h3>
          </div>
          <div class="body relative">
            <div v-for="n in user.news" class="row flex align-center" @click="select(n)">
              <div class="content">
                <span class="date">{{n.created_at.substring(0, 10)}}</span>
                <h4 class="title">{{ n.title }}</h4>
                <div class="content">{{n.content.replace(/<[^>]*>?/gm, '').substring(0, 50)}}</div>
              </div>
              <div v-if="!n.seen" class="unseen block relative"><span class="badge"></span></div>
              <div @click.stop="removeNews(n.id)" v-if="n.seen" class="unseen flex align-center justify-center relative"><span class="remove flex align-center justify-center"><i class="pi pi-trash"></i></span></div>
            </div>
            <div v-if="!user.news.length" class="empty flex align-center justify-center">空</div>
          </div>
        </div>
      </transition>

      <DropdownButton id="user_menu" final :label="user?.username" :items="menuItems"/>
    </div>

    <Dialog v-model="d" :title="user?.username">
      <FormQuery v-model="d"
                 v-model:active-tab="activeTab"
                 close-after
                 topProgress
                 :progress="progress"
                 :form="form"
                 :onload="onload"
                 :data="user"
                 :query="query"
                 :submit="submit"/>
    </Dialog>
    <Dialog v-model="d2" title="パスワード更新">
      <FormUserChangePassword v-model="d2"/>
    </Dialog>

    <Dialog v-model="newsContent" :title="selectedNews && selectedNews.title" overflow>
      <div class="d-content-header flex align-center justify-end">{{ selectedNews?.created_at?.substring(0, 10) }}</div>
      <div class="d-content-body">
        <div v-html="selectedNews?.content"></div>
      </div>
    </Dialog>
  </header>
</template>

<script lang="ts" setup>
import FormQuery from "@/components/form/FormQuery.vue";
import Icon from "../../components/icons/Icon.vue";
import DropdownButton from "@/components/buttons/ButtonDropdown.vue";
import Dialog from "@/components/dialog/Dialog.vue";
import FormUserChangePassword from "@/components/form/templates/FormUserChangePassword.vue";

import {onMounted, reactive, ref, watch} from "vue";
import {LocationQueryValue, useRoute, useRouter} from "vue-router";
import {form} from "@/components/form/templates/FormUserUpdate"
import useStore from "@/helpers/useStore";
import useHelpers from "@/common/useHelpers";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import {CreateOrUpdateUser} from "@/types/User";
import {onClickOutside} from '@vueuse/core'
import {News} from "@/types/News";
import APIexecutor from "@/services/APIexecutor";
import FilterApp from "@/components/filters/FilterApp.vue";


const route = useRoute()
const router = useRouter()
const {get} = APIexecutor()
const {submit, remove} = useFormRequestBuilder()
const {user, onload, progress, payload} = useStore()
const {d, d2, useToggle} = useHelpers()
const query = reactive<CreateOrUpdateUser>({id: null, first_name: null, last_name: null, email: null, username: null})
const unseen = ref<number>(0)
const newsSummary = ref<boolean>(false)
const activeTab = ref(0)
const newsOutside = ref<any>()
const newsContent = ref<boolean>(false)
const selectedNews = ref<News | null>(null)
const menuItems = ref<DropdownMenu[]>([
  {
    label: 'プロフィール',
    icon: 'pi pi-user',
    command: (): void => {
      useToggle({method: "patch", endpoints: ["users/" + user.value?.id, "users/current"], state: "user"})
    }
  },
  {
    label: 'パスワード更新',
    icon: 'pi pi-lock',
    command: (): void => {
      d2.value = true
    }
  },
  {
    label: '管理パネル',
    icon: 'pi pi-cog',
    command: (): void => {
      router.push({name: "Admin"})
    }
  },
  {
    label: 'ログアウト',
    icon: 'pi pi-sign-out',
    command: (): LocationQueryValue => {
      return location.href = import.meta.env.VITE_APP_LOGOUT
    }
  }
])

const select = (n: News): void => {
  selectedNews.value = n
  newsContent.value = true
  newsSummary.value = false
  if (!n.seen){
    payload.value = {
      method: "patch",
      endpoints: ["user-news/"+n.id, "users/current"],
      state: "user",
    }
    submit({seen:true}, null, "object").then(() => {
      setTimeout(() => {
        unseen.value = user.value?.news.filter(item => !item.seen).length || 0
      }, 1000)
    })
  }
}

const removeNews = (id:number): void => {
  remove("user-news/"+id).then(() => {
    get("users/current", "user").then((user) => {
      unseen.value = user.news?.filter((item:News) => !item.seen).length || 0
    })
  })
}

onMounted((): void => {
  unseen.value = user.value?.news.filter(item => !item.seen).length || 0
  if (!user.value?.is_superuser && !user.value?.is_staff) {
    menuItems.value = menuItems.value.filter(item => {
      return item.label !== "管理パネル"
    })
  }
})

onClickOutside(newsOutside, (e: any): void => {
  newsSummary.value = false
})


watch(() => activeTab.value, val => {
  if (val === 0) {
    payload.value = {method: "patch", endpoints: ["users/" + user.value?.id, "users/current"], state: "user"}
  } else {
    payload.value = {method: "patch", endpoints: ["users", "users/current"], state: "user"}
  }
})

</script>

<style>
header#bar_app {
  height: 40px;
  min-height: 40px;
  background-color: #161a1d;
}
header#bar_app .bar-app-brand {
  width: 240px;
}
header#bar_app .bar-app-global-filter {
  height: 100%;
  margin-right: auto;
}

header#bar_app .bar-app-global-actions a.tutorials {
  height: 30px;
  width: 30px;
  margin-right: 0;
  padding-bottom: 2px;
}
header#bar_app .bar-app-global-actions button.news-button {
  height: 30px;
  width: 30px;
  margin-right: 0;
  padding-bottom: 2px;
}

header#bar_app .bar-app-global-actions a.tutorials i,
header#bar_app .bar-app-global-actions button.news-button i {
  font-size: 1rem;
  color: #969595;
  z-index: 1;
}

header#bar_app .bar-app-global-actions button.news-button i.active {
  color: #FFFFFF;
}

header#bar_app .bar-app-global-actions button.news-button span.badge {
  position: absolute;
  z-index: 2;
  top: 2px;
  right: 0;
  padding: 0 4px .7px 4.4px;
  font-size: .6rem;
  border-radius: 50%;
  background-color: #e74c3c;
  color: #FFFFFF;
}

header#bar_app .bar-app-global-actions .news {
  z-index: 101;
  right: 74.5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  position: absolute;
  top: 44px;
  background-color: #FFFFFF;
  width: 244px;
  min-height: 100px;
}

header#bar_app .bar-app-global-actions .news:after {
  content: '';
  position: absolute;
  display: block;
  width: 0;
  z-index: 1;
  border-style: solid;
  border-color: #FFFFFF transparent;
  border-width: 0 8px 9px;
  top: -9px;
  left: 88%;
  margin-left: -2px;
}

header#bar_app .bar-app-global-actions .news .header {
  height: 40px;
  padding: 5px 10px;
  border-bottom: 1px solid #edeae9;
}

header#bar_app .bar-app-global-actions .news .header > h3 {
  font-size: 1rem;
  font-weight: 500;
}

header#bar_app .bar-app-global-actions .news .body {
  overflow-y: scroll;
  max-height: 400px;
}
header#bar_app .bar-app-global-actions .news .body > .empty {
  height: 60px;
  color: #969595;

}

header#bar_app .bar-app-global-actions .news .body > .row {
  padding: 5px 10px;
  border-bottom: 1px solid #edeae9;
}

header#bar_app .bar-app-global-actions .news .body > .row:hover {
  background-color: rgba(9, 132, 227, 0.1);
  cursor: pointer;
}

header#bar_app .bar-app-global-actions .news .body > .row span.date {
  font-size: .7rem;
  color: #969595;
  font-weight: 500;
}
header#bar_app .bar-app-global-actions .news .body > .row h4 {
  font-size: .8rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

header#bar_app .bar-app-global-actions .news .body > .row div.content {
  width: 90%;
}

header#bar_app .bar-app-global-actions .news .body > .row div.content {
  padding-bottom: 1px;
  font-size: .75rem;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

header#bar_app .bar-app-global-actions .news .body > .row div.unseen {
  width: 10%;
}

header#bar_app .bar-app-global-actions .news .body > .row div.unseen > span.badge {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  transform: translate(-50%, -50%);
  box-shadow: rgba(55, 66, 250, 1) 0px 1px 1px 0px inset, rgba(55, 66, 250, 1) 0px 50px 100px -20px, rgba(55, 66, 250, 1) 0px 30px 60px -30px;
  background-color: rgba(55, 66, 250, 0.99);
}
header#bar_app .bar-app-global-actions .news .body > .row div.unseen span {
  width: 40px;
  height: 40px;
}
header#bar_app .bar-app-global-actions .news .body > .row div.unseen span i {
  font-size: 1rem;
  color: #e74c3c;
}

header#bar_app .d-content-header {
  height: 30px;
  padding: 0 14px;
  color: #969595;
  font-size: .7rem;
}
header#bar_app .d-content-body {
  padding: 14px;
  font-size: .8rem;
}
</style>
