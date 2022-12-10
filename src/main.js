import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'https://ecs-api.learnforfuture.id/';
axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

createApp(App).use(router).mount('#app')
