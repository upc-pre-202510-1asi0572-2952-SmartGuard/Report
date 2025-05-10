<template>
    <aside class="w-[15%] flex flex-col gap-5 bg-white text-black p-4">

      <!-- Header del sidebar -->
      <div class="flex flex-row items-center justify-center gap-3">
        <img src="../../assets/smart-home/logo-smart-home.png" class="w-8 h-8" alt="">
        <span class="text-2xl"><strong>Face</strong>Lock</span>
      </div>

      <!-- Sección de foto del usuario -->
      <div class="flex flex-row justify-center gap-2">
        <img src="../../assets/common/joven.jpg" alt="Foto de perfil"
          class="w-10 h-10 object-cover rounded-full shadow-md" />
        <div class="flex flex-col gap-0">
          <span class="text-gray-600">Bienvenido a casa</span>
          <span class="uppercase text-black">Julia</span>
        </div>
      </div>

      <!-- Menú de navegación -->
      <div class="flex flex-col p-4 gap-4 font-semibold">
        <div class="flex flex-row gap-4 text-blue-500">
          <img src="../../assets/Icons/home-icon.png" alt="">
          <span>Hogar</span>
        </div>
        <div class="flex flex-row gap-4 text-gray-600">
          <img src="../../assets/Icons/access-icon.png" alt="">
          <span>Accesos</span>
        </div>
        <div class="flex flex-row gap-4 text-gray-600">
          <img src="../../assets/Icons/dispositivos-icon.png" alt="">
          <span>Dispositivos</span>
        </div>
        <div class="flex flex-row gap-4 text-gray-600">
          <img src="../../assets/Icons/menbers-icon.png" alt="">
          <span>Miembros</span>
        </div>
        <div class="flex flex-row gap-4 text-gray-600">
          <img src="../../assets/Icons/stadisticas-icon.png" alt="">
          <span>Estadísticas</span>
        </div>
        <div class="flex flex-row gap-4 text-gray-600">
          <img src="../../assets/Icons/user-circle.png" alt="">
          <span>Perfil & Configuraciones</span>
        </div>
      </div>
    </aside>

</template>



<script>
export default {
    
}
</script>
