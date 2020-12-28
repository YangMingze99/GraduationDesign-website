<template>
	<div>
		<b-navbar class="headerbar " toggleable="xl">
			<b-navbar-brand class="logo">
				<router-link to="/index">
					<img src="@/assets/images/logobig.png" height="70px" width="320px" alt="brandr" style="display: inline" />
				</router-link>
			</b-navbar-brand>
			<!-- 响应式折叠 -->
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<!-- Right aligned nav items -->
				<b-navbar-nav  class="ml-auto">
					<b-nav-item to="/index">首页</b-nav-item>
					<b-nav-item to="/collage">学院资源</b-nav-item>
					<b-nav-item href="#">师资队伍</b-nav-item>
					<b-nav-item href="#">教学工作</b-nav-item>
					<b-nav-item href="#">科研工作</b-nav-item>
					<b-nav-item href="#">实验教学</b-nav-item>
					<b-nav-item href="#">党建工作</b-nav-item>
					<b-nav-item href="#">学团工作</b-nav-item>
					<b-nav-item href="#">招生就业</b-nav-item>
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
			}
		},
		mounted() {
			window.addEventListener("scroll", this.scrollListener);
		},
	};
</script>
<style lang="less" scoped>
	.headerbar {
		padding: 0.5rem 0;
		height: 5.3125rem;
		box-shadow: 0 4px 15px -1px rgba(41, 32, 32, 0.767);

		.logo {
			margin-left: 15px;
			padding: 0;
		}

		ul {
			li {
				padding: 0 10px;
			}
		}
	}
	ul{
		padding: 0.8rem 2.5rem;
	}
	#nav-collapse {
		z-index: 2;
		width: 100%;
		background-color: white;
		margin-top: -0.130rem;
	}
</style>
