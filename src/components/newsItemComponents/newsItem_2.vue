<template>
	<div>
		<ul class="clearfix">
			<li>
				<div class="card newsItemBox ">
					<div class="row no-gutters">
						<div class="col-md-4 col-sm-4 col-xs-4">
							<img src="@/assets/images/1.png" class="card-img">
						</div>
						<div class="col-md-8 col-sm-8 col-xs-8">
							<div class="card-body">
								<h6 class="card-title">
									<router-link to="#">计算机与信息工程学院——身边的榜样（六）</router-link>
								</h6>
								<p class="card-text newsCon">#######This is a wider card with supporting text below as a natural lead-in to
									additional content. This content is a little bit longer.</p>
								<p class="card-text text-right"><small class="text-muted">2021/2/9</small></p>
							</div>
						</div>
					</div>
				</div>
			</li>

			<li>
				<div class="card newsItemBox">
					<div class="row no-gutters">
						<div class="col-md-4 col-sm-4 col-xs-4">
							<img src="@/assets/images/1.png" class="card-img">
						</div>
						<div class="col-md-8 col-sm-8 col-xs-8">
							<div class="card-body">
								<h6 class="card-title">
									<router-link to="#">计算机与信息工程学院——身边的榜样（六）</router-link>
								</h6>
								<p class="card-text newsCon">#######This is a wider card with supporting text below as a natural lead-in to
									additional content. This content is a little bit longer.</p>
								<p class="card-text text-right"><small class="text-muted">2021/2/9</small></p>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="card newsItemBox">
					<div class="row no-gutters">
						<div class="col-md-4 col-sm-4 col-xs-4">
							<img src="@/assets/images/1.png" class="card-img">
						</div>
						<div class="col-md-8 col-sm-8 col-xs-8">
							<div class="card-body">
								<h6 class="card-title">
									<router-link to="#">计算机与信息工程学院——身边的榜样（六）</router-link>
								</h6>
								<p class="card-text newsCon">#######This is a wider card with supporting text below as a natural lead-in to
									additional content. This content is a little bit longer.</p>
								<p class="card-text text-right"><small class="text-muted">2021/2/9</small></p>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="card newsItemBox">
					<div class="row no-gutters">
						<div class="col-md-4 col-sm-4 col-xs-4">
							<img src="@/assets/images/1.png" class="card-img">
						</div>
						<div class="col-md-8 col-sm-8 col-xs-8">
							<div class="card-body">
								<h6 class="card-title">
									<router-link to="#">计算机与信息工程学院——身边的榜样（六）</router-link>
								</h6>
								<p class="card-text newsCon">#######This is a wider card with supporting text below as a natural lead-in to
									additional content. This content is a little bit longer.</p>
								<p class="card-text text-right"><small class="text-muted">2021/2/9</small></p>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="card newsItemBox">
					<div class="row no-gutters">
						<div class="col-md-4 col-sm-4 col-xs-4">
							<img src="@/assets/images/4.png" class="card-img">
						</div>
						<div class="col-md-8 col-sm-8 col-xs-8">
							<div class="card-body">
								<h6 class="card-title">
									<router-link to="#">计算机与信息工程学院——身边的榜样（六）</router-link>
								</h6>
								<p class="card-text newsCon">#######This is a wider card with supporting text below as a natural lead-in to
									additional content. This content is a little bit longer.</p>
								<p class="card-text text-right"><small class="text-muted">2021/2/9</small></p>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="card newsItemBox">
					<div class="row no-gutters">
						<div class="col-md-4 col-sm-4 col-xs-4">
							<img src="@/assets/images/1.png" class="card-img">
						</div>
						<div class="col-md-8 col-sm-8 col-xs-8">
							<div class="card-body">
								<h6 class="card-title">
									<router-link to="#">计算机与信息工程学院——身边的榜样（六）</router-link>
								</h6>
								<p class="card-text newsCon">#######This is a wider card with supporting text below as a natural lead-in to
									additional content. This content is a little bit longer.</p>
								<p class="card-text text-right"><small class="text-muted">2021/2/9</small></p>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'newsItem2',
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

	img {
		height: 100%;
	}

	ul {
		position: relative;
		left: 6%;
		list-style: none;
		width: 90%;

		li {
			float: left;
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

	.newsCon {
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
