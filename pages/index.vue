<template>
  <section class="hero is-primary is-fullheight">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand" :style="{ 'align-items': 'center' }">
            <a class="navbar-item">
              <figure class="image is-64x64">
                <img
                  alt=""
                  src="/logo_transparent64x64.png"
                  :style="{ 'min-height': '100%' }"
                />
              </figure>
            </a>
            <span
              class="navbar-burger burger"
              data-target="navbarMenuHeroA"
              @click="isOpenBurger = !isOpenBurger"
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div
            id="navbarMenuHeroA"
            class="navbar-menu"
            :class="{ 'is-active': isOpenBurger }"
          >
            <div class="navbar-end">
              <a class="navbar-item is-active">
                Home
              </a>
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Works
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body" :style="{ 'justify-content': 'center' }">
      <h1 class="is-size-1">
        0x000000
      </h1>
    </div>
    <!-- Hero footer: will stick at the bottom -->
    <footer class="footer">
      <div class="has-text-centered">
        <p>©2020 0x000000,Inc.</p>
      </div>
    </footer>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import '../css/style.css'

export default Vue.extend({
  components: {},
  data() {
    return {
      isOpenBurger: false
    }
  }
})
</script>

<!--
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
-->
