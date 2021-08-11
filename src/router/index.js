import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/index'
import home from '@/views/home/index'
import articallist from '@/views/artical/list'
import articaladd from '@/views/artical/add'
import articaledit from '@/views/artical/edit'
import commentdetail from '@/views/comment/detail'
import commentlist from '@/views/comment/list'
import commentmessage from '@/views/comment/message'
import friends from '@/views/friends/index'
import reward from '@/views/reward/index'
import setting from '@/views/setting/index'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/artical',
      name: 'artical',
      component: articallist,
      meta: {
        title: '文章'
      },
      children: [
        {
          path: 'list',
          component: articallist,
          name: 'articlename',
          meta: {
            title: '文章列表'
          }
        },
        {
          path: 'add',
          component: articaladd,
          name: 'articaladd',
          meta: {
            title: '发表文章'
          }
        },
        {
          path: 'edit',
          component: articaledit,
          name: 'articaledit',
          meta: {
            title: '编辑文章'
          }
        }
      ]
    },
    {
      path: '/comment',
      name: 'comment',
      component: commentlist,
      meta: {
        title: '评论'
      },
      children: [
        {
          path: 'list',
          component: commentlist
        },
        {
          path: 'detail/:id',
          component: commentdetail
        },
        {
          path: 'message',
          component: commentmessage
        }
      ]
    },
    {
      path: '/friends',
      name: 'friends',
      component: friends,
      meta: {
        title: '友链'
      }
    },
    {
      path: '/reward',
      name: 'reward',
      component: reward,
      meta: {
        title: '赞赏'
      }
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting,
      meta: {
        title: '设置'
      }
    },
    {
      path: '*',
      redirect: { name: 'home' }
    }
  ]

})