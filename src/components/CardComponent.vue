<template>
  <router-link class="card_link" to="/vermas">
    <div class="card" @click="sendProduct(product)">
      <img
        :src="product.url"
        alt="`imagen-${product.title}`"
        class="card_img"
      />
      <div class="card_body">
        <h5 class="card_title">{{ product.title }}</h5>
      </div>
    </div>
  </router-link>
</template>
<style lang="scss" scoped>
@import "../styles/Card.scss";
</style>
<script>
import { mapActions } from "vuex";
export default {
  name: "CardComponent",
  props: ["product"],
  methods: {
    ...mapActions(["sendProduct"]),
  },
};
</script>

