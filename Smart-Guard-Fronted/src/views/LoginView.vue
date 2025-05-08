<template>
    <!-- <section class="w-screen h-screen flex bg-white">

         Seccion izquierda
        <section class=" w-1/2 bg-gray-200 flex flex-col items-center justify-center">
            <img class=" w-80" src="../assets/House.png" />

            <div class=" bg-gray-300 flex flex-col items-center justify-center">
                <h1 class="uppercase font-semibold text-black">Más que seguridad, tranquilidad Inteligente en tu hogar
                </h1>
                <span>Consigue tu cerradura inteligente y dale mayor seguridad a tu hogar</span>
            </div>
        </section>


         Seccion Derecha 
        <section class="w-1/2 text-black bg-amber-200">
            


            <div class="flex flex-col gap-10 items-center max-w-3xl bg-green-400">
                <header class="flex flex-col items-center">
                    <h1>Inicio</h1>
                    <span class=" text-gray-600">Bienvenido! Por favor, ingree sus datos</span>
                </header>
                    

                <main class="flex flex-col gap-5 bg-red-200">
                    <InputTexto _placeholder="joe.doe@gmail.com" :_onClick="handleClick" />
                    <InputTexto _placeholder="Contraseña" :_onClick="handleClick" />
                    <div class="flex gap-5">
                        <input type="radio" name="recuerda" id="recuerda" class="text-blue-600 focus:ring-blue-500">
                        <label for="recuerda" class="text-gray-700 text-sm">Recuérdame</label>
                    </div>    
                </main>
                    
            </div>



        </section>
    </section> 
    -->

    <section class="w-screen h-screen flex bg-gray-200 text-black">

        <!-- Sección Izquierda -->
        <section class="w-1/2 bg-gray-100 flex flex-col items-center justify-center p-8">
            <img class="mb-6" src="../assets/House.png" />
            <div class="text-center max-w-sm">
                <h1 class="uppercase font-bold text-xl mb-2">Más que seguridad, tranquilidad inteligente en tu hogar
                </h1>
                <span class="text-gray-600">Consigue tu cerradura inteligente y dale mayor seguridad a tu hogar</span>
            </div>
        </section>

        <!-- Sección Derecha -->
        <section class="w-1/2 flex items-center justify-center bg-white p-10">
            
            <div class="flex flex-col gap-4 w-full max-w-xl bg-white p-8 rounded-xl shadow-lg">
                
                <header class="mb-8 text-center">
                    <h1 class="text-2xl font-semibold mb-1">Inicio</h1>
                    <span class="text-gray-500">¡Bienvenido! Por favor, ingresa tus datos</span>
                </header>

                <main class="flex flex-col gap-4">
                    <InputTexto _placeholder="joe.doe@gmail.com" :_onClick="handleClick" />
                    <InputTexto _placeholder="Contraseña" :_onClick="handleClick" />
                   
                    <div class="flex items-center gap-2 mt-2">
                        <input type="radio" name="recuerda" id="recuerda" class="accent-blue-600">
                        <label for="recuerda" class="text-sm text-gray-700">Recuérdame</label>
                    </div>
                    
                    <Button />
                    <a href="" class=" text-blue-400 text-center"><span>Olvidaste tu contraseña?</span></a>
                </main>
         
                <footer class="flex flex-col gap-3">
                    <IngreseConGoogle _texto="Ingrese con Google"/>
                    <IngreseConFacebook _texto="Ingrese con Facebook"/>
                    <IngreseConApple _texto="Ingrese con Apple"/>
                    
                    <div class="flex flex-col gap-0 text-center">
                        <span>Primera vez Aqui? 
                            <a href="youtube.com" class=" text-blue-500">Registrate Gratis</a>
                        </span>
                    </div>
                    
                </footer>

                    
            </div>
        </section>

    </section>



</template>











<script lang="ts">
import Button from '../components/shared/button.vue'
import InputTexto from '../components/shared/InputTexto.vue';
import IngreseConGoogle from '../components/shared/IngreseConGoolge.vue';
import IngreseConFacebook from '../components/shared/IngreseConFacebook.vue';
import IngreseConApple from '../components/shared/IngreseConApple.vue';


export default {
    components: {
        Button,
        InputTexto,
        IngreseConGoogle,
        IngreseConApple,
        IngreseConFacebook
    },
    methods: {
        handleClick() {
            console.log("Botón clickeado desde la vista")
        }
    }
}
</script>



<style scopeed></style>