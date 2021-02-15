import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";
import newsList from "../views/newsList.vue"


Vue.use(VueRouter);

const routes = [{
		path: "/index",
		name: "Index",
		component: index
	},
	{
		path: "/collage",
		name: "学院概况",
		component: newsList,
		redirect: "/collage/collageIntroduction",
		children: [{
				path: 'collageactives',
				name: '学院动态'
			},
			{
				path: 'collageIntroduction',
				name: '院系介绍',
				component:()=>import('@/components/newsItemComponents/newsText.vue')
			}
		]
	},
	{
		path: '/teacherResources',
		name: "师资队伍",
		component: newsList,
		children: [{
			path: 'collageIntroduction',
			name: '院系介绍',
			component:()=>import('@/components/newsItemComponents/newsText.vue')
		}]
	},
	{
		path: '/teachingWork',
		name: "教学工作",
		component: newsList,
		children: [{
			path: 'collageIntroduction',
			name: '院系介绍',
			component:()=>import('@/components/newsItemComponents/newsText.vue')
		}]
	},
	{
		path: '/scientificResearch',
		name: "科研工作",
		component: newsList,
		children: [{
			path: '#',
			name: 'fill'
		}]
	},
	{
		path: '/experimentalTeaching',
		name: "实验教学",
		component: newsList,
		children: [{
			path: 'collageIntroduction',
			name: '院系介绍',
			component:()=>import('@/components/newsItemComponents/newsText1.vue')
		}]
	},
	{
		path: '/partyBuilding',
		name: "党建工作",
		component: newsList,
		children: [{
			path: '#',
			name: 'fill'
		}]
	},
	{
		path: '/leagueWork',
		name: "学团工作",
		component: newsList,
		children: [{
			path: '#',
			name: 'fill'
		}]
	},
	{
		path: '/employment',
		name: "招生就业",
		component: newsList,
		children: [{
			path: '#',
			name: 'fill'
		}]
	},
	{
		path: "/",
		redirect: "/index"
	},

];

const router = new VueRouter({
	routes
});

export default router;
