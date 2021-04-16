<template>
  <div class="page__home"> 
      <div>
        <TitlePage titleText="Home"/>
        <div class="message__error text-center" v-if="!isLogged">
            <p>Hello Have good day !</p>
        </div>
        <div class="user__content text-center" v-else>
          <h3> Hello {{ user.firstName }} {{ user.lastName }}, we wish a good day !</h3>
      </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import VueJwtDecode from "vue-jwt-decode";
import TitlePage from "../components/ui/TitlePage";
    export default {
        components : {
            TitlePage
        },
        data: function () {
            return {
                isLogged: false,
                user:{}
            }
        },
        beforeMount() {
            const token =  localStorage.getItem('token');
            if(token) {
                const jwtDecoded = VueJwtDecode.decode(token);
                this.$getUser(jwtDecoded.id,token)
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
