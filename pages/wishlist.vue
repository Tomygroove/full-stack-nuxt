<template>
<div>
  <div class="container">
    
    <div class="favoris grid grid-cols-2 gap-2" v-for="product in productArray" :key="product.id">
       
        <NuxtLink :to="`/product/${product.id}`">
          <img class="product__image " :src=product.imgUrl>
          <p>{{ product.title }}</p>
        </NuxtLink>
        <div class="btn__delete">
          <button type="submit" v-on:click="()=>removeProduct(product)">X</button>
        </div>
         
    </div>
  </div>
</div>
    
</template>

<script>
import wishlist from '../middleware/wishlist/wishlist';
    export default {
    data: function () {
        return {
            productArray: [],
            product: {}, 
        };
    },
    methods: {
      clearAllProducts: function () {
        this.clearWishlists();
        this.productArray = this.getProductWishlists();
      }
    },
    components: {
        Button,
    },
    mounted() {
        this.productArray = this.getProductWishlists();
        console.log(this.productArray)
    },
    fav:[wishlist]
}
</script>

<style>
</style>