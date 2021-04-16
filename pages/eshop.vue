<template>
    <div>
       <TitlePage titleText="Eshop"/>
        <div class="laoder" v-if="loading">
            ...loading
        </div>
        <div class="search__form">
            <p>Entrez votre recherche : </p>
            <input class="search__input" placeholder="Recherche" type="text" name="searchValue" v-model="searchValue"/>
        </div>
        <div class="post__grid text-center" v-for="product in productsArray" :key="product.id">
            <div class="product__item">
                <p> {{ product.title }}</p>
                <p> {{ product.price }} €</p>
                <div>
                    <img v-bind:src='product.imgUrl' alt="" height="400" width="400" />
                </div> 
                <NuxtLink :to="`product/${product.id}`">See more</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
    import TitlePage from "../components/ui/TitlePage";
    import Products from "../apollo/queries/products.gql";
    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                searchValue:"",
                productsArray: [],
                loading: 0
            }
        },
        computed: {
            filteredShop: function() {
                let filter = new RegExp(this.searchValue, 'i');
                return this.productsArray.filter(item=>item.title.match(filter));
            }
        },
        apollo : {
            $loadingKey:"loading",
            productsArray: {
                prefetch:true,
                query : Products,
                update(data) {
                    console.log(data.products);
                    console.log(this.loading);
                    return data.products;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>