<template>
  <div>
    <v-header></v-header>
    <v-leftnav></v-leftnav>
    <v-mainPage></v-mainPage>
    <v-sidebar></v-sidebar>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import LeftNav from '@/components/container/leftNav.vue'
import Footer from '@/components/footer/footer.vue'
import Sidebar from '@/components/sidebar/sidebar.vue'
import MainPage from '@/components/mainPage/MainPage.vue'
export default {
  components: {
    'v-header': Header,
    'v-leftnav': LeftNav,
    'v-footer': Footer,
    'v-sidebar': Sidebar,
    'v-mainPage': MainPage
  }
}
</script>

<style scoped>

</style>
