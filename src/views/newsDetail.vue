<template>
	<div>
		<headerNavBar></headerNavBar>
		<div class="newsListBanner"></div>
		<div class="breadcrumbBox">
			<span class="breadcrumbTitle">
				当前位置：<b-icon style="color: #0056b3;" icon="house-fill" scale="1.2" shift-v="1.25" aria-hidden="true"></b-icon></span>
			<b-breadcrumb :items="items"></b-breadcrumb>
		</div>
		<div class="newsDetailShowBox">
			<div class="newsTtile">
				<h3>热烈祝贺我院荣获校2020年师德师风先进集体荣誉称号</h3>
			</div>
			<div class="newsMessage">
				<div class="newsTime"><small>发布时间：2020-12-29</small></div>
				<div class="newsAuthor"><small>发布人：刘心声</small></div>
				<div class="newsViews"><small>浏览次数：20</small></div>
			</div>
			<div class="newsText">
				2020年，全院教职员工深入学习贯彻习近平新时代中国特色社会主义思想，以德修身，教书育人，努力推进学院的改革与发展，涌现出了一批爱岗敬业、关爱学生的师德典范，不断提高思想政治素质和教学科研水平，经学校2020年第16次党委（扩大）会议研究决定，我院被授予校级“师德师风先进集体”荣誉称号；我院王丽红老师被授予校级“师德师风先进个人”荣誉称号。
			</div>
		</div>
		<indexFooter></indexFooter>
	</div>

</template>

<script>
	import headerNavBar from "@/components/header.vue";
	import indexFooter from "@/components/footerComponents/footer_index.vue";
	export default {
		name: "newsDetailPage",
		data() {
			return {
				pathObj: {
					text: '正文',
					to: ''
				},
				items: '',
				newsId: ''
			}
		},
		components: {
			headerNavBar,
			indexFooter
		},
		created() {
			this.$data.newsId = this.$route.query.newsId;
			this.$data.items = JSON.parse(this.$route.query.routerRecord);
			this.$data.items.push(this.$data.pathObj);
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
				a {}
			}

			li:nth-last-child(1) {
				cursor: default;
			}
		}
	}
	
	.newsDetailShowBox{
		width: 80%;
		min-height: 600px;
		margin: 30px auto;
		margin-bottom: 100px;
		.newsTtile{
			box-sizing: border-box;
			padding: 15px 15px 5px 15px;
			h3{
				text-align: center;
				font-weight: 600;
				color: #333;
			}
		}
		.newsMessage{
			border-bottom: 2px solid #337ab7;
			padding-bottom: 10px;
			color: #999;
			display: flex;
			justify-content: center;
			.newsTime{
				margin-right: 20px;
			}
			.newsAuthor{
				margin-right: 20px;
			}
		}
		.newsText{
			box-sizing: border-box;
			padding: 30px;
			text-indent: 2rem;
			line-height: 2.5rem;
			color: #727171 ;
		}
	}
</style>
