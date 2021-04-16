<template>
    <div class="page__account">
        <TitlePage titleText="Mon compte"/>
        <div class="message__error text-center" v-if="!isLogged">
            <p>Vous n'êtes pas connecté</p>
        </div>
        <div v-else>
            <div class="user__content text-center">
                <p>Nom: {{user.firstName}}</p>
                <p>Prénom : {{user.lastName}}</p>
                <p>Email: {{user.email}}</p>
                <p>Phone: {{user.phone}}</p>
                <p>Address: {{user.address}}</p>
            </div>
            <router-link to="update-account" class="font-medium text-indigo-600 hover:text-indigo-500">
                        Update my informations
            </router-link>
            <router-link to="history-order" class="font-medium text-indigo-600 hover:text-indigo-500">
                        My history order
            </router-link>
            <div class="logout__wrapper">
                <button @click="logout">Se déconnecter</button>
            </div>
        </div>
    </div>
</template>

<script>
    
    import TitlePage from "../components/ui/TitlePage";
    import VueJwtDecode from "vue-jwt-decode";
    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                isLogged: false,
                user:{}
            }
        },
        middleware:"auth",
        methods: {
            logout: function() {
                localStorage.removeItem('token');
                this.isLogged=false;
            }
        },
        beforeMount() {
            const token =  localStorage.getItem('token');
            if(token) {
                const jwtDecoded = this.$decodeJwt(token);
                this.$getUser(jwtDecoded._id,token)
                .then(data => {
                    console.log(data);
                    this.isLogged = true;
                    this.user = data;
                })
                .catch(err=>console.log(err))
            }
        }
        
        }
</script>

<style lang="scss" scoped>
</style>