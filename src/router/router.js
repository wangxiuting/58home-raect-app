/*
 * @Description: 
 * @author: wangxiuting
 * @Date: 2020-11-30 13:44:26
 * @lastEditors: wangxiuting
 * @LastEditTime: 2020-12-01 15:53:13
 * @FilePath: \my-home\src\router\router.js
 * @GlobalData: data
 */

import React, {
    lazy , Suspense
} from 'react'
import Layout from '../layout/layout'
import Tabbuttom from '../components/main/bottomTabs/bottomTabs'
import {
    Redirect,
    Link
} from 'react-router-dom';
// 路由懒加载
const Main = lazy(() => import('../pages/Main/Main'))
const AllServer = lazy(() => import('../pages/AllServer/AllServer'))
const News = lazy(() => import('../pages/News/News'))
const Mine = lazy(() => import('../pages/Mine/Mine'))

const SuspenseComponent = Component => props => {
    return (
      <Suspense fallback={null}>
        <Component {...props}></Component>
      </Suspense>
    )
  }
export default [{
    component: Layout,
    routes: [
        {
        path: '/',
        // component: Tabbuttom,
        exact: true,
        render: () => < Redirect to = { "/home" }
        />,
        },
        {
            path:'/home',
            component: Tabbuttom,
            routes: [
                {
                    path: '/home',
                    exact: true,
                    render: () => < Redirect to = { "/home/main" }
                    />,
                },
                {
                    path: '/home/main',
                    component: SuspenseComponent(Main),
                },
        
                {
                    path: '/home/server',
                    component: SuspenseComponent(AllServer),
                },
            //             {
            //                 path: '/home/info',
            //                 component: SuspenseComponent(Info),
            //             },
            //             {
            //                 path: '/home/my',
            //                 component: SuspenseComponent(My),
            //                 routes: [ 
            //                     {
            //                         path: '/home/my/order',
            //                         render:()=><Redirect to="/order"/>
            //                     },
            //                     // {
            //                     //     path:'/home/my/recent',
            //                     //     render:() => <Redirect to = "/recent"/>
            //                     // }
            //                 ]
            //             },
            ],
        },
]
}]