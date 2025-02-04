import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080'; // 백엔드 주소
axios.defaults.headers.common['Content-Type'] = 'application/json';

const app = createApp(App);
app.config.globalProperties.$axios = axios; // Axios를 전역으로 설정
app.mount('#app');
