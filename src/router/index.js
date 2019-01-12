import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home'

Vue.use(Router)

export default new Router({
  routes: [  
    {
      path:"/",
      redirect:"/home"
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/views/login/login.vue"),
      meta:{
        title:"登录"
      }
    },
    {
      path: '/projectA',
      name: 'projectA',
      component: () => import("@/views/projectA/index.vue"),
      meta:{
        title:"融资项目"
      }
    },
    {
      path: '/news',
      name: 'news',
      component: () => import("@/views/news/index.vue"),
      meta:{
        title:"资讯列表"
      }
    },
    {
      path: '/comments',
      name: 'comments',
      component: () => import("@/views/news/comments.vue"),
      meta:{
        title:"发表评论"
      }
    },
    {
      path: '/project',
      name: 'project',
      component: () => import("@/views/project/index.vue"),
      meta:{
        title:"项目介绍"
      }
    },
    {
      path: '/issueProject',
      name: 'issueProject',
      component: () => import("@/views/projectA/issueProject.vue"),
      meta:{
        title:"发布项目"
      }
    },
    {
      path: '/issueMoney',
      name: 'issueMoney',
      component: () => import("@/views/money/issueMoney.vue"),
      meta:{
        title:"发布资金"
      }
    },
    {
      path: '/message',
      name: 'message',
      component: () => import("@/views/message/index.vue"),
      meta:{
        title:"我的消息"
      }
    },
    {
      path: '/money',
      name: 'money',
      component: () => import("@/views/money/index.vue"),
      meta:{
        title:"投资信息列表"
      },
    },
    {
      path: '/money/moneyDetail',
      name: 'moneyDetail',
      component: () => import("@/views/money/moneyDetail.vue"),
      meta:{
        title:"投资信息详情"
      }
    },
    {
      path: '/money/progress',
      name: 'progress',
      component: () => import("@/views/money/progress.vue"),
      meta:{
        title:"项目进展"
      }
    },
    {
      path: '/investors',
      name: 'investors',
      component: () => import("@/views/invest/investors.vue"),
      meta:{
        title:"投资人详情"
      }
    },
    {
      path: '/my',
      name: 'my',
      component: () => import("@/views/my/index.vue"),
      meta:{
        title:"个人中心"
      }
    },
    {
      path: '/vip',
      name: 'vip',
      component: () => import("@/views/my/vip.vue"),
      meta:{
        title:"vip服务介绍"
      }
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import("@/views/activity/index.vue"),
      meta:{
        title:"会议活动"
      }
    },
    {
      path: '/activityDetail',
      name: 'activityDetail',
      component: () => import("@/views/activity/activityDetail.vue"),
      meta:{
        title:"活动详情"
      }
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: () => import("@/views/news/newsDetail.vue"),
      meta:{
        title:"资讯详情"
      }
    },
    {
      path: '/activityDetail/comment',
      name: 'comment',
      component: () => import("@/views/activity/commentDetail.vue"),
      meta:{
        title:"评论列表"
      }
    },
    {
      path: '/sendProject',
      name: 'sendProject',
      component: () => import("@/views/money/sendProject.vue"),
      meta:{
        title:"投递项目"
      }
    },
    {
      path: "/weekList",
      name: "weekList",
      component: () => import("@/views/my/weekList.vue"),
      meta: {
        title: "周报列表"
      }
    },
    {
      path: "/center",
      name: "center",
      component: () => import("@/views/my/memberCenter.vue"),
      meta: {
        title: "会员权益中心"
      }
    },
    {
      path: "/member",
      name: "member",
      component: () => import("@/views/my/member.vue"),
      meta: {
        title: "会员认证"
      }
    },
    {
      path: "/myFocus",
      name: "myFocus",
      component: () => import("@/views/my/myFocus.vue"),
      meta: {
        title: "我的关注"
      }
    },
    {
      path: "/myProject",
      name: "myProject",
      component: () => import("@/views/my/myProject.vue"),
      meta: {
        title: "我的项目"
      }
    },
    {
      path: "/myMoney",
      name: "myMoney",
      component: () => import("@/views/my/myMoney.vue"),
      meta: {
        title: "我的资金"
      }
    },
    {
      path: "/myactivity",
      name: "myactivity",
      component: () => import("@/views/my/myactivity.vue"),
      meta: {
        title: "我的活动"
      }
    },
    {
      path: "/setting",
      name: "setting",
      component: () => import("@/views/my/setting.vue"),
      meta: {
        title: "系统设置"
      }
    },
    {
      path: "/demand",
      name: "demand",
      component: () => import("@/views/my/demand.vue"),
      meta: {
        title: "需求填报"
      }
    },
    {
      path: "/service",
      name: "service",
      component: () => import("@/views/my/service.vue"),
      meta: {
        title: "在线客服"
      }
    },  
  ]
})