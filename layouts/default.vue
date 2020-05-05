<template>
  <div class="wrapper">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default Vue.extend({
  components: {
    Header,
    Footer
  }
})
</script>

<style>
.wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>
