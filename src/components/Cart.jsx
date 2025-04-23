import { useContext } from 'react';
import CartContext from '../context/CartContext';
import CounterButton from './CounterButton';
import { useNavigate } from 'react-router';
const Cart = () => {
	const {
		cart,
		removeFromCart,
		updateQuantity,
		total,
		setCheckout,
		setIsCartOpen,
	} = useContext(CartContext);

	const navigate = useNavigate();

	// Functions to increase and decrease quantity of an item in cart
	const increaseQuantity = (item) => {
		updateQuantity(item.id, item.quantity + 1);
	};
	const decreaseQuantity = (item) => {
		updateQuantity(item.id, item.quantity - 1);
	};

	// Go to checkout
	const checkoutHandler = () => {
		setCheckout(true);
		navigate('/checkout');
	};

	const closeModal = () => {
		document.getElementById('cart-modal')?.close();
		setIsCartOpen(false);
	};
	return (
		<dialog
			id='cart-modal'
			className='modal'>
			<div className='md:w-[377px] max-md:inset-x-5 h-fit bg-white rounded-md px-5 md:px-8 py-7 absolute lg:right-35 md:right-5 top-[6.8rem]'>
				{cart.length > 0 ? (
					<div className='flex flex-col gap-2'>
						<div className='flex items-center justify-between'>
							<h3 className='h6'>CART ({cart.length})</h3>
							<button
								className='body transition-colors duration-300 cursor-pointer text-gray-darker hover:text-orange-dark underline'
								onClick={removeFromCart}>
								Remove all
							</button>
						</div>
						<div>
							{cart.map((item) => (
								<div
									key={item.id}
									className='flex items-center justify-between py-3 md:gap-15 md:py-3'>
									<div className='flex items-center gap-5'>
										<img
											src={item.image.mobile}
											alt={item.name}
											className='w-[64px] rounded-md'
										/>
										<div className='body font-manrope-bold'>
											<h3>{item.cartName}</h3>
											<p className='text-gray-darker'>
												$ {item.price.toLocaleString()}
											</p>
										</div>
									</div>
									<CounterButton
										style='w-[96px] h-[32px]'
										quantity={item.quantity}
										increaseQuantity={() => increaseQuantity(item)}
										decreaseQuantity={() => decreaseQuantity(item)}
									/>
								</div>
							))}
						</div>
						<div className='flex justify-between items-center py-4'>
							<span className='body text-gray-darker'>TOTAL</span>
							<span className='h6 tracking-normal'>
								$ {total.toLocaleString()}
							</span>
						</div>
						<button
							className='border subtitle cursor-pointer transition-colors duration-300 bg-orange-dark border-orange-dark text-white hover:bg-orange-light hover:border-orange-light py-2'
							onClick={checkoutHandler}>
							CHECKOUT
						</button>
					</div>
				) : (
					<div className='flex flex-col gap-10'>
						<h3 className='h6'>CART (0)</h3>
						<div className='flex flex-col text-center'>
							<p className='h6-mobile'>Your cart is empty</p>
							<p className='body text-gray-darker'>Add items to your cart</p>
						</div>
					</div>
				)}
			</div>
			<form
				method='dialog'
				className='modal-backdrop cursor-default'>
				<button onClick={closeModal}>close</button>
			</form>
		</dialog>
	);
};

export default Cart;
