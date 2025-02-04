import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import CreatePost from '../components/CreatePost.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/create', component: CreatePost }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
