<template>
    
    <input
        type="text"
        class=" px-4 py-2 rounded-md border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        @click="_onClick"
        :placeholder="_placeholder"
    />


</template>
<script>
export default {
    data() {

    },
    props: {
        _placeholder: {
            type: String,
            default: "Botón"
        },
        _onClick: {
            type: Function,
            required: true
        }
    }
}
</script>
<style lang="">

</style>