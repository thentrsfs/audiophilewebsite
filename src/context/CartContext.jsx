import { createContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	// Initialize cart
	const [cart, setCart] = useState(() => {
		if (typeof window !== 'undefined') {
			const storedCart = localStorage.getItem('cart');
			return storedCart ? JSON.parse(storedCart) : [];
		}
		return [];
	});

	// State variables
	const [isOpen, setIsOpen] = useState(false);
	const [checkout, setCheckout] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);

	// Calculate total price
	const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

	// Calculate grand total
	const vat = Math.floor(total * 0.2);
	const grandTotal = total + 50;

	// Get the width of the window
	const [width, setWidth] = useState(window.innerWidth);

	// Get the image type based on the window width so that we can use the correct image
	const [imageType, setImageType] = useState('mobile');

	// Add an event listener to update the width when the window is resized and set the image type
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		if (width >= 1024) setImageType('desktop');
		else if (width >= 768) setImageType('tablet');
		else setImageType('mobile');

		return () => window.removeEventListener('resize', handleResize);
	}, [width]);

	// Save cart to local storage
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	// Add product to cart
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

	// Remove product from cart
	const removeFromCart = () => {
		setCart([]);
	};

	// Update quantity of a product
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
				updateQuantity,
				total,
				checkout,
				setCheckout,
				vat,
				grandTotal,
				imageType,
				width,
				isCartOpen,
				setIsCartOpen,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
