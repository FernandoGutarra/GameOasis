<template>
 <div class="navbar_items">
        <ul class="navbar_nav">
          <li class="navbar_item">
            <router-link class="navbar_link" to="/">Inicio</router-link>
          </li>
          <li class="navbar_item">
            <router-link class="navbar_link " to="/"
              >Categorias</router-link
            >
          </li>
          <li class="navbar_item">
            <router-link class="navbar_link" to="/"
              >Requisitos</router-link
            >
          </li>
          <li class="navbar_item">
            <router-link class="navbar_link" to="/"
              >Emuladores</router-link
            >
          </li>
          <li class="navbar_item">
            <router-link class="navbar_link" to="/"
              >Contacto</router-link
            >
          </li>
           <li class="navbar_item">
            <router-link class="navbar_link" to="/"
              >Mods</router-link
            >
          </li>
        </ul>
      </div>
</template>
<script>
export default {
    name: "Nav_items"
}
</script>
<style lang="scss" scoped>
 @import "../styles/NavItems.scss";
</style>