<template>
    <div class="form__group">
            <label>{{ textLabel }}</label>
            <input :type="inputType" :v-model="inputModel" :name="inputModel" />
        </div>
</template>

<script>
    export default {
        name:"FormGroup",
        props: {
            textLabel: !String,
            inputType: {
                type: String,
                required: true
            },
            inputModel: String
        }
    }
</script>

<style lang="scss" scoped>

</style>