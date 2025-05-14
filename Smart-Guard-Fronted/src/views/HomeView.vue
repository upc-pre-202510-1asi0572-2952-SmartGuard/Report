<template>
  <div class="flex h-screen">
    <!-- Sidebar: 15% del ancho -->
    <SideBar/>
    <!-- Contenido principal: 85% restante -->
    <main class="w-[85%] bg-gray-100">
      
      <!-- <div class=" flex flex-col gap-4 max-w-4xl">
        <div class="flex flex-col gap-2">
          <h1 class="text-gray-800 text-2xl font-semibold">No se ha registrado ningú n hogar en tu cuenta</h1>
          <span class=" text-gray-600">Para comenzar, registra un hogar desde el panel principal.</span>
        </div>
        <img src="../assets/smart-home/not-home.png" alt="">
        <Button _texto = "Registrar Hogar" class=" max-w-xl"></button>  
      </div> -->
      <HomeSpace/>
    </main>

  </div>
</template>

<script>
import SideBar from '../components/home/sidebar.vue';
import Button from '../components/shared/Button.vue';
import HomeSpace from '../components/HomeSpace.vue';

export default {
  components:{
    SideBar,
    Button,
    HomeSpace
  }
}
</script>

<style scoped>
</style>
