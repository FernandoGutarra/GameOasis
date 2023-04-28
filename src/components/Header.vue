<template>
  <header class="header">
    <nav class="navbar" :class="{ activenavbar: isLineActive }">
      <div class="container">
        <div class="item_1">
          <router-link class="navbar_brand" to="/"><h1>Game Oasis</h1></router-link>
        </div>
        <div class="item_2">
          <div class="menu_container">
            <Nav_items></Nav_items>
          </div>
        </div>
        <div class="item_3">
          <div class="bars__menu" @click="toggle_line">
            <span
              class="line1__bars__menu"
              :class="{ activeline1__bars__menu: isLineActive }"
            ></span>
            <span
              class="line2__bars__menu"
              :class="{ activeline2__bars__menu: isLineActive }"
            ></span>
            <span
              class="line3__bars__menu"
              :class="{ activeline3__bars__menu: isLineActive }"
            ></span>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import Nav_Items from "./Nav-items.vue";
export default {
  name: "HeaderComponent",
  components: {
    Nav_items: Nav_Items,
  },
  data() {
    return {
      isLineActive: false,
    };
  },
  methods: {
    toggle_line() {
      this.isLineActive = !this.isLineActive;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/Header.scss";
</style>