<template>
	<div class="showBox">
		<h3>计算机与信息工程学院实验室简介</h3>
		 <p>
			 计算机与信息工程学院实验室拥有先进的光纤网络技术实验室、综合布线实验室、微机原理与接口技术实验室、通信原理实验室、专业基础实验室、软件工程实验室、嵌入式实验室、物联网工程实验室等15个标准实验室，拥有先进仪器设备1820台(件)，能够全面满足全院师生教学、科研、实习、实训的需求，实验开出率达100%。
		 </p>
		 <div class="updateTime">
			 <small>最后更新于：2015-03-09</small>
		 </div>
	</div>
</template>

<script>
	export default{
		name:'newsText1',
		data(){
			return {
				
			}
		},
		beforeRouteUpdate(to,from,next) {
			
		}
	}
</script>

<style lang="less" scoped>
	.showBox{
		h3{
			font-weight: 550;
		}
		p{
			font-size: 1.0625rem;
			margin-top: 1.25rem;
			text-indent: 2rem;
			line-height: 1.6rem;
		}
		.updateTime{
			margin-top: 100px;
			color: #6c757d;
		}
	}
</style>
