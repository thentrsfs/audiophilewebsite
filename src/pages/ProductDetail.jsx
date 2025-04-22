import { useLoaderData, useNavigate } from 'react-router';
import CounterButton from '../components/CounterButton';
import PrimaryButton from '../components/PrimaryButton';
import CategoryMenu from '../components/CategoryMenu';
import CartContext from '../context/CartContext';
import GoBackBtn from '../components/GoBackBtn';
import { useContext, useState } from 'react';

const ProductDetail = () => {
	const product = useLoaderData();
	const { addToCart, setIsOpen, imageType } = useContext(CartContext);
	const [quantity, setQuantity] = useState(1);
	const navigate = useNavigate();

	const handleAddToCart = () => {
		addToCart(product, quantity);
		setQuantity(1);
	};

	if (!product)
		return (
			<h2 className='flex flex-col justify-center items-center h-screen text-3xl'>
				Product not found!
			</h2>
		);
	return (
		<div>
			<div className='bg-black w-full h-[90px]' />
			<div className='px-5 md:px-8 md:pt-3 lg:px-35 lg:pt-10'>
				<GoBackBtn />
				<div className='flex max-md:flex-col md:justify-between gap-6 md:gap-12 md:items-center'>
					<img
						src={product.image?.[imageType]}
						alt={product.name}
						className='rounded-md md:max-h-[480px] lg:max-h-[560px]'
					/>
					<div className='flex flex-col gap-6 md:px-3 lg:pr-32'>
						<h2 className='overline-text text-orange-dark'>
							{product.new && 'New Product'}
						</h2>
						<h1 className='h2'>{product.name}</h1>
						<p className='body text-gray-darker'>{product.description}</p>
						<p className='h6'>$ {product.price.toLocaleString()}</p>
						<div className='flex gap-5'>
							<CounterButton
								style='w-[120px] h-[48px]'
								increaseQuantity={() => setQuantity((q) => q + 1)}
								decreaseQuantity={() => setQuantity((q) => Math.max(1, q - 1))}
								quantity={quantity}
							/>
							<button
								className='border transition-colors duration-300 border-orange-dark text-white bg-orange-dark subtitle w-[160px] h-[48px] cursor-pointer hover:bg-orange-light hover:border-orange-light'
								onClick={handleAddToCart}>
								ADD TO CART
							</button>
						</div>
					</div>
				</div>
				<div className='py-20 flex max-lg:flex-col gap-16 lg:gap-25 lg:pr-65 '>
					<div className='flex flex-col gap-5 flex-1'>
						<h3 className='h3'>FEATURES</h3>
						<p className='body text-gray-darker whitespace-break-spaces'>
							{product.features}
						</p>
					</div>
					<div className='flex flex-col md:flex-row lg:flex-col  md:gap-40 lg:gap-6 gap-5 '>
						<h3 className='h3'>IN THE BOX</h3>
						<div className='flex flex-col gap-1'>
							{product.includes.map((item, index) => (
								<div
									key={index}
									className='flex gap-5 body'>
									<span className='text-orange-dark font-manrope-bold w-[20px]'>
										{item.quantity}x
									</span>{' '}
									<span className='text-gray-darker'>{item.item}</span>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='md:hidden flex flex-col gap-5 pb-25'>
					{Object.entries(product.gallery).map(([key, value], index) => (
						<div key={`${key}-${index}`}>
							<img
								src={value?.[imageType]}
								alt='gallery image'
								className='rounded-md'
							/>
						</div>
					))}
				</div>
				<div className='hidden md:grid grid-cols-5 gap-4 lg:gap-7 pb-25 '>
					<div className='col-span-2'>
						<div className='flex flex-col justify-between h-full gap-4 lg:gap-7'>
							<img
								src={product.gallery.first.tablet}
								alt='other image'
								className='h-full rounded-md'
							/>
							<img
								src={product.gallery.second.tablet}
								alt='other image'
								className='h-full rounded-md'
							/>
						</div>
					</div>
					<div
						className='col-span-3
					row-span-1'>
						<img
							src={product.gallery.third.tablet}
							alt='other image'
							className='rounded-md h-full'
						/>
					</div>
				</div>
				<div className='flex flex-col gap-10 pb-18 lg:pb-30 lg:pt-10'>
					<h3 className='h3 text-center'>YOU MAY ALSO LIKE</h3>
					<div className='flex max-md:flex-col md:gap-3 gap-10 lg:gap-6'>
						{product.others.map((item, index) => (
							<div
								key={index}
								className='flex flex-col items-center gap-6'>
								<img
									src={item.image?.[imageType]}
									alt='item image'
									className='rounded-md'
								/>
								<h2 className='h5'>{item.name}</h2>
								<PrimaryButton
									style={
										'w-[160px] h-[48px] bg-orange-dark border-orange-dark hover:bg-orange-light hover:border-orange-light text-white '
									}
									text='SEE PRODUCT'
									handleClick={() => navigate(`/product/${item.slug}`)}
								/>
							</div>
						))}
					</div>
				</div>
				<CategoryMenu setIsOpen={setIsOpen} />
			</div>
			<div className='px-5 pb-24 md:px-8 lg:px-35 lg:pt-20 lg:pb-45 flex lg:flex-row-reverse lg:items-center max-lg:flex-col gap-8 max-lg:text-center'>
				<img
					src={`/src/assets/shared/${imageType}/image-best-gear.jpg`}
					alt='best gear image'
					className='rounded-md'
				/>
				<div className='flex flex-col gap-7 px-5 md:px-15 lg:px-0 lg:pr-35 lg:gap-4'>
					<h1 className='custom-footer-header'>
						Bringing you the <span className='text-orange-dark'>best</span>{' '}
						audio gear
					</h1>
					<p className='body text-gray-darker '>
						Located at the heart of New York City, Audiophile is the premier
						store for high end headphones, earphones, speakers, and audio
						accessories. We have a large showroom and luxury demonstration rooms
						available for you to browse and experience a wide range of our
						products. Stop by our store to meet some of the fantastic people who
						make Audiophile the best place to buy your portable audio equipment.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
