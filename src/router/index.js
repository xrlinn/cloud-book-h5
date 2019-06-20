import Vue from 'vue' // 引入vue
import Router from 'vue-router'  // 引入vue路由

Vue.use(Router) // 在全局上申明路由

const router = new Router({ // 创建一个router实例在最后面导出
  routes: [
    {
      path: '/', // 路由路径
      name: 'layout', // 路由路径名
      redirect: '/index', // 重定向到该路径页面
      component: () => import('@/views/layout'), // 异步加载views文件下的文件组件
      children: [ // 声明嵌套路由
        {
          path: 'index',
          name: 'index',
          meta: { // 路由携带信息标题
            title: '首页'
          },
          component: () => import('@/views/index')
        }, 
        {
          path: 'person',
          name: 'person',
          meta: {
            title: '个人中心'
          },
          component: () => import('@/views/person')
        },
        {
          path: 'learn',
          name: 'learn',
          meta: {
            title: '我的学习'
          },
          component: () => import('@/views/learn')
        }
      ]
    },
    {
      path: 'layout2',
      name: 'header-layout',
      component: () => import('@/views/header-layout'),
      children: [
        {
          path: '/details/:id',
          name: 'details',
          component: () => import('@/views/details'),
          meta: {
            title: '书籍详情'
          }
        },
        {
          path: '/titles/:id',
          name: 'titles',
          meta: {
            title: '目录'
          },
          component: () => import('@/views/titles')
        },
        {
          path: '/article/:id',
          name: 'article',
          meta: {
            title: '文章内容'
          },
          component: () => import('@/views/article')
        },
        {
          path: '/revise',
          name: 'revise',
          meta: {
            title: '修改个人信息'
          },
          component: () => import('@/views/revise')
        },
        {
          path: '/changeNickname',
          name: 'changeNickname',
          meta: {
            title: '修改昵称'
          },
          component: () => import('@/views/changeNickname')
        },
        {
          path: '/changePassword',
          name: 'changePassword',
          meta: {
            title: '修改密码'
          },
          component: () => import('@/views/changePassword')
        },
        {
          path: '/changeDesc',
          name: 'changeDesc',
          meta: {
            title: '修改个性签名'
          },
          component: () => import('@/views/changeDesc')
        },
        {
          path: '/collection',
          name: 'collection',
          meta: {
            title: '已收藏书单'
          },
          component: () => import('@/views/collection')
        },
        {
          path: '/like',
          name: 'like',
          meta: {
            title: '喜欢的书单'
          },
          component: () => import('@/views/like')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: () => import('@/views/login')
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        title: '注册'
      },
      component: () => import('@/views/register')
    },
    {
      path: '/category/:typeId/books',
      name: 'more',
      meta: {
        title: '更多'
      },
      component: () => import('@/views/more')
    },
    {
      path: '/test',
      name: 'test',
      meta: {
        title: '测试专用页'
      },
      component: () => import('@/views/test')
    }
  ]
})

router.beforeEach((to, from, next) => {
  let title = to.meta.title
  document.title = title
  next()
})
export default router
