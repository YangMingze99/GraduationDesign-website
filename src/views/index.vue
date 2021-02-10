<template>
	<div class="index">
		<headerNavBar></headerNavBar>
		<indexMainSwiper></indexMainSwiper>
		<indexContainer></indexContainer>
		<indexFooter></indexFooter>
	</div>
</template>

<script>
	import headerNavBar from "@/components/header.vue";
	import indexMainSwiper from "@/components/indexMainSwiper.vue";
	import indexContainer from "@/components/indexContainer.vue";
	import indexFooter from "@/components/footerComponents/footer_index.vue";
	export default {
		name: "Index",
		components: {
			headerNavBar,
			indexMainSwiper,
			indexContainer,
			indexFooter
		},
	};
</script>
<style lang="less">
	.index {
		background-color: #f5f5f5;
	}
</style>
