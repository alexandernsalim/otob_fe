<template>
    <div class="input-group">
        <b-form-select
                v-model="status"
                placeholder="Cari berdasarkan status">
            <option value="waiting">Waiting</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
        </b-form-select>

        <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="doFilter">Search</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data () {
            return {
                status: ''
            }
        },
        methods: {
            doFilter () {
                this.$emit('doFilter', this.status)
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