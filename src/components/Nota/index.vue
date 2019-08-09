<template>
	<div class="" style="margin-bottom: 3em">
		<button class="btn btn-primary" @click="print">Test Print</button>
		<!-- SOURCE -->
		<div ref="transaction">
			<!-- Start pdf content -->
			<div class="container" style="background-color: white; padding:1em; border: 2px dashed #c2c2c2; margin-top: 2em">
				<header style="margin-top: 1em">
					<div class="row" style="justify-content:center">
<!--						<div>-->
<!--							<img src="@/assets/bli-logo.png" style="width: 50px; height: 50px; border: 1px solid #068aca">-->
<!--						</div>-->
						<div>
							<h2 style="line-height: 1.5em; padding-left: 1em"> Blibli Bazaar</h2>
						</div>
					</div>
					<hr style="border: 2px solid #c2c2c2;">
				</header>

				<div ref="print">
					<b>Hai {{ data.userEmail }}</b>
					<p ref="testing">
						Terimakasih telah berbelanja di Blibli Bazaar Apps. Berikut adalah kuitansi sebagai
						bukti transaksi anda. Bawa kuitansi ini ketika hendak melakukan pembayaran pesanan.
					</p>
					<p>
						Berikut detail pesanan anda:
					</p>
					<table width="100%" class="table table-bordered">
						<tr>
							<td width="15%"><span>Tanggal Transaksi</span></td>
							<td width="35%">{{ data.ordDate }}</td>
							<td width="15%"><span>Status Pesanan</span></td>
							<td width="35%">{{ data.ordStatus }}</td>
						</tr>
						<tr>
							<td><span>No. Pesanan</span></td>
							<td>{{ data.orderId }}</td>
							<td><span>Total Pembayaran</span></td>
							<td>{{ data.totPrice }}</td>
						</tr>
					</table>

					<p>
						Berikut daftar pesanan anda:
					</p>

					<table width="100%" class="table table-bordered">
						<tr v-for="product in data.ordItems">
							<td width="70%"><span> Nama Produk: </span> {{ product.productName}}</td>
							<td width="15%"><span> Jumlah: </span> {{ product.qty }}</td>
							<td width="15%"><span> Harga: </span> {{product.productPrice}}</td>
						</tr>
					</table>
				</div>
			</div>
			<!-- End of pdf content -->
		</div>
		<button @click="print"></button>
	</div>
</template>

<script>
	import jsPDF from 'jspdf'
	import html2canvas from "html2canvas"

	export default {
		name: "index.vue",
		data () {
			return {
				data: {
					"orderId": "ORD1564679880000",
					"userEmail": "nanihutagaol@gmail.com",
					"ordDate": "2019/08/02 00:18",
					"ordItems": [
						{
							"productId": 63,
							"productName": "new product",
							"productPrice": 89,
							"qty": 1
						},
						{
							"productId": 1,
							"productName": "product name ",
							"productPrice": 9000,
							"qty": 1
						}
					],
					"totItem": 2,
					"totPrice": 9089,
					"ordStatus": "Waiting"
				}
			}
		},
		methods: {
			print() {
				const doc = new jsPDF();
				const contentHtml = this.$refs.transaction.innerHTML;
				doc.fromHTML(contentHtml, 15, 15, {
					width: 170
				});
				doc.save("nota-transaksi.pdf");
			}
		}
	}
</script>

<style scoped>
span {
	color: #929292;
}
</style>