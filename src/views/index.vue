<template>
	<div class="index">
		<headerNavBar></headerNavBar>
		<indexMainSwiper></indexMainSwiper>
	</div>
</template>

<script>
	import headerNavBar from "@/components/header.vue";
	import indexMainSwiper from "@/components/indexMainSwiper.vue"
	export default {
		name: "Index",
		components: {
			headerNavBar,
			indexMainSwiper
		},
	};
</script>
<style lang="less">
	.index {
		height: 900px;
	}
</style>
