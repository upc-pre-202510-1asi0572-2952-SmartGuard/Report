<template>
<div class="container mx-auto px-4 py-8">

    <section class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div class="flex justify-center">
            <img class="" src="../assets/profile.png" />
        </div>
        <div class="flex flex-col justify-center gap-4">
            <Button />
            <Button />
            <Button />
        </div>

    </section>

    <section class="grid grid-cols-2 gap-4">
        <InputTexto _placeholder="joe.doe@gmail.com" :_onClick="handleClick" />
        <InputTexto _placeholder="joe.doe@gmail.com" :_onClick="handleClick" />
        <InputTexto _placeholder="joe.doe@gmail.com" :_onClick="handleClick" />
        <InputTexto _placeholder="joe.doe@gmail.com" :_onClick="handleClick" />
        <InputTexto _placeholder="joe.doe@gmail.com" :_onClick="handleClick" />
        <InputTexto _placeholder="joe.doe@gmail.com" :_onClick="handleClick" />
        <Button class="col-span-2 mt-4" />
    </section> 
</div>
</template>











<script lang="ts">
import Button from '../components/shared/button.vue'
import InputTexto from '../components/shared/InputTexto.vue';


export default {
    components: {
        Button,
        InputTexto,
    },
    methods: {
        handleClick() {
            console.log("Botón clickeado desde la vista")
        }
    }
}
</script>



<style scopeed></style>