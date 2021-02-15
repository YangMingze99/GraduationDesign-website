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
					<router-link :to="currentClassify.to+'/collageIntroduction'">院系介绍</router-link>
				</li>
				<li>
					<router-link :to="currentClassify.to+'/collageactives'">学院动态</router-link>
				</li>
				<li>
					<router-link :to="currentClassify.to+'/collageactives'">学院动态</router-link>
				</li>
				<li>
					<router-link :to="currentClassify.to+'/collageactives'">学院动态</router-link>
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
				border: 1px solid red;
				margin-bottom: 10px;
				height: 50px;
				line-height: 50px;
				text-align: center;
				cursor: pointer;
				a{
					color: #000000;
				}
				a:hover{
					text-decoration: none;
				}
			}

		}
	}
</style>
