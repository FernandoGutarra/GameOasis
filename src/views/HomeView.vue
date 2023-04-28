<template>
  <div class="home">
    <PopularGameCardVue></PopularGameCardVue>
    <div class="cards-container">
      <Card v-for="product of products" :key="product.id" :product="product"></Card>
    </div>
  </div>
</template>
<script>
import { computed, onMounted } from '@vue/runtime-core'
import {useStore} from 'vuex'
import Card from '../components/CardComponent.vue'
import PopularGameCardVue from '@/components/PopularGameCard.vue'
export default {
  name: "HomeView",
  components: {
    'Card': Card,
    'PopularGameCardVue' : PopularGameCardVue
  },
  setup() {
    const store = useStore()
    onMounted(()=>{
        store.dispatch('fetchData')
    })
    const products = computed(() => store.state.products)
    return {products}
  },
  }
</script>

<style lang="scss" scoped>
@import "src/styles/stylesView/Home.scss";
</style>

