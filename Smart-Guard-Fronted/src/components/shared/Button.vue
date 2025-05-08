<template>
    <button :class="`p-2 rounded-md text-white ${_color}`" @click="_onClick">
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