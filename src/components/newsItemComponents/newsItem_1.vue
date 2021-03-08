<template>
	<div>
		<ul class="clearfix ">
			<li v-for="item  in listItem" :key="item._id">
				<div class="newItemCon">
					<span class="newItemDate">{{new Date(item.update_time).valueOf(),pattern = 'MM-DD'| dateFormat}}</span>
					<h3 class="newItemTitle">
						<router-link :to="{path:'/newsDetail',query:{newsId:item._id,routerRecord:currentClass=='collageactives'?JSON.stringify(routerRecord[0]):JSON.stringify(routerRecord[1])}}" target="_blank"><strong>{{item.newsTitle}}</strong></router-link>
					</h3>
					<div class="newItemTxt">
						<p>
							{{item.newsText}}
						</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'newsItem_1',
		data(){
			return {
				listItem:{},
				routerRecord:[
					[{
						text: '首页',
						to: '/',
					},
					{
						text:"学院概况",
						to:"/collage"
					},
					{
						text:"学院动态",
						to:"/collage/collageactives"
					}],
					[{
						text: '首页',
						to: '/',
					},
					{
						text:"学院概况",
						to:"/collage"
					},
					{
						text:"通知公告",
						to:"/collage/collageNotice"
					}]
				]
			}
		},
		props:{
			currentClass:String,
		},
		created(){
			this.getItem(5)
		},
		watch:{
			"currentClass" : function(){
				if(this.$props.currentClass === 'collageactives'){
					this.getItem(5);
				}else{
					this.getItem(4);
				}
			}
		},
		methods:{
			getItem(id){
				this.$api.newsItemApi
				.getNewsItemByChildId(id).then((result) => {
					this.$data.listItem = result.data.data.splice(0,6);
				}).catch((err) => {
					console.warn(err,'newsItem1.vue')
				});
			}
		}
	}
</script>
<style lang="less" scoped>
	ul {
		margin-top: 3.125rem;
		list-style: none;

		li:nth-child(odd) {
			margin-right: 3.125rem;
		}

		li {
			float: left;
			box-sizing: border-box;
			width: 48%;
			margin-bottom: 2.8rem;

			.newItemCon {
				padding: 25px;
				height: 130px;
				border: 1px solid #dcdcdc;
				position: relative;
				-webkit-transition: .3s;
				-moz-transition: .3s;
				-ms-transition: .3s;
				-o-transition: .3s;
				transition: .3s;

				.newItemDate {
					position: absolute;
					top: -1.2rem;
					color: #1D50A2;
					padding: 0 25px;
					background-color: #f6f6f6;
					font-size: 1.5rem;
				}

				.newItemTitle {
					font-size: 16px;
					overflow: hidden;
					line-height: 1.22em;
					max-height: 2.4em;

					a {
						color: #212121;
						text-decoration: none;
					}
				}

				.newItemTxt {
					p {
						position: relative;
						margin-bottom: 0;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}

					max-height: 60px;
					text-indent: 2em;
					font-size:15px;
					color:#b2b2b2;
					line-height: 1.25rem;
				}
			}

			.newItemCon:hover {
				border: 1px solid #1D50A2;
			}
		}
	}

	//ipad 横屏（pro）
	@media only screen and (min-width : 1025px) and (orientation : landscape) {
		ul{
			margin-bottom: 2.8rem;
			li{
				width: 48%;
				font-size: 0.8125rem !important;
				margin-bottom: 2.1875rem;
				.newItemDate{
					top: -1rem !important;
					font-size: 1.2rem !important;
				}
			}
			li:nth-child(odd) {
				margin-right: 25px;
			}
		}
	}
	
	//ipad 横屏(mini)
	@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : landscape) {
		ul{
			margin-bottom: 2.6rem;
			li{
				width: 48%;
				font-size: 0.8125rem !important;
				margin-bottom: 2.1875rem;
				.newItemDate{
					top: -1rem !important;
					font-size: 1.2rem !important;
				}
			}
			li:nth-child(odd) {
				margin-right: 25px;
			}
		}
	}

	//ipad 竖屏
	@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : portrait) {
		ul{
			margin-bottom: 2rem;
			li{
				clear: both;
				width: 100%;
				font-size: 0.8125rem !important;
				margin-bottom: 2.1875rem;
				.newItemDate{
					top: -1rem !important;
					font-size: 1.2rem !important;
				}
			}
			li:nth-child(odd) {
				margin-right: 0;
			}
			
		}
	}

	// 手机端适配
	@media screen and (max-width: 767px) {
		ul{
			margin-bottom: 2rem;
			li{
				clear: both;
				width: 100%;
				font-size: 0.8125rem !important;
				margin-bottom: 2.1875rem;
				.newItemDate{
					top: -1rem !important;
					font-size: 1.2rem !important;
				}
			}
			li:nth-child(odd) {
				margin-right: 0;
			}
			
		}
	}
</style>
