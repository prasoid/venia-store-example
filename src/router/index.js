import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Contacts from '@/views/Contacts.vue'
import Category from '@/views/Category.vue'
import Error404 from '@/views/Error404.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Contacts',
      path: '/contacts',
      component: Contacts,
    },
    {
      name: 'Category',
      path: '/category/:slug(.*)',
      component: Category,
      props: true,
    },
    {
      name: '404',
      path: '/:pathMatch(.*)*',
      component: Error404,
    },
  ],
})
