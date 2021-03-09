<template>
	<div>
		<ul class="clearfix">
			<li v-for="item in listItem" :key="item._id">
				<div class="card newsItemBox ">
					<div class="row no-gutters">
						<div class="col-md-4 col-sm-4 col-xs-4">
							<img :src="baseUrl+item.newsPictures" class="card-img">
						</div>
						<div class="col-md-8 col-sm-8 col-xs-8">
							<div class="card-body">
								<h6 class="card-title">
									<router-link :to="{path:'/newsDetail',query:{newsId:item._id,routerRecord:JSON.stringify(routerRecord)}}">{{item.newsTitle}}</router-link>
								</h6>
								<p class="card-text newsCon"><small>{{item.newsText}}</small></p>
								<p class="card-text text-right"><small class="text-muted">{{new Date(item.update_time).valueOf() | dateFormat(pattern = 'YYYY/MM/DD')}}</small></p>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from '@/utils/axios.config.js'
	export default {
		name: 'newsItem2',
		data(){
			return {
				listItem:{},
				routerRecord:[
					{
						text: '首页',
						to: '/',
					},
					{
						text:"学团工作",
						to:"/leagueWork"
					}
				],
				baseUrl:axios.defaults.baseURL
			}
		},
		props:{

		},
		created(){
			this.getItem(33);
		},
		methods:{
			getItem(id){
				this.$api.newsItemApi
				.getNewsItemByParentId(id).then((result) => {
					this.$data.listItem = result.data.data.splice(0,6);
				}).catch((err) => {
					console.warn(err,'newsItem2.vue')
				});
			}
		}
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

	ul {
		position: relative;
		left: 6%;
		list-style: none;
		width: 90%;
		display: flex;
		flex-wrap: wrap;
		li {
			padding: 1rem;
			.newsItemBox,
			.card-body {
				max-width: 39rem;
				max-height: 9.6875rem;
			}
		}

		li:hover {
			z-index: 2;
			-webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, .2);
			box-shadow: 0 10px 30px rgba(0, 0, 0, .2);
			-webkit-transform: translate3d(0, -2px, 0);
			transform: translate3d(0, -2px, 0);
		}
	}

	.card-title {
		a {
			text-decoration: none;
			color: #212121;
			font-weight: 600;
		}
	}

	.card-body {
		padding: 0.55rem;
		max-height: 150px;
	}

	.card-text {
		p {
			margin-bottom: 0;
			font-size: 12px;
		}
	}

	.card-img{
		height: 143px;
		width:100% ;
	}

	.newsCon small{
		text-decoration: 2rem;
		line-height: 1.3rem;
		margin-bottom: -0.5rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	// ipad pro 竖
	@media only screen and (min-width : 1023px) and (orientation : portrait) {
		ul {
			li {
				.newsItemBox,
				.card-body {
					max-width: 59rem !important;
					max-height: 35rem !important;
				}
				.card-title{
					font-size: 25px !important;
				}
				.card-text{
					height: 45px;
					font-size: 19px;
				}
			}
		}
	}

	// ipad pro 横
	@media only screen and (min-width : 1366px) and (max-width : 1368px) and (orientation : landscape) {
		ul{
			li{
				.newsItemBox,
				.card-body {
					max-width: 36.3rem !important;
				}
			}
		}
	}

	//ipad  横
	@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : landscape) {

		ul {
			li {
				padding: 0.8rem !important;

				.newsItemBox,
				.card-body {
					max-width: 27rem !important;
				}
			}
		}

	}

	//ipad 竖
	@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : portrait) {
		ul {
			left: 6.2%;
		}

		.newsItemBox,
		.card-body {
			max-width: 42rem !important;
		}

		.card-text {
			p {
				margin-bottom: 0;
				font-size: 0.6875rem !important;
			}
		}
	}

	//手机端
	@media screen and (max-width: 767px) {
		ul {
			left: 5% !important;
			
			li {
				.newsItemBox,
				.card-body {
					max-height: 23rem !important;
				}
			}
		}


		.card-text {
			p {
				margin-bottom: 0;
				font-size: 0.625rem !important;
			}
		}
	}
</style>
