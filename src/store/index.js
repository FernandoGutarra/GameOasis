import { createStore } from 'vuex'

export default createStore({
  state: {
    products : [],
    cart:{},
    selectedProduct: {}
  },
  getters: {
  },
  mutations: {
     setProducto(state, payload){
        state.products = payload
        console.log(state.products)
      },
      setCart(state, payload){
        state.cart[payload.id] = payload
      },
      setSelectedProduct(state, product) {
        // console.log(state.selectedProduct)
        state.selectedProduct = product;
        // console.log(state.selectedProduct)
      }
  },
  actions: {
    async fetchData({commit}){
      try{
        const res = await fetch('api.json')
        const data = await res.json()
        commit('setProducto', data)
      }catch(error){
          console.log(error)
      }
    },
    addtocart({ commit, state }, producto) {
      let id = producto.id;
      if (id in state.cart) {
        producto.cantidad = state.cart[id].cantidad + 1;
      } else {
        producto.cantidad = 1;
      }
      commit("setCart", producto);
    },
    sendProduct({ commit }, product) {
      commit("setSelectedProduct", product);
    }
  },
  modules: {
  }
})
