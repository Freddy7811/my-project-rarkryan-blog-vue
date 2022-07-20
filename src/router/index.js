import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import DetailBlog from '../views/DetailBlog.vue';
const routes = [
{
	path: '/',
	name: 'Home',
	component: Home
},

{
	path: '/detailblog',
	name: 'Blog',
	component: DetailBlog
},



];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router