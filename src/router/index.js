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

// 安装插件时
// 项目运行必须的文件，那么就使用 --save
// 非必须的使用 --save -dev
// --save：将保存配置信息到pacjage.json的dependencies节点中。
// --save -dev：将保存配置信息到pacjage.json的devDependencies节点中。
// dependencies：运行时的依赖，发布后，即生产环境下还需要用的模块
// devDependencies：开发时的依赖。里面的模块是开发时用的，发布时用不到它