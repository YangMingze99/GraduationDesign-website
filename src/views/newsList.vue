<template>
	<div>
		<headerNavBar></headerNavBar>
		<div class="newsListBanner"></div>
		<div class="newsListShowBox">
			<div class="breadcrumbBox">
				<span class="breadcrumbTitle">当前位置：<b-icon style="color: #0056b3;" icon="house-fill" scale="1.2" shift-v="1.25"
					 aria-hidden="true"></b-icon></span>
				<b-breadcrumb :items="items"></b-breadcrumb>
			</div>
			<div class="newsList" :style="{height:newsListBoxHeight}">
				<div class="newsList_left">
					<navBarItem :currentClassify="items[1]" :currentItem="items[items.length-1]"></navBarItem>
				</div>
				<div class="newsList_right" ref="rightList">
					<router-view :key='$route.fullPath'></router-view>
				</div>
			</div>
		</div>
		<indexFooter></indexFooter>
	</div>

</template>
<script>
	import headerNavBar from "@/components/header.vue";
	import indexFooter from "@/components/footerComponents/footer_index.vue";
	import navBarItem from "@/components/navBarItemComponents/navBarItem_1.vue"
	export default {
		name: "newsList",
		components: {
			headerNavBar,
			indexFooter,
			navBarItem
		},
		data() {
			return {
				items: [],
				newsListBoxHeight: ''
			}
		},
		created: function() {
			let temp = [{
				text: '首页',
				to: '/',
			}];
			this.$route.matched.filter((item, index, self) => {
				if (item.name) {
					let newPath = {};
					newPath.text = item.name;
					newPath.to = item.path;
					temp.push(newPath);
					this.$data.items = temp;
				}
			});
		},
		computed: {
			
		},
		watch: {
			'$route'(to, from) {
				this.matchedArr();
				// console.log(this.$refs.rightList.offsetHeight)
				this.$data.newsListBoxHeight = this.$refs.rightList.offsetHeight + "px";
			}

		},
		mounted() {
			// console.log(window.getComputedStyle(this.$refs.rightList).height)
			//设置高度
			this.$data.newsListBoxHeight = this.$refs.rightList.offsetHeight + "px"
		},
		methods: {
			matchedArr() {
				let temp = [{
						text: '首页',
						to: '/',
					}],
					temps = [];
				this.$route.matched.filter((item, index, self) => {
					if (item.name) {
						let newPath = {};
						newPath.text = item.name;
						newPath.to = item.path;
						temp.push(newPath);
					}
				});
				temp.filter((item, index, self) => {
					if (!temps.includes(item)) {
						temps.push(item);
					}
				})

				this.$data.items = temps;
				return temps;
			}
		}
	}
</script>
<style lang="less" scoped>
	.newsListBanner {
		margin-top: 5rem;
		width: 100%;
		height: 170px;
		background: url(../assets/images/listbanner.jpg) no-repeat;
		background-position: 0 -6.125rem;
	}

	.newsListShowBox {
		// border: 1px solid green;
		min-height: 18.75rem;

		.breadcrumbBox {
			position: relative;

			.breadcrumbTitle {
				position: absolute;
				left: 1rem;
				top: 50%;
				color: #6c757d;
				transform: translateY(-50%);
			}

			ol {
				padding-left: 7.3rem;
				margin-bottom: 0;

				li a:hover {
					text-decoration: none;
				}

				li {
					cursor: pointer;
				}

				li:nth-last-child(1) {
					cursor: default;
				}
			}
		}

		.newsList {
			position: relative;
			margin-top: 25px;
			display: flex;
			margin-bottom: 150px;

			.newsList_left {
				margin-left: 50px;
			}

			.newsList_right {
				position: absolute;
				border: 1px solid red;
				width: 70%;
				left: 25%;
				top: 55px;

			}
		}
	}

	//ipad 竖屏（pro）
	@media only screen and (min-width : 1024px) and (max-width: 1366px) and (orientation : portrait) {}

	//ipad 横屏（pro）
	@media only screen and (min-width : 1024px) and (max-width: 1366px) and (orientation : landscape) {}

	//ipad 横屏
	@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : landscape) {}

	//ipad 竖屏
	@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : portrait) {}

	//手机端
	@media screen and (max-width: 767px) {}
</style>
