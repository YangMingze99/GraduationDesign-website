<template>
	<div class="swiperbox" @mouseenter="handleSwiperMouseEnter" @mouseleave="handleSwiperMouseLeave">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<router-link to="/index">
						<img src="@/assets/images/1.png" alt="">
						<b-card tag="article" class="cards">
							<b-card-text>
								这是一段测试标题
							</b-card-text>
						</b-card>
					</router-link>
				</div>
				<div class="swiper-slide">
					<router-link to="/index">
						<img src="@/assets/images/2.png" alt="">
						<b-card tag="article" class="cards">
							<b-card-text>
								这是一段测试标题
							</b-card-text>
						</b-card>
					</router-link>
				</div>
				<div class="swiper-slide">
					<router-link to="/index">
						<img src="@/assets/images/3.png" alt="">
						<b-card tag="article" class="cards">
							<b-card-text>
								这是一段测试标题
							</b-card-text>
						</b-card>
					</router-link>
				</div>
				<div class="swiper-slide">
					<router-link to="/index">
						<img src="@/assets/images/4.png" alt="">
						<b-card tag="article" class="cards">
							<b-card-text>
								这是一段测试标题hhhhhhh
							</b-card-text>
						</b-card>
					</router-link>
				</div>
				<div class="swiper-slide">
					<router-link to="/index">
						<img src="@/assets/images/5.png" alt="">
						<b-card tag="article" class="cards">
							<b-card-text>
								这是一段测试标题
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
	import Swiper from 'swiper/js/swiper.js';
	// Import Swiper styles
	export default {
		data() {
			return {
				display: "hide"
			}
		},
		components: {

		},
		methods: {
			handleSwiperMouseEnter(e) {
				this.$data.display = "show"
			},
			handleSwiperMouseLeave(e) {
				this.$data.display = "hide"
			}
		},
		mounted() {
			new Swiper('.swiper-container', {
				// slidesPerView: 1.5,
				// centeredSlides: true,

				// slidesOffsetBefore:'5rem',
				// spaceBetween: 0,
				preventClicks: true, //默认true
				loop: true,
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
					clickable: true,

				},
				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				speed: 800,
				effect: 'fade',
				// autoplay: {
				// 	delay: 3000,
				// 	stopOnLastSlide: false,
				// 	disableOnInteraction: false,
				// },
				// slidesgrid: {
				// 	slidesOffsetBefore: 50 + 'px'
				// }
			})
		}
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
					background-color: rgba(0, 0, 0, .7);
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
	@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : landscape) {
		.swiper-container {
			height: 20rem !important;
		}
		
		.swiper-slide img {
			height: 100%;
		}
		
	}
	
	//ipad 竖屏
	@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : portrait) {
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
	}
</style>