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
				<router-link :to='moreBtnUrl' target="_blank">查看更多</router-link>
			</div>
		</div>

		<div class="containerBox_mid animate__animated animate__fadeInUp">
			<div class="containerBox_mid_title">
				<ul>
					<li class="articleBarSelected">学团工作</li>
				</ul>
			</div>
			<newsItemTwo></newsItemTwo>
			<div class="containerBox_mid_moreBtn">
				<router-link to='/xtgz' target="_blank">查看更多</router-link>
			</div>
		</div>
		<div class="containerBox_bot animate__animated animate__fadeInRight">
			<div class="containerBox_bot_title">
				<p>学院概况</p>
			</div>
			<div class="containerBox_bot_showData clearfix">
				<div class="data data_1">
					<countTo :autoplay=false :startVal='0' :endVal='35' :duration='dataCountDownOptions.duration' ref="countdown_1"></countTo>
					<span class="suffix">名</span>
					<p>
						教职工
					</p>
				</div>
				<div class="data data_2">
					<countTo :autoplay=false :startVal='0' :endVal='2' :duration='dataCountDownOptions.duration' ref="countdown_2"></countTo>
					<span class="suffix">名</span>
					<p>
						教授
					</p>
				</div>
				<div class="data data_3">
					<countTo :autoplay=false :startVal='0' :endVal='10' :duration='dataCountDownOptions.duration' ref="countdown_3"></countTo>
					<span class="suffix">名</span>
					<p>
						副教授
					</p>
				</div>
				<div class="data data_4">
					<countTo :autoplay=false :startVal='0' :endVal='13' :duration='dataCountDownOptions.duration' ref="countdown_4"></countTo>
					<span class="suffix">名</span>
					<p>
						讲师
					</p>
				</div>
				<div class="data data_5">
					<countTo :autoplay=false :startVal='0' :endVal='1820' :duration='dataCountDownOptions.duration' ref="countdown_5"></countTo>
					<span class="suffix">台</span>
					<p>
						先进仪器设备
					</p>
				</div>
				<div class="data data_5">
					<countTo :autoplay=false :startVal='0' :endVal='100' :duration='dataCountDownOptions.duration' ref="countdown_6"></countTo>
					<span class="suffix">%</span>
					<p>
						实验开出率
					</p>
				</div>
				<!-- <countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo> -->
			</div>
		</div>
	</div>
</template>
<script>
	import newsItemOne from '@/components/newsItemComponents/newsItem_1.vue'
	import newsItemTwo from '@/components/newsItemComponents/newsItem_2.vue'
	import countTo from 'vue-count-to';
	export default {
		name: 'indexContainer',
		components: {
			newsItemOne,
			newsItemTwo,
			countTo
		},
		data() {
			return {
				scroll: "",
				articleBarIsSelected: {
					articleBarOne: true,
					articleBarTwo: false,
				},
				moreBtnUrl: 'collage',
				dataCountDownFlag: false,
				screenWidth: '',
				screenHeight: '',
				dataCountDownOptions:{
					duration:6000
				}
			};
		},
		methods: {
			scrollListener() {
				this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
				console.log(this.$data.screenWidth);
				console.log(this.scroll,'indexContainer');
				//手机
				if(this.$data.screenWidth <=540 && this.scroll >= 3200){
					if (!this.$data.dataCountDownFlag) {
						this.$options.methods.startCountdown(this);
						this.$data.dataCountDownFlag = true;
					}
				}
				//加载动态数字 
				if (this.scroll >= 1600) {
					if (!this.$data.dataCountDownFlag) {
						this.$options.methods.startCountdown(this);
						this.$data.dataCountDownFlag = true;
					}
				}
				// console.log(this.scroll,'indexContainer');
			},
			handleSelectBarOne(e) {
				this.$data.articleBarIsSelected.articleBarOne = true;
				this.$data.articleBarIsSelected.articleBarTwo = false;
				this.$data.moreBtnUrl = 'collage';
			},
			handleSelectBarTwo(e) {
				this.$data.articleBarIsSelected.articleBarOne = false;
				this.$data.articleBarIsSelected.articleBarTwo = true;
				this.$data.moreBtnUrl = 'message';
			},
			startCountdown(that) {
				for (let refsItem in that.$refs) {
					that.$refs[refsItem].start()
				}
				// that.$refs.countdown_1.start();
				// that.$refs.countdown_2.start();
				// that.$refs.countdown_3.start();
				// that.$refs.countdown_4.start();
				// that.$refs.countdown_5.start();
				// that.$refs.countdown_6.start();
			}
		},
		mounted() {
			window.addEventListener("scroll", this.scrollListener);
			
			this.screenWidth = document.body.clientWidth;
			this.screenHeight = document.body.clientHeight;
			window.onresize = () => {
				return (() => {
					this.screenWidth = document.body.clientWidth;
					this.screenHeight = document.body.clientHeight;
				})();
			};
		},

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

		//上部分
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

		//中部分
		.containerBox_mid {
			margin-top: 120px;
			width: 100%;
			min-height: 31.25rem;

			ul {
				position: relative;
				list-style: none;
				width: 200px;
				left: 95px;
				margin-bottom: 20px;

				li {
					font-weight: 700;
					font-size: 1.5rem;
				}
			}

			.containerBox_mid_moreBtn {
				position: absolute;
				left: 50%;
				bottom: -5rem;
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
		}

		//下部分盒子
		.containerBox_bot {
			margin-top: 120px;
			width: 100%;
			min-height: 31.25rem;
			color: white;
			background-color: #337ab7;
			position: relative;
			display: flex;
			display: -webkit-flex;
			align-items: center;

			.containerBox_bot_title {
				position: absolute;
				top: 25px;
				left: 50%;
				transform: translateX(-50%);

				p {
					height: 30px;
					line-height: 30px;
					font-weight: 600;
					font-size: 23px;
					text-align: center;
				}
			}

			.containerBox_bot_showData {
				font-family: "微软雅黑";
				width: 100%;
				height: 100%;
				display: -webkit-flex;
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-around;
				font-weight: 800;

				.data {
					font-size: 75px;

					.suffix,
					p {
						font-weight: 500;
						font-size: 30px;
					}

				}
			}
		}
	}

	//ipad 横屏（pro）
	@media only screen and (min-width : 1024px) and (max-width: 1366px) and (orientation : landscape) {
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
			width: 4.3rem !important;
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
		
		.containerBox_mid{
			.containerBox_mid_title{
				ul{
					left: 7.5%;
					li{
						font-size: 1.125rem !important;
					}
				}
			}
		}
		
		.containerBox_bot{
			
			.containerBox_bot_showData{
				position: relative;
				left: 4%;
				width: 100%;
				flex-wrap: wrap !important;
				flex-flow: row wrap;
				align-content: space-around;
				align-content:space-around;
				.data {
					width: 6rem;
					font-size: 25px !important;
					
					.suffix,
					p {
						font-weight: 500;
						font-size: 15px !important;
					}
				
				}
			}
		}
	}
</style>
