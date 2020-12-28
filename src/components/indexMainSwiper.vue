<template>
	<div>
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
				<div class="swiper-slide"><img src="@/assets/images/3.png" alt=""> </div>
				<div class="swiper-slide"><img src="@/assets/images/4.png" alt=""> </div>
				<div class="swiper-slide"><img src="@/assets/images/5.png" alt=""> </div>
			</div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
			<div class="leftCover"></div>
			<div class="rightCover"></div>
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

			}
		},
		components: {

		},
		methods: {
			onSwiper(swiper) {
				console.log(swiper)
			},
			onSlideChange() {
				console.log('slide change')
			},
		},
		mounted() {
			new Swiper('.swiper-container', {
				slidesPerView: 1.5,
				centeredSlides: true,

				// slidesOffsetBefore:'5rem',
				spaceBetween: 0,
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
				// effect: 'fade',
				autoplay: {
					delay: 3000,
					stopOnLastSlide: false,
					disableOnInteraction: false,
				},
				slidesgrid: {
					slidesOffsetBefore: 50 + 'px'
				}
			})
		}
	};
</script>
<style lang="less" scoped="scoped">
	.leftCover {
		background-color: #f8f9faba;
		width: 16.6%;
		position: absolute;
		height: 100%;
		z-index: 8;
		top: 0;
	}
	.rightCover{
		background-color: #f8f9faba;
		width: 16.6%;
		position: absolute;
		height: 100%;
		right: 0;
		z-index: 8;
		top: 0;
	}
	.swiper-container {
		width: 100%;
		margin-top: 1px;
		max-height: 450px;
		overflow: hidden;
		position: relative;

		.swiper-wrapper {

			.swiper-slide {
				img {
					width: 100%;
					// height:60%;
				}

				.cards {
					position: absolute;
				}
			}
		}

		.swiper-button-prev {
			left: 17%;
		}

		.swiper-button-next {
			right: 17%;
		}

		.swiper-button-prev,
		.swiper-button-next {
			color: #ffffff;
			font-weight: 900;
			size: 10%;
		}
	}
</style>
