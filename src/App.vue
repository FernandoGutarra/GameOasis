<template>
  <header-component></header-component>
  <div class="component-grid-container">
     <div class="sidebar">
          <sidebar-component></sidebar-component>
     </div>
    <div class="router-components">
      <router-view/>
    </div>
  </div>
  <footer-component></footer-component>
</template>

<style lang="scss">
  @import 'src/styles/Variables.scss';
  
  /* Estilos generales */
  * {
    font-family: sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  /* Contenedor de componentes */
  .component-grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    
    /* Cambiar a diseño de bloque en pantallas pequeñas */
    @media (max-width: 800px) {
      display: block;
    }
  }
  
  /* Barra lateral */
  .sidebar {
    grid-column: 1 / span 1;
    background-color: $Dark-blue;
    
    /* Ocultar en pantallas pequeñas */
    @media (max-width: 800px) {
      display: none;
    }
  }
  /* Componentes de la página */
  .router-components {
    grid-column: 2 / span 3;
  }
</style>
<script>
import SidebarComponet from './components/Sidebar.vue'
import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'
export default {
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent,
    'sidebar-component': SidebarComponet
  },
}
</script>