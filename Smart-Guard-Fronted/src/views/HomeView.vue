<template>
  <div class="flex h-screen">
    <!-- Sidebar: 15% del ancho -->
    <SideBar/>

    <!-- Contenido principal: 85% restante -->
    <main class="w-[85%] p-6 bg-gray-200 flex items-center justify-center">
      
      <div class=" flex flex-col gap-4 max-w-4xl">
        <div class="flex flex-col gap-2">
          <h1 class="text-gray-800 text-2xl font-semibold">No se ha registrado ningú n hogar en tu cuenta</h1>
          <span class=" text-gray-600">Para comenzar, registra un hogar desde el panel principal.</span>
        </div>
        <img src="../assets/smart-home/not-home.png" alt="">
        <Button _texto = "Registrar Hogar" class=" max-w-xl"></button>  
      </div>
    </main>

  </div>
</template>

<script>
import SideBar from '../components/home/SideBar.vue';
import Button from '../components/shared/Button.vue';
export default {
  components:{
    SideBar,
    Button
  }
}
</script>

<style scoped>
</style>
