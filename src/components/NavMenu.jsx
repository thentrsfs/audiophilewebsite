import HamburgerIcon from '/shared/tablet/icon-hamburger.svg';
import Logo from '/shared/desktop/logo.svg';
import CartIcon from './CartIcon';
import { useNavigate, Link, useLocation } from 'react-router';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const NavMenu = () => {
	const { isOpen, setIsOpen, cart, isCartOpen, setIsCartOpen } =
		useContext(CartContext);
	const navigateTo = useNavigate();

	// Go to homepage
	const navigate = () => {
		setIsOpen(false);
		navigateTo('/');
	};

	// Handle modal
	const openModal = () => {
		document.getElementById('cart-modal')?.showModal();
		setIsCartOpen(true);
	};

	// Get location
	const location = useLocation();

	return (
		<div
			className={`top-0 w-full z-21 ${
				location.pathname == '/' ? 'bg-transparent absolute' : 'bg-black fixed'
			} ${isCartOpen && 'lg:pr-[15px]'}`}>
			<div className='flex justify-between items-center px-6 md:px-8 lg:px-35 py-8 '>
				<div className='flex items-center gap-8'>
					<div className='lg:hidden'>
						<img
							src={HamburgerIcon}
							alt='hamburger icon'
							className='w-[16px] h-[15px] cursor-pointer'
							onClick={() => setIsOpen(!isOpen)}
						/>
					</div>
					<img
						src={Logo}
						alt='logo'
						onClick={navigate}
						className='hidden md:block cursor-pointer'
					/>
				</div>
				<img
					src={Logo}
					alt='logo'
					onClick={navigate}
					className='md:hidden'
				/>

				<ul className='footer-nav text-white gap-10 pr-[10rem] hidden lg:flex'>
					<Link
						to='/'
						className='hover:text-orange-dark transition-colors duration-300'>
						Home
					</Link>
					<Link
						to='/category/headphones'
						className='hover:text-orange-dark transition-colors duration-300'>
						Headphones
					</Link>
					<Link
						to='/category/speakers'
						className='hover:text-orange-dark transition-colors duration-300'>
						Speakers
					</Link>
					<Link
						to='/category/earphones'
						className='hover:text-orange-dark transition-colors duration-300'>
						Earphones
					</Link>
				</ul>
				<CartIcon
					cart={cart}
					openModal={openModal}
				/>
			</div>
			<hr className=' text-gray-darker md:mx-8 lg:mx-35' />
		</div>
	);
};

export default NavMenu;
