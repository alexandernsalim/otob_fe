<template>
	<div>
		<div class="not-found">
			<h1>Sorry, page not found :(</h1>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			auth: {}
		},
		mounted () {
			if(this.auth.isLogin == false){
				this.$router.push('/')
			}
		},
	}
</script>

<style>
	.not-found {
		text-align: center;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>

