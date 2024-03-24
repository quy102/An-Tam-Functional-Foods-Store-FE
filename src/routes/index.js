// Pages
import Home from '~/pages/HomePage';
import Product from '~/pages/ProductsPage';
import Cart from '~/pages/CartPage';
import Personal from '~/pages/PersonalPage';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product', component: Product },
    { path: '/cart', component: Cart },
    { path: '/personal', component: Personal },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
