import { lazy } from 'react';

export default [
    {
        path: '/',
        name: "Home",
        exact: true,
        component: lazy(() => import('../pages/Home' /* webpackChunkName: "Home" */))
    },
    {
        path: '/about',
        name: "About",
        exact: true,
        component: lazy(() => import('../pages/About' /* webpackChunkName: "About" */))
    },
    {
        path: '/gallery',
        name: "Gallery",
        exact: true,
        component: lazy(() => import('../pages/Gallery' /* webpackChunkName: "Gallery" */))
    },
    {
        path: '/products',
        name: "Products",
        exact: false,
        component: lazy(() => import('../pages/Products' /* webpackChunkName: "Products" */))
    },
]