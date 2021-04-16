<template>
    <div class="products__list">
       
        <section class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-20">
      <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <ProductCard v-for="product in productsArray" :key="product.id" :productObject="product" >
        <li class="relative">
          <div class="block overflow-hidden w-full group aspect-w-10 aspect-h-7">
              {{product}}
          </div>
        </li>
        </ProductCard>
        
      </ul>
    </section>
    </div>
</template>

<script>
import ProductCard from "./ProductCard";
    export default {
        name:"ProductGrid",
        props: {
            productsArray: Array
        },
        components: {
            ProductCard
        }
    }
</script>

<style>
</style>