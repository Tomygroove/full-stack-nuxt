<template>
    <footer class="footer__main text-center">
        <div class="footer__logo"></div>
        <div class="footer__nav"></div>
        <div class="footer__bottom">
            <p>{{ copyright }}</p>
        </div>
    </footer>
</template>

<script>
    export default {
        data: function() {
            return{
                copyright: "Copyright 2021"
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>