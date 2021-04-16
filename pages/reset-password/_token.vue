<template>
    <div>
        <div>
        <TitlePage titleText="Reset password"/>
        </div>
        <form class="form__login w-1/3 mx-auto">
    
            <div class="form__group">
                <label class="block text-sm font-medium text-gray-700">New Password</label>
                <input class="border-2 rounded-sm my-1 h-10 w-full" type="password" v-model="password" name="password" placeholder="Password"/>
            </div>

            <div class="form__group">
                <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input class="border-2 rounded-sm my-1 h-10 w-full" type="password" v-model="password2" name="password" placeholder="Confirm Password"/>
            </div>

            <div class="form__group">
                <button type="submit" @click.prevent="resetPassword" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                </span>
                Send
                </button>
            </div>

            <div class="message__error" v-if="messageError">
                {{messageError}}
            </div>
        </form>
    </div>
</template>

<script>
    import FormGroup from "../../components/ui/FormGroup";
    import TitlePage from "../../components/ui/TitlePage";
    import axios from 'axios'
    
    export default {
        components:{
            FormGroup, TitlePage
        },
        data: function () {
            return {
                password:"",
                password2:"",
                messageError:""
            }
        },
        methods: {
            async resetPassword() {
                const response = await axios.post('http://localhost:3030/api/v1/reset-password', {
                    password: this.password,
                    password2: this.password2
                });

                console.log(response)

            }
        }
    }
</script>

<style lang="sass" scoped>
</style>