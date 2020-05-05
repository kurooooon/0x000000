<template>
  <b-container class="main">
    <h1 class="glitch title" data-text="0x000000">0x000000</h1>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 6rem;

  @media (max-width: 576px) {
    font-size: 3rem;
  }
}
</style>
