<template>
	<div class="footer clearfix">
		<div class="leftFooter">
			<p>
				地址：黑龙江黑河学院计算机与信息工程学院 邮编164300
			</p>
			<p>
				联系电话：0456-6842181 0456-6842182
			</p>
			<p>
				Copyright © 2009 - 2021 黑河学院计算机与信息工程学院. All Rights Reserved.
			</p>

		</div>
		<div class="rightFooter">
			<img src="@/assets/images/logobig.png" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'newsItem_1'
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

	.footer {
		width: 100%;
		height: 12rem;
		background-color: white;
		border-top: 1px dotted black;
		position: relative;

		.leftFooter {
			position: absolute;
			left: 13%;
			top: 50%;
			transform: translateY(-50%);

			p {
				font-size: 0.8125rem;
			}
		}

		.rightFooter {
			position: absolute;
			right: 15%;
			top: 50%;
			transform: translateY(-50%);

			img {
				display: block;
				width: 21rem;
				height: 6rem;
			}
		}
	}

	//移动端适配--ipad 横屏
	@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : landscape) {
		.footer {
			height: 10rem;

			.leftFooter {
				p {
					font-size: 13px;
				}
			}

			.rightFooter {
				right: 9.5%;

				img {
					width: 16rem !important;
					height: 5rem !important;
				}
			}
		}
	}

	//移动端适配--ipad 竖屏
	@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : portrait) {
		.footer {
			height: 12.5rem;

			.leftFooter {
				left: 7%;
				top: 54%;

				p {
					font-size: 13px;
				}
			}

			.rightFooter {
				top: 47%;
				right: 6%;

				img {
					width: 15rem !important;
					height: 4rem !important;
				}
			}
		}
	}

	//移动端适配--手机
	@media screen and (max-width: 767px) {
		.footer {
			height: 9.375rem;

			.leftFooter {
				left: 1%;
				right: 1%;
				text-align: center;

				p {
					margin-bottom: 0.3125rem;
					font-size: 8px;
				}

				p:last-child {
					display: none;
				}

				p:nth-child(2)::after {
					content: "Copyright© 2009-2021 黑河学院计算机与信息工程学院";
					display: block;
					margin-top: 0.3125rem;
				}

			}

			.rightFooter {
				img {
					display: none;
				}
			}
		}
	}
</style>
