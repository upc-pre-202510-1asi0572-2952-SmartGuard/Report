<template>
    <div class="flex flex-col md:flex-row h-full min-h-screen bg-gray-100">
        <SideBar class="w-full md:w-[15%]" />

        <main class="w-full lg:w-[85%] mx-auto p-6 bg-gray-200 flex flex-col  gap-10 text-black">

            <div class=" flex flex-col bg-blue-500 max-w-5xl">


                <div class="flex flex-row justify-between">
                    <div class="flex flex-col gap-10">
                        <h1 class=" text-2xl font-semibold">Estadísticas</h1>
                        <span>Resumen de actividad y estadísticas del sistema asegurador</span>
                    </div>

                    <div class="flex flex-col gap-10">
                        <Select v-model="homeSelected" :options="homes" optionLabel="name"
                            placeholder="Selecciona un Hogar" class="w-full md:w-56" />
                        <Select v-model="diaSelected" :options="dias" optionLabel="name" placeholder="Select a City"
                            class="w-full md:w-56" />
                    </div>
                </div>

                <div class="flex gap-10">

                    <div
                        class=" rounded-2xl px-4 py-2 flex flex-col justify-center items-center gap-4 border-2 border-gray-300">
                        <h3 class=" text-5xl">{{ Accesos }}</h3>
                        <span class=" text-gray-600">Accesos</span>
                    </div>

                    <div
                        class=" rounded-2xl px-4 py-2 flex flex-col justify-center items-center gap-4 border-2 border-gray-300">
                        <h3 class=" text-5xl">{{ Mienbros }}</h3>
                        <span class=" text-gray-600">Mienbros</span>
                    </div>

                    <div
                        class=" rounded-2xl px-4 py-2 flex flex-col justify-center items-center gap-4 border-2 border-gray-300">
                        <h3 class=" text-5xl">{{ Dispositivos }}</h3>
                        <span class=" text-gray-600">Dispositivos</span>
                    </div>

                    <div
                        class=" rounded-2xl px-4 py-2 flex flex-col justify-center items-center gap-4 border-2 border-gray-300">
                        <h3 class=" text-5xl">{{ Inicidentes }}</h3>
                        <span class=" text-gray-600">Inicidentes</span>
                    </div>



                </div>

            </div>


        </main>
    </div>

</template>

<script>
import SideBar from '../components/home/SideBar.vue';
export default {
    data() {
        return {
            Accesos: 24,
            Mienbros: 3,
            Dispositivos: 1,
            Inicidentes: 3,
            homeSelected: null,
            homes: [
                { name: 'Bogotá' },
                { name: 'Medellín' },
                { name: 'Cali' },
                // Agrega más ciudades si es necesario
            ],

            diaSelected: null,
            dias: [
                { name: '30 días' },
                { name: '20 días' },
                { name: '10 días' },
                { name: '7 días' },
                { name: '1 días' },
            ]
        }
    },
    components: {
        SideBar,
    }
}
</script>
<style lang="">

</style>