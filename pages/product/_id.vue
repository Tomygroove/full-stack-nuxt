<template>
    <div>
        <TitlePage titleText="Product details"/>
        <div class="product__content text-center" v-if="product"> 
            <p>Title: {{product.title}}</p>
            <p>Price: {{product.price}}</p>
            <p>Description: {{product.description}}</p>
        </div>
    </div>
</template>

<script>
    import Product from "../../apollo/queries/product.gql";

    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                product:{}
            }
        },
        apollo: {
            product: {
                query: Product, 
                variables() {
                    return {
                        id: this.$route.params.id
                    }
                },
                update(data) {
                    return data.product;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>