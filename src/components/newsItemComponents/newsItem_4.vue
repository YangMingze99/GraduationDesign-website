<template>
	<div>
		<div class="container-fluid newsLists" id="newsList">
			<div class="row newsItem">
				<div class="col-md-10 col-xs-9 newsTitle">
					<div class="newsIcon">
						<b-icon icon="triangle-fill"></b-icon>
					</div>
					<router-link :to="{path:'/newsDetail',query:{newsId:666,routerRecord:JSON.stringify(routerRecord)}}" target="_blank">热烈祝贺我院荣获校2020年师德师风先进集体荣誉称号</router-link>
				</div>
				<div class="col-md-2 col-xs-3 newsDate">
					2020-12-29
				</div>
			</div>
			<div class="row newsItem">
				<div class="col-md-10 col-xs-9 newsTitle">
					<div class="newsIcon">
						<b-icon icon="triangle-fill"></b-icon>
					</div>
					<router-link :to="{path:'/newsDetail',query:{newsId:666,routerRecord:JSON.stringify(routerRecord)}}" target="_blank">热烈祝贺我院荣获校2020年师德师风先进集体荣誉称号</router-link>
				</div>
				<div class="col-md-2 col-xs-3 newsDate">
					2020-12-29
				</div>
			</div>
			<div class="row newsItem">
				<div class="col-md-10 col-xs-9 newsTitle">
					<div class="newsIcon">
						<b-icon icon="triangle-fill"></b-icon>
					</div>
					<router-link :to="{path:'/newsDetail',query:{newsId:666,routerRecord:JSON.stringify(routerRecord)}}" target="_blank">热烈祝贺我院荣获校2020年师德师风先进集体荣誉称号</router-link>
				</div>
				<div class="col-md-2 col-xs-3 newsDate">
					2020-12-29
				</div>
			</div>
			<div class="row newsItem">
				<div class="col-md-10 col-xs-9 newsTitle">
					<div class="newsIcon">
						<b-icon icon="triangle-fill"></b-icon>
					</div>
					<router-link :to="{path:'/newsDetail',query:{newsId:666,routerRecord:JSON.stringify(routerRecord)}}" target="_blank">热烈祝贺我院荣获校2020年师德师风先进集体荣誉称号</router-link>
				</div>
				<div class="col-md-2 col-xs-3 newsDate">
					2020-12-29
				</div>
			</div>
			<div class="row newsItem">
				<div class="col-md-10 col-xs-9 newsTitle">
					<div class="newsIcon">
						<b-icon icon="triangle-fill"></b-icon>
					</div>
					<router-link :to="{path:'/newsDetail',query:{newsId:666,routerRecord:JSON.stringify(routerRecord)}}" target="_blank">热烈祝贺我院荣获校2020年师德师风先进集体荣誉称号</router-link>
				</div>
				<div class="col-md-2 col-xs-3 newsDate">
					2020-12-29
				</div>
			</div>
			<div class="row newsItem">
				<div class="col-md-10 col-xs-9 newsTitle">
					<div class="newsIcon">
						<b-icon icon="triangle-fill"></b-icon>
					</div>
					<router-link :to="{path:'/newsDetail',query:{newsId:666,routerRecord:JSON.stringify(routerRecord)}}" target="_blank">热烈祝贺我院荣获校2020年师德师风先进集体荣誉称号</router-link>
				</div>
				<div class="col-md-2 col-xs-3 newsDate">
					2020-12-29
				</div>
			</div>
			<div class="row newsItem">
				<div class="col-md-10 col-xs-9 newsTitle">
					<div class="newsIcon">
						<b-icon icon="triangle-fill"></b-icon>
					</div>
					<router-link :to="{path:'/newsDetail',query:{newsId:666,routerRecord:JSON.stringify(routerRecord)}}" target="_blank">热烈祝贺我院荣获校2020年师德师风先进集体荣誉称号</router-link>
				</div>
				<div class="col-md-2 col-xs-3 newsDate">
					2020-12-29
				</div>
			</div>
			<div class="row newsItem">
				<div class="col-md-10 col-xs-9 newsTitle">
					<div class="newsIcon">
						<b-icon icon="triangle-fill"></b-icon>
					</div>
					<router-link :to="{path:'/newsDetail',query:{newsId:666,routerRecord:JSON.stringify(routerRecord)}}" target="_blank">热烈祝贺我院荣获校2020年师德师风先进集体荣誉称号</router-link>
				</div>
				<div class="col-md-2 col-xs-3 newsDate">
					2020-12-29
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
				perPage: 3,
				currentPage: 1,
				items: [{
						id: 1,
						first_name: 'Fred',
						last_name: 'Flintstone'
					},
					{
						id: 2,
						first_name: 'Wilma',
						last_name: 'Flintstone'
					},
					{
						id: 3,
						first_name: 'Barney',
						last_name: 'Rubble'
					},
					{
						id: 4,
						first_name: 'Betty',
						last_name: 'Rubble'
					},
					{
						id: 5,
						first_name: 'Pebbles',
						last_name: 'Flintstone'
					},
					{
						id: 6,
						first_name: 'Bamm Bamm',
						last_name: 'Rubble'
					},
					{
						id: 7,
						first_name: 'The Great',
						last_name: 'Gazzoo'
					},
					{
						id: 8,
						first_name: 'Rockhead',
						last_name: 'Slate'
					},
					{
						id: 9,
						first_name: 'Pearl',
						last_name: 'Slaghoople'
					}
				]
			}
		},
		components: {

		},
		computed: {
			totalRows() {
				return this.items.length
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

		},
		watch: {
			"$route": function(to, from) {
				//from 对象中包含当前地址
				//to 对象中包含目标地址
				//其实还有一个next参数的，这个参数是控制路由是否跳转的，如果没写，可以不用写next()来代表允许路由跳转，如果写了就必须写next(),否则路由是不会生效的。
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
</style>
