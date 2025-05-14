<template>
    <button :class="`cursor-pointer p-2 rounded-xl text-white transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg ${_color}`" @click="_onClick">
        {{ _texto }}
    </button>
</template>
<script>
export default {
    data() {

    },
    props: {
        _texto: {
            type: String,
            default: "Ingresar"
        },
        _onClick: {
            type: Function,
            required: true
        },
        _color: {
            type: String,
            default: "bg-blue-500"
        },
    }
}
</script>
<style lang="">

</style>