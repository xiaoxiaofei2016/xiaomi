<template>
  <div>
    <v-header></v-header>
    <v-leftnav></v-leftnav>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import LeftNav from '@/components/container/leftNav.vue'
import Footer from '@/components/footer/footer.vue'
export default {
  components: {
    'v-header': Header,
    'v-leftnav': LeftNav,
    'v-footer': Footer
  }
}
</script>

<style scoped>

</style>
