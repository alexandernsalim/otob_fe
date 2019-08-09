<template>
    <div class="orders">
        <div class="container header-body">
            <div class="block">
                <div class="row content-header">
                    <div class="col-sm-12">
                        <span>Pesanan {{orders.orderId}}</span>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="filter">
                        <table width="100%" class="table table-hover table-striped table-scroll small-first-col">
                            <thead>
                            <tr class="col-sm-12">
                                <th width="5%">No</th>
                                <th width="30%">Nama Produk</th>
                                <th width="15%">Jumlah</th>
                                <th width="25%">Harga Satuan</th>
                                <th width="25%"> Harga Total</th>
                            </tr>
                            </thead>

                            <tbody class="scrollContentCart">
                            <tr ref="listItemCart" class="col-sm-12" v-if="orders.ordItems.length != 0" v-for="(item, index) in orders.ordItems" :key="index" >
                                <td width="5%"><b>{{ index+1 }}</b></td>
                                <td width="30%">{{ item.productName }}</td>
                                <td width="15%">{{ item.qty }}</td>>
                                <td width="25%">Rp {{ item.productPrice }}</td>
                                <td width="25%">Rp {{item.qty * item.productPrice}}</td>
                            </tr>

                            <tr class="col-sm-12" v-else>
                                <td width="4%" class="empty-cart" style="text-align: center"><h5>Empty Order :(</h5></td>
                            </tr>
                            </tbody>

                        </table>
                    </div>
                    <b-row id="sec4">
                        <div v-if="orders.ordStatus === 'Waiting'">
                            <b-button
                                    variant="success"
                                    class="mr-2"
                                    v-on:click="confirm(orders.ordId)"
                            >
                                Accepted
                            </b-button>
                        </div>
                        <div v-if="orders.ordStatus === 'Waiting'">
                            <b-button
                                    variant="danger"
                                    class="mr-2"
                                    v-on:click="reject(orders.ordId)"
                            >
                                Reject
                            </b-button>
                        </div>
                    </b-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Approvement",
        props: {
            'auth': ''
        },
        data(){
            return{
                fields: [
                    {
                        key : 'index',
                        label : 'No.'
                    },
                    {
                        key : 'productName',
                        label : 'Nama Produk'
                    },
                    {
                        key : 'qty',
                        label : 'Jumlah'
                    },
                    {
                        key : 'productPrice',
                        label : 'Harga Per Item'
                    },
                    {
                        key : 'hargaTotal',
                        label : 'Harga Total'
                    },
                ],
                orders: [],
                products: {
                    products_id: 0,
                    products_name: '',
                    jumlah: 0,
                    harga: 0,
                    status: '',
                },
            };
        },
        methods: {
            updateProductStatus(status, index){
                this.products = this.orders.ordItem[index-1];
                this.products.status = status;
                try {
                    this.$store.dispatch('updateStatusProduct',this.products);
                }
                catch(e)
                {
                    alert(e);
                }
            },
            confirm(id){
                let orderReq = []
                orderReq = this.$store.getters.getOrderById(id);
                return this.$store.dispatch('acceptOrders', orderReq)
            },
            reject(id){
                let orderReq = []
                orderReq = this.$store.getters.getOrderById(id);
                return this.$store.dispatch('rejectOrders', orderReq)
            },
            getOrders(){
                let par = ''
                par = this.$route.params.id
                this.orders = this.$store.getters.getOrderById(par);
            }
        },
        mounted() {
            if(this.auth.isCashier == false){
                this.$router.push('/forbidden')
            }
            
            this.$store.dispatch('getOrders')
            this.getOrders();
        }
    }
</script>

<style scoped>
    .block{
        font-family: 'Glegoo', Helvetica, Arial, serif !important;
        background-color:white;
        padding: 1em;
        border-radius:0.5em;
        -webkit-box-shadow: 0 8px 6px -6px #999;
        -moz-box-shadow: 0 8px 6px -6px #999;
        box-shadow: 0 8px 6px -6px #999;
        transition: transform 0.3s;
    }

    .block:hover {
        box-shadow: 0 1px 10px #999;
    }
    .content-header {
        margin: auto;
        max-width: 100%;
        font-size: 1.8rem;
        font-weight: bold;
    }
    .table {
        margin: auto;
        margin-top: 10px;
        max-width: 100%;
        padding: 10px;
    }
    th {
        text-align: center;
    }
    #sec4{
        text-align: right;
        float: right;
    }
</style>
© 2019 GitHub, Inc.