<template>
  <div>
    <v-header></v-header>
    <v-leftnav></v-leftnav>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import LeftNav from '@/components/container/leftNav.vue'
export default {
  components: {
    'v-header': Header,
    'v-leftnav': LeftNav
  }
}
</script>

<style scoped>

</style>
