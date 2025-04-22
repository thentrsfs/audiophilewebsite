import { createContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(() => {
		if (typeof window !== 'undefined') {
			const storedCart = localStorage.getItem('cart');
			return storedCart ? JSON.parse(storedCart) : [];
		}
		return [];
	});

	const [width, setWidth] = useState(window.innerWidth);

	const [imageType, setImageType] = useState('mobile');

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		if (width >= 1024) setImageType('desktop');
		else if (width >= 768) setImageType('tablet');
		else setImageType('mobile');

		return () => window.removeEventListener('resize', handleResize);
	}, [width]);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);
	const [isOpen, setIsOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [checkout, setCheckout] = useState(false);

	const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

	const vat = Math.floor(total * 0.2);
	const grandTotal = total + 50;

	const addToCart = (product, quantity = 1) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((item) => item.id === product.id);
			if (existingItem) {
				return prevCart.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + quantity }
						: item
				);
			}
			return [...prevCart, { ...product, quantity }];
		});
	};

	const removeFromCart = () => {
		setCart([]);
	};

	const updateQuantity = (id, newQuantity) => {
		setCart((prevCart) =>
			newQuantity <= 0
				? prevCart.filter((item) => item.id !== id)
				: prevCart.map((item) =>
						item.id === id ? { ...item, quantity: newQuantity } : item
				  )
		);
	};
	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				isOpen,
				setIsOpen,
				isCartOpen,
				setIsCartOpen,
				updateQuantity,
				total,
				checkout,
				setCheckout,
				vat,
				grandTotal,
				imageType,
				width,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
