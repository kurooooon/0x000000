<template>
  <footer class="footer">
    <ul class="icons">
      <li>
        <a target="_blank" href="https://twitter.com/0x000000_net">
          <font-awesome-icon :icon="twitter" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://soundcloud.com/kurooooon">
          <font-awesome-icon :icon="soundCloud" />
        </a>
      </li>
      <li>
        <a href="mailto:0x000000.official@gmail.com">
          <font-awesome-icon :icon="mail" />
        </a>
      </li>
    </ul>
    <p class="footer-text text-center">©2020 0x000000,Inc.</p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default Vue.extend({
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      soundCloud: faSoundcloud,
      twitter: faTwitter,
      mail: faEnvelope
    }
  }
})
</script>

<style lang="scss">
.footer {
  background-color: var(--primary);
  padding: 3rem 1.5rem;
  font-family: 'Oxanium';
}
.footer-text {
  margin: 0;
}
.icons {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  list-style: none;

  li {
    display: inline-block;
    margin-right: 1rem;

    a {
      color: inherit;
    }

    &:last-child {
      margin: 0;
    }
  }
}
</style>
