<template>
    <div class="title__page my-5">
        <h1 class="mt-6 text-center text-3xl font-extrabold text-gray-900">{{titleText}}</h1>
    </div>
</template>

<script>
    export default {
        name:"TitlePage",
        props : {
            titleText: {
                type: String,
                required:true
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>