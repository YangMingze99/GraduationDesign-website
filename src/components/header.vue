<template>
	<div class="headerbox position-fixed">
		<b-navbar class="headerbar" toggleable="xl">
			<b-navbar-brand class="logo">
				<router-link to="/index">
					<img src="@/assets/images/logobig.png" alt="brandr" style="display: inline" />
				</router-link>
			</b-navbar-brand>
			<!-- 响应式折叠 -->
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-nav-item to="/index">首页</b-nav-item>
					<b-nav-item to="/collage">学院资源</b-nav-item>
					<b-nav-item to="#">师资队伍</b-nav-item>
					<b-nav-item to="#">教学工作</b-nav-item>
					<b-nav-item to="#">科研工作</b-nav-item>
					<b-nav-item to="#">实验教学</b-nav-item>
					<b-nav-item to="#">党建工作</b-nav-item>
					<b-nav-item to="#">学团工作</b-nav-item>
					<b-nav-item to="#">招生就业</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>
<script>
	export default {
		name: "headerNavBar",
		data() {
			return {
				scroll: "",
			};
		},
		methods: {
			scrollListener() {
				this.scroll =
					document.documentElement.scrollTop || document.body.scrollTop;
				//   console.log(this.scroll);
			},
		},
		mounted() {
			window.addEventListener("scroll", this.scrollListener);
		},
	};
</script>
<style lang="less" scoped>
	img{
		width: 12.5rem;
		height: 80%;
	}
	.headerbox {
		max-height: 3.125rem;
		z-index: 9;
		width: 100%;
		top: 0;
	}

	.headerbox::after {
		content: "";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}

	.headerbar {
		padding: 0.5rem 0;
		// height: 5.3125rem;
		box-shadow: 0 4px 15px -1px rgba(41, 32, 32, 0.767);
		background-color: white;

		.logo {
			width: 14rem;
			margin-left: 15px;
			padding: 0;
		}

		ul {
			li {
				padding: 0 10px;
			}
		}
	}

	ul {
		padding: 0.8rem 2.5rem;
	}

	#nav-collapse {
		z-index: 2;
		width: 100%;
		background-color: white;
		margin-top: -0.13rem;
	}
	
	
	
	//ipad mini 横屏
	@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : landscape) {
		.navbar-toggler{
			margin-right: 0.8rem;
		}
	}
	//ipad mini 竖屏
	@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : portrait) {
		.navbar-toggler{
			margin-right: 0.8rem;
		}
	}
	//手机
	@media screen and (max-width: 767px) {
		.navbar-toggler{
			margin-right: 0.8rem;
		}
	}
</style>
