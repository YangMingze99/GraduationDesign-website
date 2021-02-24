import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";
import newsList from "../views/newsList.vue"

Vue.use(VueRouter);

const routes = [{
		path: "/index",
		name: "Index",
		component: index,
		meta: {
			title: '黑河学院计算机与信息工程学院'
		}
	},
	{
		path: "/collage",
		name: "学院概况",
		component: newsList,
		redirect: "/collage/collageIntroduction",
		children: [
			{
				path: 'collageIntroduction',
				name: '院系介绍',
				meta: {
					title: '黑河学院计算机学院-院系介绍'
				},
				component: () => import('@/components/newsItemComponents/newsText.vue')
			},
			{
				path: 'collageactives',
				name: '学院动态',
				meta: {
					title: '黑河学院计算机学院-学院动态'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			},
			{
				path: 'collageNotice',
				name: '通知公告',
				meta: {
					title: '黑河学院计算机学院-通知公告'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			},
			{
				path: 'collageOrganization',
				name: '机构设置',
				meta: {
					title: '黑河学院计算机学院-机构设置'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			},
			{
				path: 'collageTransparency',
				name: '院务公开',
				meta: {
					title: '黑河学院计算机学院-院务公开'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			}
		]
	},
	{
		path: '/teacherResources',
		name: "师资队伍",
		component: newsList,
		redirect: "/teacherResources/teachingTeam",
		children: [{
				path: 'teachingTeam',
				name: '教学团队',
				meta: {
					title: '黑河学院计算机学院-教学团队'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			},
			{
				path: 'computerDepartment',
				name: '计算机系',
				meta: {
					title: '黑河学院计算机学院-计算机系'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			}
		]
	},
	{
		path: '/teachingWork',
		name: "教学工作",
		component: newsList,
		redirect: "/teachingWork/teachingTrends",
		children: [{
				path: 'teachingTrends',
				name: '教学动态',
				meta: {
					title: '黑河学院计算机学院-教学动态'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			}, {
				path: 'computerScienceAndTechnology',
				name: '计算机科学与技术专业',
				meta: {
					title: '黑河学院计算机学院-计算机科学与技术专业'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			},
			{
				path: 'networkEngineering',
				name: '网络工程专业',
				meta: {
					title: '黑河学院计算机学院-网络工程专业'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			},
			{
				path: 'communicationEngineering',
				name: '通信工程专业',
				meta: {
					title: '黑河学院计算机学院-通信工程专业'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			},
			{
				path: 'internetOfThings',
				name: '物联网工程专业',
				meta: {
					title: '黑河学院计算机学院-物联网工程专业'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			},
			{
				path: 'training',
				name: '实习实训',
				meta: {
					title: '黑河学院计算机学院-实习实训'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			}
		]
	},
	{
		path: '/scientificResearch',
		name: "科研工作",
		component: newsList,
		redirect: "/scientificResearch/scientificResearchTrends",
		children: [{
				path: 'scientificResearchTrends',
				name: '科研动态',
				meta: {
					title: '黑河学院计算机学院-科研动态'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			},
			{
				path: 'scientificResearchProjects',
				name: '科研立项',
				meta: {
					title: '黑河学院计算机学院-科研立项'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			},
			{
				path: 'scientificResearchAchievements',
				name: '科研成果',
				meta: {
					title: '黑河学院计算机学院-科研成果'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			},
			{
				path: 'academicActivities',
				name: '学术活动',
				meta: {
					title: '黑河学院计算机学院-学术活动'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			}
		]
	},
	{
		path: '/experimentalTeaching',
		name: "实验教学",
		component: newsList,
		redirect: "/experimentalTeaching/introductionOfLaboratory",
		children: [{
				path: 'introductionOfLaboratory',
				name: '实验室介绍',
				meta: {
					title: '黑河学院计算机学院-实验室介绍'
				},
				component: () => import('@/components/newsItemComponents/newsText1.vue')
			},
			{
				path: 'laboratoryManagement',
				name: '实验室管理',
				meta: {
					title: '黑河学院计算机学院-实验室管理'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			},
			{
				path: 'examinationCenter',
				name: '服务地方考试中心',
				meta: {
					title: '黑河学院计算机学院-服务地方考试中心'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			},
			{
				path: 'openExperiment',
				name: '开放性实验',
				meta: {
					title: '黑河学院计算机学院-开放性实验'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			}
		]
	},
	{
		path: '/partyBuilding',
		name: "党建工作",
		component: newsList,
		redirect: "/partyBuilding/branchWork",
		children: [{
				path: 'branchWork',
				name: '支部工作',
				meta: {
					title: '黑河学院计算机学院-支部工作'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			},
			{
				path: 'managementTeam',
				name: '管理队伍',
				meta: {
					title: '黑河学院计算机学院-管理队伍'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			},
			{
				path: 'systemConstruction',
				name: '制度建设',
				meta: {
					title: '黑河学院计算机学院-制度建设'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			},
			{
				path: 'cleanConstruction',
				name: '廉政建设',
				meta: {
					title: '黑河学院计算机学院-廉政建设'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			}
		]
	},
	{
		path: '/leagueWork',
		name: "学团工作",
		component: newsList,
		redirect: "/leagueWork/leagueActivities",
		children: [{
				path: 'leagueActivities',
				name: '学团活动',
				meta: {
					title: '黑河学院计算机学院-学团活动'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			},
			{
				path: 'studentOrganizations',
				name: '学生组织',
				meta: {
					title: '黑河学院计算机学院-学生组织'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			},
			{
				path: 'rewardAndLoanSubsidy',
				name: '奖贷困补',
				meta: {
					title: '黑河学院计算机学院-奖贷困补'
				},
				component: () => import('@/components/newsItemComponents/newsItem_4.vue')
			}
		]
	},
	{
		path: '/employment',
		name: "招生就业",
		component: newsList,
		redirect: "/employment/employmentInformation",
		children: [{
			path: 'employmentInformation',
			name: '就业信息',
			meta: {
				title: '黑河学院计算机学院-就业信息'
			},
			component: () => import('@/components/newsItemComponents/newsItem_4.vue')
		}]
	},
	{
		path: '/newsDetail',
		name: "正文",
		meta: {
			title: '文章正文'
		},
		props: {
			modal: router => ({
				newsId: router.query.newsId,
				routerRecord: router.query.routerRecord
			})
		},
		component: () => import('@/views/newsDetail.vue')
	},
	{
		path: "/",
		redirect: "/index"
	},
	{
		path:'*',
		name: 'notfount',
		component:()=>import('@/views/404Page.vue')
	}
];

const router = new VueRouter({
	routes
});
router.afterEach((to, from) => {
	// 路由发生变化修改页面title
	if (to.meta.title) {
		document.title = to.meta.title;
	}
})
export default router;
