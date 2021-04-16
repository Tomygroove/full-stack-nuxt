<template>
    <div class="page__ipdate-account">
        <div class="message__error text-center" v-if="!isLogged">
            <p>Vous n'êtes pas connecté</p>
        </div>
        <div class="user__content text-center" v-else>
        <TitlePage titleText="Update your account"/>
        <form class="form__login w-1/3 mx-auto">
                    <div class="form__group">
                        <label for="firstName" class="block text-sm font-medium text-gray-700">FirstName</label>
                        <input class="border-2 rounded-sm my-1 h-10 w-full"  type="text" v-model="firstName" name="name" id="name" placeholder="Firstname" required/>
                    </div>
                    <div class="form__group">
                        <label for="lastName" class="block text-sm font-medium text-gray-700">LastName</label>
                        <input class="border-2 rounded-sm my-1 h-10 w-full"  type="text" v-model="lastName" name="lastname" id="lastname" placeholder="Lastname" required/>
                    </div>
                    <div class="form__group">
                        <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                        <input class="border-2 rounded-sm my-1 h-10 w-full"  v-model="email" type="email" name="email" id="email" placeholder="Email" required/>
                    </div>
                     <div class="form__group">
                        <label for="passWord" class="block text-sm font-medium text-gray-700">New Password</label>
                        <input class="border-2 rounded-sm my-1 h-10 w-full"  type="text" v-model="password" name="passWord" id="passWord" placeholder="Password" required/>
                    </div>
                     <div class="form__group">
                        <label for="passWord" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input class="border-2 rounded-sm my-1 h-10 w-full"  type="text" v-model="password2" name="passWord" id="passWord2" placeholder="Confirm Password" required/>
                    </div>
                    <div class="form__group">
                        <label for="lastName" class="block text-sm font-medium text-gray-700">Phone</label>
                        <input class="border-2 rounded-sm my-1 h-10 w-full"  type="text" v-model="phone" name="phone" id="phone" placeholder="Phone" required/>
                    </div>
                   
                    <div class="form__group">
                        <button @click.prevent="sendUpdate" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Update informations
                        </button>
                    </div>

                    <router-link to="account" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Back to my account
                    </router-link>
                </form>
                  <div class="message__error" v-if="messageError"> 
                    {{ messageError }}
                </div>
            </div>
</div>


  
</template>

<script>
    
import FormGroup from "../components/ui/FormGroup";
import TitlePage from "../components/ui/TitlePage";
    
    export default {
        components:{
            FormGroup, TitlePage
        },
    data: function() {
        return {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
        phone: "",
        messageError:"",
        isLogged: false,
        user:{}
        };
    },
    middleware:"auth",
    methods: {
        sendUpdate: function() {
            const token = localStorage.getItem('token')
                if(token){
                    const jwtDecode = this.$decodeJwt(token);
                    const body = {
                        _id:jwtDecode.id,
                        firstName : this.firstName,
                        email : this.email,
                        lastName : this.lastName,
                        password : this.password,
                        phone: this.phone,
                        isAdmin: false 
                    }
                    console.log(this.firstName, this.lastName, this.email, this.password, this.password2, this.phone);
                        
                    fetch(
                        `${process.env.API_URL}/user/${jwtDecode._id}`,
                        {
                            method: "PUT",
                            headers:{
                                "Content-type":"Application/json"
                            },
                            body: JSON.stringify(body)
                        }
                        )
                        .then(res => res.json())
                        .then((data) =>{
                            console.log(data)
                    if(!data.auth){
                    this.messageError = data.message
                        }
                    else
                    {
                        this.$router.push('account');
                        }
                    })
                    .catch(err => console.log(err))
            }else{
                this.messageError = " Veuillez vous connecter a nouveau s'il vous plait"
            }
        
        }
    },
    beforeMount(){
            this.$getOrders()
            .then(data => {
                console.log(data)
                this.orders = data
            const token = localStorage.getItem('token')
            if(token){
            this.isLogged = true;
            const jwtDecode = this.$decodeJwt(token);
                this.result =  (this.orders).filter(function (item){
                      return item.user._id === jwtDecode.id;
                  });
              
             }
                })
            .catch(err => console.log(err))
            
        }
};
</script>

<style lang="scss" scoped></style>