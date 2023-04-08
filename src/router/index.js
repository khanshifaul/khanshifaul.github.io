import { createRouter, createWebHistory } from 'vue-router'
import HelloworldView from '../views/HelloworldView.vue'
import BlogView from '../views/BlogView.vue'
import ResumeView from '../views/ResumeView.vue'
import AdminView from "../views/AdminView.vue"
import Dashboard from "../views/admin/DashboardView.vue"
import Inbox from "../views/admin/InboxView.vue"
import Post from "../views/admin/PostView.vue"
import Setting from "../views/admin/SettingView.vue"
import LoginView from '../views/admin/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloworldView,
      meta: {
        title: "Full-stack Web Developer :: Designer :: Cybersecurity Researcher",
        requiresAuth: false,
      }
    },
    {
      path: '/',
      name: 'about',
      component: HelloworldView,
      meta: {
        title: 'About',
        requiresAuth: false,
      }
    },
    {
      path: '/',
      name: 'work',
      component: HelloworldView,
      meta: {
        title: 'Work',
        requiresAuth: false,
      }
    },
    {
      path: '/',
      name: 'contact',
      component: HelloworldView,
      meta: {
        title: 'Contact',
        requiresAuth: false,
      }
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView,
      meta: {
        title: 'Resume',
        requiresAuth: false,
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
      meta: {
        title: 'Blog',
        requiresAuth: false,
      }
    },
    {
      path: '/blog/:blogtitle',
      name: 'blogPost',
      component: () => import('@/components/blog/BlogPost.vue'),
      meta: {
        title: 'BlogPost',
        requiresAuth: false,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        title: 'Login',
        requiresAuth: false,
      }
    },
    {
      path: '/admin',
      redirect: '/admin/dashboard',
      component: AdminView,
      children: [
        {
          path: '/admin/dashboard',
          name: 'dashboard',
          component: Dashboard,
          meta: {
            title: 'Dashboard',
            requiresAuth: true,
          },
        },
        {
          path: '/admin/inbox',
          name: 'inbox',
          component: Inbox,
          meta: {
            title: 'Inbox',
            requiresAuth: true,
          },
        },
        {
          path: '/admin/post',
          name: 'post',
          component: Post,
          meta: {
            title: 'New Post',
            requiresAuth: true,
          },
        },
        {
          path: '/admin/setting',
          name: 'setting',
          component: Setting,
          meta: {
            title: 'Setting',
            requiresAuth: true,
          },
        },
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import('@/components/NotFound.vue'),
      meta: {
        title: "Page Not Found :: Khan Shifaul Islam",
      }
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 64,
        behavior: 'smooth',
      }
    }
    else {
      return { top: 0 }
    }
  },
})


// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  document.title = `Khan Shifaul Islam :: ${to.meta.title}`;
  next();
});

export default router
