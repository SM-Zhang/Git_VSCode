import { createRouter, createWebHashHistory } from 'vue-router';
// 布局组件
import Layout from "@/components/Layout"
// 主页
import Home from '@/views/Home';

const routes = [
    {
        path: "/",
        component: Layout, // 父路由，有路由出口
        children: [
            {
                path: "/index", // 作为子路由
                component: Home, // 子页面渲染在Layout指定的区域，就不会渲染在其他地方了
            }
        ]
    }
]

// vue2的写法
// const router = VueRouter.createRouter({
//     history: VueRouter.createWebHashHistory(),
//     routers
// })

// 迁移到3之后的写法
// 注意是 routes
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router