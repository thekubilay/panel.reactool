<template>
  <div id="sidebar_admin">
    <nav>
      <div class="part">
        <router-link class="nav-item flex align-center" exact-active-class="active"
                     :to="{name:'Admin', params:{cid:route.params.cid}}">会社
        </router-link>
        <router-link class="nav-item flex align-center" exact-active-class="active"
                     :to="{name:'Users', params:{cid:route.params.cid}}">ユーザー
        </router-link>
        <router-link class="nav-item flex align-center" exact-active-class="active"
                     :to="{name:'Salons', params:{cid:route.params.cid}}">サロン
        </router-link>
        <router-link class="nav-item flex align-center" exact-active-class="active"
                     :to="{name:'Projects', params:{cid:route.params.cid}}">プロジェクト
        </router-link>
        <router-link class="nav-item flex align-center" exact-active-class="active"
                     :to="{name:'Routes', params:{cid:route.params.cid}}">アプリルート
        </router-link>
        <router-link class="nav-item flex align-center" exact-active-class="active"
                     :to="{name:'ProjectPermissions', params:{cid:route.params.cid}}">プロジェクト権限
        </router-link>
        <router-link class="nav-item flex align-center" exact-active-class="active"
                     :to="{name:'News', params:{cid:route.params.cid}}">ニュース
        </router-link>
        <router-link class="nav-item flex align-center" exact-active-class="active"
                     :to="{name:'Tutorials', params:{cid:route.params.cid}}">ツートーリアル
        </router-link>
        <router-link class="nav-item flex align-center" exact-active-class="active"
                     :to="{name:'LogsError', params:{cid:route.params.cid}}">エラーログ
        </router-link>
      </div>
      <div class="part last">
        <router-link class="flex align-center" :to="{name:'Dashboard', params:{cid:user.company}}">APP管理画面へ</router-link>
        <a class="flex align-center" :href="location+'/admin/'" target="_blank">BEモデル管理へ</a>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import useStore from "@/helpers/useStore";
import {useRoute} from "vue-router";

const route = useRoute()

const {user,} = useStore()
const location = ref<string>(window.location.origin)

</script>
<style>
#sidebar_admin {
  height: 100%;
  width: 254px;
  min-width: 254px;
  border-right: 2px solid #f5f6fa;
  background-color: #ffffff;
}

#sidebar_admin > nav {
  height: 100%;
  padding-top: 24px;
}

#sidebar_admin > nav .part.last {
  margin: 14px 14px 0 14px;
  border-top: 1px solid rgba(211, 211, 211, 0.4);
  padding-top: 10px;
}

#sidebar_admin > nav .part a.nav-item {
  height: 30px;
  font-weight: 400;
  color: #a8a8a8;
  font-size: 1rem;
  padding: 0 14px;
}

#sidebar_admin > nav .part a.nav-item:hover {
  color: #555555;
}

#sidebar_admin > nav .part .nav-item.active,
#sidebar_admin > nav .part .nav-item.active:hover {
  color: #e74c3c;
}

#sidebar_admin > nav .part.last a {
  color: #a8a8a8;
  margin-top: 5px;
  margin-bottom: 10px;
}

#sidebar_admin > nav .part.last a:hover {
  color: #e74c3c;
}

#sidebar_admin > nav .part.last a > svg {
  width: 12px;
  position: relative;
  /*top: 1px;*/
  margin-left: 7px;
  color: #777777;
}
</style>
