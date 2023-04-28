<template>
  <div>
    <div class="loading" v-if="isLoading">
      <h5>Cargando...</h5>
    </div>
    <div class="game" v-else>
      <img
        :key="currentGame.url"
        :src="currentGame.url"
        :alt="`imagen-${currentGame.title}`"
        class="game__image"
      />
      <h3 class="game__title">{{ currentGame.title }}</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/PopularGameCard.scss";
</style>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["products"]),
    isLoading() {
      return this.products.length === 0;
    },
    currentGame() {
      return this.products[this.currentGameIndex];
    },
  },
  data() {
    return {
      currentGameIndex: 0,
    };
  },
};
</script>


