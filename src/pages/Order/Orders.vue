<template>
	<div class="orders">
		<div class="container header-body">
			<div class="block">
				<div class="row content-header">
					<div class="col-sm-12">
						<span>Pesanan Anda</span>
					</div>
				</div>
				<div class="col-sm-12">
					<search-order v-on:doFilter="doFilter"></search-order>
				</div>
				<div class="col-sm-12">
					<div class="filter">
						<b-table width="100%" class="table table-hover table-striped table-scroll small-first-col"
							:items="orders"
							:filter="filters"
							:fields="fields">
							<template slot="index" slot-scope="data">{{data.index+1}}</template>
							<template slot="totalPrice" slot-scope="data">Rp {{data.item.totPrice}}</template>
							<template slot="action" slot-scope="data">
								<b-button
									variant="outline-info"
									size="sm"
									v-on:click="viewDetail(data.item.ordId)"
									class="mr-2">
									<icon name="eye" scale="1"></icon> View Details
								</b-button>
							</template>
						</b-table>s
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<scrispt src="./Orders.js"></scrispt>
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
		max-width: 90%;
		font-size: 1.8rem;
		font-weight: bold;
	}
	.table {
		margin: auto;
		margin-top: 10px;
		max-width: 90%;
		padding: 10px;
	}
</style>