<template>
	<!-- 我是containerBox我是containerBox我是containerBox我是containerBox   -->
	<div class="containerBox clearfix">
		<div class="containerBox_top animate__animated animate__fadeInLeft">
			<div class="containerBox_top_articleBar ">
				<ul>
					<li :class="{'articleBarSelected':articleBarIsSelected.articleBarOne}" @click="handleSelectBarOne">学院动态</li>
					<li :class="{'articleBarSelected':articleBarIsSelected.articleBarTwo}" @click="handleSelectBarTwo">通知公告</li>
				</ul>
			</div>
			<div class="containerBox_top_articleList ">
				<article class="containerBox_top_articleListOne animate__animated" :class="{'isShow':articleBarIsSelected.articleBarTwo ,'animate__fadeInLeft':articleBarIsSelected.articleBarOne ,'animate__fadeOutLeft':articleBarIsSelected.articleBarTwo}">
					<newsItemOne></newsItemOne>
				</article>
				<article class="containerBox_top_articleListTwo animate__animated" :class="{'isShow':articleBarIsSelected.articleBarOne ,'animate__fadeInRight':articleBarIsSelected.articleBarTwo ,'animate__fadeOutRight':articleBarIsSelected.articleBarOne}">
					<newsItemOne></newsItemOne>
				</article>
			</div>
			<div class="containerBox_top_moreBtn">
				<router-link to="#" target="_blank">查看更多</router-link>
			</div>
		</div>

	</div>
</template>
<script>
	import newsItemOne from '@/components/newsItemComponents/newsItem_1.vue'
	export default {
		name: 'indexContainer',
		components: {
			newsItemOne
		},
		data() {
			return {
				scroll: "",
				articleBarIsSelected: {
					articleBarOne: true,
					articleBarTwo: false,
				}
			};
		},
		methods: {
			scrollListener() {
				this.scroll =
					document.documentElement.scrollTop || document.body.scrollTop;
				// console.log(this.scroll,'indexContainer');
			},
			handleSelectBarOne(e) {
				this.$data.articleBarIsSelected.articleBarOne = true;
				this.$data.articleBarIsSelected.articleBarTwo = false;
			},
			handleSelectBarTwo(e) {
				this.$data.articleBarIsSelected.articleBarOne = false;
				this.$data.articleBarIsSelected.articleBarTwo = true;
			}
		},
		// mounted() {
		// 	window.addEventListener("scroll", this.scrollListener);
		// },
	}
</script>
<style lang="less" scoped>
	.clearfix:after {
		content: "";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}

	.clearfix {
		*zoom: 1;
	}

	.articleBarSelected {
		color: #337ab7 !important;
	}

	.articleBarSelected::after {
		position: absolute;
		content: "";
		bottom: -0.3125rem;
		left: 0;
		right: 0;
		width: 6rem;
		transition: width 2s;
		height: 3px;
		background-color: #337ab7;
	}

	.containerBox {
		width: 100%;
		background-color: rgb(245, 245, 245);
		position: relative;
		margin-bottom: 6.25rem;

		.containerBox_top {
			width: 88%;
			margin: 0 auto;
			position: relative;
			top: 2rem;
			left: 1%;

			.containerBox_top_articleBar {
				ul {
					li {
						position: relative;
						width: 9.375rem;
						list-style: none;
						font-size: 1.5rem;
						font-weight: 700;
						display: inline-block;
						color: #212121;
						transition: .3s;
						cursor: pointer;
						left: 45%;
						transform: translateX(-55%);
					}

					li:nth-child(1) {
						margin-right: 2rem;
					}

					li:hover {
						color: #337ab7;
					}
				}
			}

			.containerBox_top_moreBtn {
				position: absolute;
				left: 49%;
				bottom: -3.125rem;
				transform: translateX(-50%);

				a,
				a:hover {
					text-decoration: none;
				}

				a:hover {
					background-color: #337ab7;
					color: #fff;
				}

				a {
					width: 6.25rem;
					border: 1px solid #337ab7;
					border-radius: 15px;
					height: 3rem;
					line-height: 48px;
					text-align: center;
					color: #337ab7;
					display: block;
					transition: all 0.3s;
					-moz-transition: all 0.3s;
					-webkit-transition: all 0.3s;
				}
			}

			.containerBox_top_articleList {
				.isShow {
					display: none;
				}
			}
		}
	}

	//ipad 横屏（pro）
	@media only screen and (min-width : 1025px) and (max-width: 1365px) and (orientation : landscape) {
		.containerBox_top {
			left: 2% !important;
			top: 2.1rem !important;
		}
	}

	//ipad 横屏
	@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : landscape) {
		
	}

	//ipad 竖屏
	@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : portrait) {
		.articleBarSelected::after {
			width: 5.5rem !important;
			height: 3px;
		}

		.containerBox_top {

			.containerBox_top_articleBar {
				ul {
					li {
						font-size: 1.3rem !important;
					}
				}
			}
		}
	}

	// 手机端适配
	@media screen and (max-width: 767px) {
		.articleBarSelected::after {
			width: 4rem !important;
			height: 2px;
		}

		.containerBox_top {
			

			.containerBox_top_articleBar {
				ul {
					li {
						left: 40% !important;
						width: 6rem !important;
						font-size: 1.125rem !important;
					}

				}
			}
		}

	}
</style>
