<template>
  <div class="selectedProduct">
    <div class="selectedProduct_container_1">
      <img
        :src="selectedProduct.url"
        alt="`imagen-${selectedProduct.title}`"
        class="selectedProduct_img"
      />
    </div>
    <div class="selectedProduct_container_2">
      <h5 class="selectedProduct_title">{{ selectedProduct.title }}</h5>
      <div class="selectedProduct_price">
        $<span>{{ selectedProduct.price }}</span>
      </div>
      <div class="selectedProduct_talla">Talla Seleccionada</div>
      <button class="selectedProduct_btn_buy" @click="add(selectedProduct)">
        Agregar al Carrito
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../styles/SeeMore.scss";
</style>
<script>
import { useStore } from "vuex";
export default {
  props: ["product"],
  setup() {
    const store = useStore();
    const add = (product) => {
      console.log(product);
      store.dispatch("addtocart", product);
    };
    return { add };
  },
  computed: {
    selectedProduct() {
      return this.$store.state.selectedProduct;
    },
  },
};
</script>
