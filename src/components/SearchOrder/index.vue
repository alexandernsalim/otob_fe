<template>
    <div class="input-group">
        <input type="search" class="form-control" placeholder="Enter Your Order Id Here"
               v-model="searchText" @keyup.enter="doSearch">

        <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="doSearch">Search</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search-order",
        data () {
            return {
                searchText: ''
            }
        },
        methods: {
            doSearch () {
                this.$emit('doSearch', this.searchText)
            }
        }
    }
</script>

<style scoped>
    .input-group {
        margin: auto;
        margin-top: 10px;
        max-width: 90%;
    }
    .input-group-append button{
        margin-left:0;padding:0.25em
    }
</style>