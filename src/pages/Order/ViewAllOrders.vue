<template>
    <div class="orders">
        <div class="container header-body">
					<div class="block">
						<div class="row content-header">
							<div class="col-sm-12">
								<span>Daftar Pesanan</span>
							</div>
						</div>
						<div class="row content-header">
							<div class="col-sm-6">
									<search-order v-on:doSearch="doSearch"></search-order>
							</div>
							<div class="col-sm-6">
									<filter-order v-on:doFilter="doFilter"></filter-order>
							</div>
						</div>
						<div class="col-sm-12">
							<div class="filter">
								<table width="100%" class="table table-hover table-striped table-scroll small-first-col">

									<thead>
										<tr class="col-sm-12">
											<th width="4%">No</th>
											<th width="25%">Order Number</th>
											<th width="20%">Order Date</th>
											<th width="11%">Total Items</th>
											<th width="20%"> Total Price</th>
											<th width="10%"> Action</th>
										</tr>
									</thead>

									<tbody class="scrollContentCart">
										<tr ref="listItemCart" class="col-sm-12" v-if="listOfOrder.length != 0" v-for="(order, index) in listOfOrder" :key="index" >
												<td width="4%"><b>{{ index+1 }}</b></td>
												<td width="30%">{{ order.orderId }}</td>
												<td width="20%">{{ order.ordDate }}</td>
												<td  width="11%" style="text-align: center">{{ order.totItem }}</td>
												<td width="20%">Rp {{ order.totPrice }}</td>
												<td width="10%">
														<b-button
																		variant="outline-info"
																		size="sm"
																		v-on:click="viewDetail(order.orderId)"
																		class="mr-2">
																<icon name="eye" scale="1"></icon> View Details
														</b-button>
												</td>
										</tr>

										<tr class="col-sm-12" v-else>
												<td width="4%" class="empty-cart" style="text-align: center"><h5>Empty Order :(</h5></td>
										</tr>
									</tbody>

								</table>
							</div>
						</div>

					</div>
			</div>
    </div>
</template>

<script>
    import FilterOrder from '@/components/FilterOrder'
    import SearchOrder from '@/components/SearchOrder'
    export default {
        name: "ViewAllOrders",
        props: {
            'auth': ''
        },
        components: {FilterOrder, SearchOrder},
        data(){
            return{
                listOrders: [],
                format: "dd MM yyyy",
                filters: '',
            }
        },
				computed: {
					listOfOrder () {
						return this.$store.getters.ORDERS
					}
				},
        methods:{
            getAllOrders()
            {
                this.listOrders = this.$store.getters.ORDERS;
            },
            viewDetail(id){
                this.$router.push('orders/approvement/'+id)
            },
            doFilter(value) {
                this.listOrders =  this.$store.getters.getOrderByStatus(value)
            },
            doSearch(value) {
                this.listOrders =  this.$store.getters.getOrderById(value)
            }
        },
        mounted() {
            if(this.auth.isCashier == false){
                this.$router.push('/forbidden')
            }
            this.$store.dispatch('getOrders')
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
</style>