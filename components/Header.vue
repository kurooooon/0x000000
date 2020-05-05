<template>
  <header class="container header">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="/">
        <b-img alt="logo" src="/logo_transparent64x64.png" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/" exact active-class="active">Home</b-nav-item>
          <b-nav-item to="/about" active-class="active">About</b-nav-item>
          <b-nav-item to="/works" active-class="active">Works</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style>
.header {
  font-family: 'Oxanium';
}
</style>
