<template>
    <div class="cart__page text-center">
        <TitlePage titleText="Mon panier"/>
        <button 
            type="submit" 
            @click.prevent="clearCartAndRefresh" 
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Delete card
        </button>
        <div class="card__content content-center ">
            <div v-if="cardArray">
              
            <table>
                <thead>
                    <tr>
                       
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <client-only>
                    <tr v-for="product in cardArray" :key="product.id">
                       
                        <td>
                            {{product.title}}
                        </td>
                        <td>
                            <button @click="()=>removeQty(product)">-</button>
                            {{product.qty}}
                            <button @click="()=>addQty(product)">+</button>
                        </td>
                        <td>
                            {{product.price}}
                        </td>
                        <td>
                            {{ product.price * product.qty }}
                        </td>
                        <td>
                            <button @click="() => deleteItem(product)">Delete</button>
                        </td>
                    </tr>
                    </client-only>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total</th>
                        <th></th>
                        <th></th>
                        <th>{{calcQty}}</th>
                        <th>{{calcTotal }}</th>
                    </tr>
                </tfoot>
             </table> 
            
            
            <button  @click="() => order()" class="px-12 py-4 text-white bg-pink-500 rounded-md focus:bg-blue-600 focus:outline-none">Commander</button>            
            <div v-if="orderPass == true" > 
                <p>Order validate !</p>
            </div>
            
            </div>
            <div v-else> 
                <p>Order empty</p>
            </div>

        </div>
    </div>
</template>

<script>
    import TitlePage from "../components/ui/TitlePage";
   
    export default {
        components:{
            TitlePage,
            
        },
        data: function () {
            return {
                cardArray:[],
                orderPass: false,
                products: []
            }
        },
        created() {
            this.cardArray = this.$getCart();
        },
        computed: {
            calcTotal: function() {
                return this.$getCartTotal(this.cardArray)
            },
            calcQty: function() {
                return this.$getCartCount(this.cardArray);
            }
        },
        filters: {
            formatNumber: function(value) {
                return value.toFixed(2);
            }
        },
        methods: {
            clearCartAndRefresh: function() {
                this.$clearCart();
                this.cardArray=this.$getCart();
            },
            removeQty: function(product) {
                this.$removeOneQty(product);
                this.cardArray=this.$getCart();
            },
            addQty: function(product) {
                this.$addOneQty(product);
                this.cardArray=this.$getCart();
            },
            deleteItem: function(product) {
                this.$removeItemCart(product);
                this.cardArray=this.$getCart();
            },
            order: function() {
            const token = localStorage.getItem('token')
            if(token){
            const jwtDecode = this.$decodeJwt(token);
                (this.cardArray).forEach(element => {
                    this.products = element.id
                    
                });
               const body = {
                amountNumber: this.calcQty,
                totalAmount: this.calcTotal,
                user:jwtDecode.id,
                products: this.products
               }
   
               this.$order(body).then((data) =>{
                     console.log(data)
                     if(data){
                         this.orderPass = true
                     }
                }
                )
                .catch(err => console.log(err))
 
            }
            }
        },
    }
</script>

<style>
</style>