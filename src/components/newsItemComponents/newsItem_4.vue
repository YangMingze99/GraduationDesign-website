<template>
	<div>
		<div class="container-fluid newsLists" id="newsList" >
			<div class="row newsItem" id="newsItem" v-for="item in handleNewsItem" :key="item._id">
				<div class="col-md-10 col-xs-9 newsTitle" id="newsTitle">
					<div class="newsIcon">
						<b-icon icon="triangle-fill"></b-icon>
					</div>
					<router-link :to="{path:'/newsDetail',query:{newsId:item._id,routerRecord:JSON.stringify(routerRecord)}}" target="_blank">{{item.newsTitle}}</router-link>
				</div>
				<div class="col-md-2 col-xs-3 newsDate">
					{{new Date(item.update_time).valueOf(),pattern = 'YYYY/MM/DD'| dateFormat}}
				</div>
			</div>
		</div>
		<div class="overflow-auto newsListPagination">
			<b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="center" aria-controls="newsList"></b-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'newsItem4',
		data() {
			return {
				routerRecord: '',
				perPage: 8,
				currentPage: 1,
				newsItems: ''
			}
		},
		computed: {
			totalRows() {
				return this.$data.newsItems.length
			},
			newChildId() {
				return this.$store.state.currentChildrenId
			},
			handleNewsItem:function(){
				return this.$data.newsItems.slice((this.$data.currentPage-1)*this.$data.perPage,this.$data.currentPage*this.$data.perPage)
			}
		},
		created() {
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
					this.$data.routerRecord = temp;
				}
			});
			this.getNewsItemByChildId(this.$store.state.currentChildrenId);
		},
		watch: {
			newChildId: {
				deep: true,
				handler: function(newId) {
					this.getNewsItemByChildId(newId);
				}
			},

			"$route": function(to, from) {
				//from 对象中包含当前地址
				//to 对象中包含目标地址
				//其实还有一个next参数的，这个参数是控制路由是否跳转的，如果没写，可以不用写next()来代表允许路由跳转，如果写了就必须写next(),否则路由是不会生效的。
			}
		},
		methods: {
			getNewsItemByChildId(id) {
				this.$api.newsItemApi
					.getNewsItemByChildId(id).then((result) => {
						this.$data.newsItems = result.data.data
					})
					.catch((error) => {
						console.warn(error, 'newsItem_4.vue');
					})
			}
		}
	}
</script>

<style lang="less" scoped>
	.newsLists {
		.newsItem {
			height: 45px;
			line-height: 45px;
			border-bottom: 1px solid #d3d3d3;

			.newsTitle {
				.newsIcon {
					display: inline-block;
					color: black;
					transform: rotate(90deg);
					font-size: 12px;
					margin-right: 5px;
				}

				a {
					color: #000000;
				}

				a:hover {
					text-decoration: none;
				}
			}

			.newsDate {
				color: #888888;
				text-align: right;
			}
		}

		.newsItem:hover {
			.newsTitle {
				.newsIcon {
					color: #337ab7;
				}
			}

			a {
				color: #337ab7;
				transition: color .6s;
			}
		}

		.newsItem:last-child {
			border: none;
			margin-bottom: 100px;
		}

		.newsItem:hover {
			transition: all 0.6s;
			box-shadow: 0 0 20px #a1a1a1;
			-webkit-box-shadow: 0 0 20px #a1a1a1;
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

	//手机
	@media screen and (max-width: 767px) {
		#newsItem{
			width: 100%;
			flex-wrap: nowrap;
			margin-left: 0 ;
		}
		#newsTitle{
			white-space: nowrap;
    		overflow: hidden;
    		text-overflow: ellipsis;
			flex: 0 0 70%;
			a{
				width: 100%;
			}
		}
	}
</style>
