<template>
	<div id="app">
		<router-view />
	</div>
</template>
<script>
	export default {
		methods: {
			getObjectId(name) {
				this.$api.navItemApi
					.getParentIDByName(name)
					.then((result) => {
						this.$store.commit('setCurrentParentId', result.data.data[0].classId);
					})
					.catch((err) => {
						console.warn(err, "id获取失败");
					});
			}
		},
		watch: {
			$route: function(to, from) {
				if (to.name != "Index") {
					this.getObjectId(to.matched[0].name)
					this.$api.navItemApi
						.getParentIDByName(to.name)
						.then((result) => {
							this.$store.commit('setCurrentChildrenId', result.data.data[0].classId);
						})
						.catch((err) => {
							console.warn(err, "id获取失败");
						});
				}
			},
		},
	};
</script>
<style lang="less">
</style>
