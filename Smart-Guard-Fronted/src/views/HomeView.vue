<template>
  <div class="flex h-screen">
    <!-- Sidebar: 15% del ancho -->
    <sidebar></sidebar>

    <!-- Contenido principal: 85% restante -->
    <main class="w-[85%] p-6 bg-gray-200">
      <h1 class="text-2xl font-semibold">Contenido principal</h1>
      <p>Aquí va tu contenido...</p>
    </main>
    
  </div>
</template>

<script>
import sidebar from '../components/home/sidebar.vue';


export default {
  components:{
    sidebar
  }
}
</script>

<style scoped>
</style>
