<template>
	<div class="showBox" id="showBox">
		<h3>计算机与信息工程学院简介</h3>
		 <p>
			 计算机与信息工程学院的前身是计算机科学与信息工程系，始建于1996年，2015年学校现有专业按学科整合后成立计算机与信息工程学院，承担全校的计算机公共课教学和本学院四个本科专业的教学任务。计算机与信息工程学院下设计算机系和信息工程系，计算机系设“计算机科学与技术”和“网络工程”两个本科专业，信息工程系设“物联网工程”和“通信工程”两个本科专业，毕业颁发工学学士学位。学院现有教职工35人，其中教授2人，副教授10人，讲师13人，硕士以上研究生21人。拥有先进的光纤网络技术实验室、综合布线实验室、微机原理与接口技术实验室、通信原理实验室、专业基础实验室、软件工程实验室、嵌入式实验室、物联网工程实验室等15个标准实验室，拥有先进仪器设备1820台(件)，能够全面满足全院师生教学、科研、实习、实训的需求，实验开出率达100%，在校专业学生989人。
			 
			 计算机与信息工程学院一贯秉承科学严谨的治学理念、求真务实的教学态度，爱岗敬业、教书育人，注重教学与科研、理论与实践的紧密结合，不断加强自身建设，严把教学质量关；同时注重明理尚学、居敬持志、知行合一、服务社会的学风建设，取得了良好的教育教学效果，毕业生受到用人单位的欢迎。
			 
			 学院高度重视学生的就业安置工作，积极引导和组织毕业年级的学生参加研究生、公务员、专业技术资格认证考试，并在省内外知名的IT企业、教育培训机构建立了专业实习、实训基地十余个，实现了部分毕业生订单式培养。多年来，我院毕业生的就业质量和就业率在全校都一直名列前茅，就业前景看好。
		 </p>
		 <div class="updateTime">
			 <small>最后更新于：2015-05-08</small>
		 </div>
	</div>
</template>

<script>
	export default{
		name:'newsText',
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
		margin-right: 20px;
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
		#showBox{
			h3{
				font-weight: 700;
			}
			p{
				margin: 0 auto;
			}
			box-sizing: border-box;
			word-break: break-word;
			padding: 20px;
		}
	}
</style>
