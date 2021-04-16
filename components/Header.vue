<template>
    <header class="header__main">
        <nav class="header__nav">
            <ul class="nav__wrapper">
                <li class="nav__item">
                    <NuxtLink to="/home" class="nav__link">
                        Home
                    </NuxtLink>
                </li>
                <li class="nav__item">
                    <NuxtLink to="/eshop" class="nav__link">
                        Eshop
                    </NuxtLink>
                </li>
                <li class="nav__item">
                    <NuxtLink to="/about" class="nav__link">
                        About
                    </NuxtLink>
                </li>
                <li class="nav__item">
                    <NuxtLink to="/contact" class="nav__link">
                        Contact
                    </NuxtLink>
                </li>
                
                <li class="nav__item">
                    <NuxtLink to="/login" class="nav__link">
                        Login
                    </NuxtLink>
                </li>

                <li class="nav__item">
                    <NuxtLink to="/account" class="nav__link">
                        Mon compte
                    </NuxtLink>
                    <!-- <NuxtLink to="/login" class="nav__link">
                        Logout
                    </NuxtLink> -->
                </li>
            </ul>
        </nav> 
    </header>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import {mapGetters} from 'vuex'

    export default {
    }
</script>

<style scoped>
    .nav__wrapper {
        display:flex;
        align-items:center;
        justify-content:center;
        margin: 20px 0px;
    }
    .nav__wrapper li {
        margin: 0px 20px;
    }
</style>