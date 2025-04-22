import { Outlet } from 'react-router';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useContext } from 'react';
import CategoryMenu from './components/CategoryMenu';
import Cart from './components/Cart';
import CartContext from './context/CartContext';
import FormContext from './context/FormContext';

function App() {
	const { isOpen, isCartOpen } = useContext(CartContext);
	const { isPaid } = useContext(FormContext);

	return (
		<div className='overflow-x-hidden'>
			<ScrollToTop />
			{isCartOpen || isOpen || isPaid ? (
				<div className='fixed inset-0 bg-black opacity-50 z-20'></div>
			) : null}
			<div className='absolute top-[90px]  rounded-b-md bg-white w-full z-21 px-5'>
				{isOpen && <CategoryMenu />}
			</div>
			{isCartOpen && <Cart />}
			<NavMenu />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
