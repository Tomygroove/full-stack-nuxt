<template>
<div>
    <div v-if="isLogged == false" class = "text-center">
        <p>Vous n'etes pas connecté(e)</p>

    </div>
 
    <div class="container px-4 sm:px-8 text-center" v-else>
        <div>
            <h2 class="text-2xl font-semibold leading-tight">My Order History</h2>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <!-- <div class="inline-block min-w-full shadow rounded-lg overflow-hidden"> -->
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Produit
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                               Quantité
                            </th>
                            <th
                                class="px-15 py-15 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                               Total 
                            </th>
                               <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Date
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="order in result" :key="order.id" :orderObject="order">
                            <td class="px-5 py-25 border-b border-gray-200 bg-white text-sm w-5">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 w-25 h-10 hidden sm:table-cell">
                                       <p>{{order._id}}</p>
                                    </div>
                                   
                                </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap text-center"> {{order.amountNumber}}</p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap text-center">
                                    {{order.totalAmount}}
                                </p>
                            </td>
                             <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap text-center">
                                    {{order.createdAt}}
                                </p>
                            </td>
                        </tr>
             
                    </tbody>
                </table>
            </div>
        <!-- </div> -->
    </div>
    <router-link to="account" class="font-medium text-indigo-600 hover:text-indigo-500">
        Back to my account
    </router-link>
</div>
  

</template>

<script>
    import TitlePage from "../components/ui/TitlePage"
    import ProductGrid from "../components/ProductGrid"
    export default {
        components:{
            TitlePage,
            ProductGrid
        },
        data: function(){
            return{
                isLogged: false,
                orders: Array,
                result: [],
                isLogged: false,
                user:{}
            }
        },
        middleware:"auth",
        methods:{
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
}
</script>

<style>

</style>