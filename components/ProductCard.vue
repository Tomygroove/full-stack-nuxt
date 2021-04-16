<template>
  <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
     
        <img v-bind:src='productObject.imageUrl' alt="" />

    <div class="px-6 py-4">
      
    <NuxtLink :to="`product/${ productObject.id}`">
       <div class="font-bold text-xl mb-2"> 
        {{ productObject.title }}
       </div>
        <p class="text-grey-darker font-bold text-base mb-3">{{ productObject.price }} €</p>
         <p class="text-grey-darker text-base">{{ productObject.description}}</p> 
    </NuxtLink>
   </div>
    <button @click="()=>addToCart(productObject)" class="flex-no-shrink p-2 border-2 bg-blue-500 rounded text-teal border-teal hover:text-white hover:bg-teal">Ajouter au panier</button>
     <button @click="()=>addToCartFav(productObject)"  class="flex-no-shrink p-2 bg-red-500 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"><span>♥</span></button>
  <button class="flex-no-shrink p-2 bg-pink-500 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"> <NuxtLink :to="`product/${ productObject.id}`"> {{product}}</NuxtLink>Voir le produit  </button>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    productObject: Object,
  },
  methods: {
      addToCart: function(productObject) {
        this.$store.commit('addToCart',productObject)
     }
    ,
       addToCartFav: function(productObject) {
        this.$store.commit('addToCartFav',productObject)
      }
  }
};
</script>

<style lang="scss" scoped></style>