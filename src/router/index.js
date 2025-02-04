import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/Home.vue'; 
import CreatePost from '../components/CreatePost.vue';

const routes = [
  { path: '/', component: HomePage }, 
  { path: '/create', component: CreatePost }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
