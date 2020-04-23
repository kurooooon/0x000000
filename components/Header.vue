<template>
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
            <nuxt-link
              to="/"
              class="navbar-item"
              active-class="is-active"
              exact
              @click.native="toggleMenu"
            >
              Home
            </nuxt-link>
            <nuxt-link
              to="/about"
              class="navbar-item"
              active-class="is-active"
              @click.native="toggleMenu"
            >
              About
            </nuxt-link>
            <nuxt-link to="/works" class="navbar-item" active-class="is-active">
              Works
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      isOpenBurger: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpenBurger = !this.isOpenBurger
    }
  }
})
</script>
