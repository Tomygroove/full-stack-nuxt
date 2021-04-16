<template>
    <div class="page__login">
        <TitlePage titleText="Create your account"/>
        <form class="form__login w-1/3 mx-auto">

            

            <div class="form__group">

                <button type="submit" @click.prevent="redirectLogin" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign up
                </button>
            </div>

            <div class="message__error" v-if="messageError">
                {{messageError}}
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    import FormGroup from "../../components/ui/FormGroup";
    import TitlePage from "../../components/ui/TitlePage";
    export default {
        components:{
            FormGroup, TitlePage
        },
        data: function () {
            return {
                messageError:""
            }
        },
        methods: {
            async redirectLogin() {
                const response = await axios.get('http://localhost:3030/login', {
                    
                    email: this.email,
                });
                
                this.$router.push('/login');

            }
        }
    }
</script>

<style lang="scss" scoped>
</style>