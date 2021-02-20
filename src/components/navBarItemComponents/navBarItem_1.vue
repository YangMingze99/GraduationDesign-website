<template>
	<div>
		<!-- {{currentItem}} -->
		<!-- {{currentClassify.to}} -->
		<div class="currentClassifyTitle">
			{{currentClassify.text}} <small style="color: #6c757d;">{{currentClassify.to}}</small>
		</div>
		<div class="currentClassifyList clearfix">
			<ul>
				<li>
					<router-link  :to="currentClassify.to+'/collageIntroduction'">院系介绍</router-link>
				</li>
				<li>
					<router-link :to="currentClassify.to+'/collageactives'">学院动态</router-link>
				</li>
				<li>
					<router-link :to="currentClassify.to+'/collageactives1'">学院动态</router-link>
				</li>
				<li>
					<router-link :to="currentClassify.to+'/collageactives2'">学院动态</router-link>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'navItem_1',
		data() {
			return {

			}
		},
		props: {
			//父分类信息
			currentClassify: Object,
			currentItem:Object
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
	.currentClassifyTitle {
		// border: 1px solid red;
		font-size: 25px;
		font-weight: 600;
		position: relative;
		min-width: 220px;
	}
	.currentClassifyTitle::after{
		display: block;
		content: "";
		position: absolute;
		left: 0;
		bottom: -10px;
		width: 100%;
		height: 3px;
		background-color: #337ab7;
		
	}
	.currentClassifyList{
		margin-top: 10px;
		ul{
			list-style: none;
			margin-top: 18px;
			li{
				margin-bottom: 10px;
				height: 50px;
				line-height: 50px;
				text-align: center;
				background-color: #e8e8e8;
				cursor: pointer;
				border-radius: 10px;
				a{
					border-radius: 10px;
					color: #000000;
					display: block;
					width: 100%;
					height: 100%;
				}
				a:hover{
					text-decoration: none;
				}
				.router-link-active{
					background-color: #337ab7;
					color: white;
					font-weight: 600;
				}
			}
			li:hover{
				background-color: #337ab7;
				transition: all .8s;
				a{
					color: #ffffff;
				}
			}
		}
	}
</style>
