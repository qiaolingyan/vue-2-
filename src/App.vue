<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide"
import Header from './components/Header'
import { reqPosition, reqShops, reqCategories, reqSearchShops, reqLoginPwd, reqSendCode, reqLoginSms, reqUserinfo, reqCaptcha, reqLogout } from './api'
export default {
  name: "App",
  components: {
    FooterGuide
  }
};
</script>

<style scoped>
</style>
