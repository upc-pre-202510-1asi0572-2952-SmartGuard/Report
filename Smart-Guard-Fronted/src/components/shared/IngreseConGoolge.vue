<template>
      
      <div class="py-1 rounded-xl border-2 border-gray-200 grid grid-cols-5 items-center">
        <img src="../../assets/google-logo.webp" class=" p-2 w-10 h-10 col-span-1" alt="icon" />
        <span class="col-span-4 text-center">{{ _texto }}</span>
    </div>

</template>
<script>
export default {
    data() {

    },
    props: {
        _texto: {
            type: String,
            default: "Botón"
        }
    }
}
</script>
<style lang="">

</style>