import { createBrowserRouter } from 'react-router';
import App from './App';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import CheckoutPage from './pages/CheckoutPage';

const dataLoader = async () => {
	const response = await fetch('/data.json');
	const data = await response.json();

	return data;
};

const productLoader = async ({ params }) => {
	const response = await fetch('/data.json');
	const data = await response.json();
	const product = data.find((item) => item.slug === params.slug);

	return product;
};

const router = createBrowserRouter([
	{
		path: '/',
		Component: App,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: '/category/:categoryName',
				Component: CategoryPage,
				loader: dataLoader,
			},
			{
				path: '/product/:slug',
				Component: ProductDetail,
				loader: productLoader,
			},
			{
				path: '/checkout',
				Component: CheckoutPage,
			},
		],
	},
]);

export default router;
