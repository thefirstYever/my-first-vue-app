import {createRouter, createWebHistory} from 'vue-router'
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Opinion from "./components/Opinion.vue";
import Mixes from "./components/Mixes.vue";
import Article from "./components/Article.vue";
import AllArticles from "./components/AllArticles.vue";
import MixedContent from "./components/MixedContent.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
        return { top: 0, left: 0 }
    },
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path:'/opinion',
            name: 'Opinion',
            component: Opinion
        },
        {
            path: '/mixes',
            name: 'Mixes',
            component: Mixes
        },
        {
            path:'/MixedMusic',
            name: 'MixedMusic',
            children: [
                {
                    path: 'details/:id',
                    name: 'MixesMusic',
                    component: MixedContent
                }
            ]
        },
        {
            path:'/articles',
            name: 'Articles',
            children: [
                {
                    path: '',
                    name: 'AllArticles',
                    component: AllArticles
                },
                {
                    path:'details/:id',
                    name:'ArticleDetails',
                    component: Article
                }
            ]
        }
        // {
        //     path: "/:catchAll(.*)",
        //     name: 'NotFound',
        //     component: NotFound404,
        // }
    ]
})

export default router