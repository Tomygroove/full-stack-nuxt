<template>
    <div class="page__contact">
        <TitlePage titleText="Contact"/>

        <form class="form__contact w-1/3 mx-auto">
    
            <div class="form__group">
                <label class="block text-sm font-medium text-gray-700">Nom</label>
                <input class="border-2 rounded-sm my-1 h-10 w-full" type="name" v-model="name" name="name"/>
            </div>

            <div class="form__group">
                <label class="block text-sm font-medium text-gray-700">Adresse email</label>
                <input class="border-2 rounded-sm my-1 h-10 w-full" type="email" v-model="email" name="email"/>
            </div>
            
            <div class="form__group">
                <label class="block text-sm font-medium text-gray-700">Objet</label>
                <input class="border-2 rounded-sm my-1 h-10 w-full" type="subject" v-model="subject" name="subject"/>
            </div>

            <div class="form__group">
                <label class="block text-sm font-medium text-gray-700">Message</label>
                <textarea class="border-2 rounded-sm my-1 w-full" cols="30" rows="10" type="message" v-model="message" name="message"/>
            </div>

            <div class="form__group">
                <button type="submit" @click.prevent="sendEmail">Envoyer</button>
            </div>
            <!-- <div class="success__message">
                {{successMessage}}
            </div> -->
        </form>
    </div>
</template>

<script>
    import TitlePage from "../components/ui/TitlePage";

    export default {
        components: {
            TitlePage
        },
        data: function () {
            return {
                name:"",
                email:"",
                subject:"",
                message:"",
            };
        },
        methods: {
            
            sendEmail: function() {
                console.log(this.name, this.message, this.subject, this.email);
                fetch('/middleware/send-email', {
                    method: "POST",
                    headers: {
                        "Content-type":"application/json"
                    },
                    body: JSON.stringify({
                        name: this.name,
                        message: this.message,
                        subject: this.subject,
                        email: this.email,
                    })
                })
                .then(res=>res.json())
                .then(data=>console.log(data))
                .catch(err=>console.log(err))
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>