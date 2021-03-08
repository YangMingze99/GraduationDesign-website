<template>
	<div class="swiperbox" @mouseenter="handleSwiperMouseEnter" @mouseleave="handleSwiperMouseLeave">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in listItem" :key="item._id">
					<router-link :to="{path: '/newsDetail',query: {
						newsId: item._id,
						routerRecord: JSON.stringify(routerRecord),
					},}">
						<img :src="baseUrl + item.newsPictures" alt="" />
						<b-card tag="article" class="cards">
							<b-card-text>
								{{ item.newsTitle }}
							</b-card-text>
						</b-card>
					</router-link>
				</div>
			</div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button-next" :class="display"></div>
			<div class="swiper-button-prev" :class="display"></div>
		</div>
	</div>
</template>
<script>
	// Import Swiper Vue.js components
	import Swiper from "swiper/js/swiper.js";
	import axios from "@/utils/axios.config.js";
	// Import Swiper styles
	export default {
		data() {
			return {
				display: "hide",
				listItem: {},
				baseUrl: axios.defaults.baseURL,
				routerRecord: [{
					text: "首页",
					to: "/",
				}, ],
				parentId:'',
				childrenId:''
			};
		},
		components: {},
		created() {},
		methods: {
			handleSwiperMouseEnter(e) {
				this.$data.display = "show";
			},
			handleSwiperMouseLeave(e) {
				this.$data.display = "hide";
			},
			getNewItem() {
				this.$api.newsItemApi
					.getSwiperNewsItem()
					.then((result) => {
						this.$data.listItem = result.data.data;
						//放到下个执行栈中  渲染完之后swiper才能操作dom   3/8
						this.$nextTick(() => {
							new Swiper(".swiper-container", {
								preventClicks: true,
								loop: true,
								pagination: {
									el: ".swiper-pagination",
									clickable: true,
								},
								navigation: {
									nextEl: ".swiper-button-next",
									prevEl: ".swiper-button-prev",
								},
								speed: 1000,
								effect: "fade",
								loop: true,
								autoplay: {
									delay: 1500,
									stopOnLastSlide: false,
									disableOnInteraction: false,
								},
								observer: true,
								observeParents: true,
								onSlideChangeEnd: function(swiper) {
									swiper.update();
									MySwiper.startAutoplay();
									MySwiper.reLoop();
								},
							});
						});
					})
					.catch((err) => {
						console.warn(err, "indexMainSwiper.vue");
					});
			},
		},
		mounted() {
			this.getNewItem();
		},
	};
</script>
<style lang="less" scoped="scoped">
	.hide {
		display: none;
	}

	.show {
		display: block;
	}

	.swiperbox {
		margin-top: 4.3rem;
	}

	.swiper-container {
		width: 100%;
		height: 30rem;
		margin-top: 1px;
		overflow: hidden;
		position: relative;

		.swiper-wrapper {
			.swiper-slide {
				display: flex;
				justify-content: center;
				align-items: center;

				img {
					width: 100%;
				}

				.cards {
					background-color: rgba(0, 0, 0, 0.7);
					position: absolute;
					bottom: 0;
					left: 5%;
				}
			}
		}

		.swiper-button-prev {
			left: 1%;
		}

		.swiper-button-next {
			right: 1%;
		}

		.swiper-button-prev,
		.swiper-button-next {
			color: #ffffff;
			font-weight: 900;
			size: 6%;
		}

		.card-body {
			padding: 0.5rem 1rem;

			.card-text {
				color: white;
			}
		}

		.swiper-pagination {
			padding-left: 80%;
		}
	}

	//ipad 横屏
	@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		.swiper-container {
			height: 20rem !important;
		}

		.swiper-slide img {
			height: 100%;
		}
	}

	//ipad 竖屏
	@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
		.swiper-container {
			height: 20rem !important;
		}

		.swiper-slide img {
			height: 100%;
		}

		.swiper-button-prev,
		.swiper-button-next {
			display: none;
		}

		.swiper-wrapper {
			.swiper-slide {
				.cards {
					left: 0 !important;
				}
			}
		}
	}

	// 手机端适配
	@media screen and (max-width: 767px) {
		.swiper-container {
			height: 12.5rem;
		}

		.swiper-slide img {
			height: 100%;
		}

		.swiper-wrapper {
			.swiper-slide {
				.cards {
					left: 0 !important;
				}
			}
		}

		.swiper-button-prev,
		.swiper-button-next {
			display: none;
		}

		.swiper-pagination {
			padding-left: 75% !important;
		}
		
		.card-text{
			font-size: 10px !important;
		}
	}
</style>
