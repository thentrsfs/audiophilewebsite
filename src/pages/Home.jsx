import PrimaryButton from '../components/PrimaryButton';
import PatternCircles from '../components/PatternCircles';
import CategoryMenu from '../components/CategoryMenu';
import { useNavigate } from 'react-router';
import CartContext from '../context/CartContext';
import { useContext } from 'react';

const Home = () => {
	const navigate = useNavigate();

	const { width, imageType } = useContext(CartContext);

	// Change the background image depending on the screen size
	const backgroundImage = () => {
		if (width >= 768 && width < 1024) return '/home/tablet/image-header.jpg';
		else if (width >= 1024) return '/home/desktop/image-hero.jpg';
		else return '/home/mobile/image-header.jpg';
	};

	return (
		<div
			className='bg-contain bg-no-repeat '
			style={{ backgroundImage: `url(${backgroundImage()})` }}>
			<div className='flex flex-col gap-7 md:gap-8 px-12 items-center justify-center h-168 md:h-200 2xl:h-250 max-lg:text-center lg:items-start lg:pl-35 '>
				<h4 className='overline-text text-gray-darker'>NEW PRODUCT</h4>
				<h1 className='h1 text-white lg:w-120'>XX99 MARK II HEADPHONES</h1>
				<p className='body text-gray-darker md:w-90'>
					Experience natural, lifelike audio and exceptional build quality made
					for the passionate music enthusiast.
				</p>
				<PrimaryButton
					style={
						'w-[160px] h-[48px] bg-orange-dark hover:bg-orange-light border-orange-dark text-white'
					}
					text='SEE PRODUCT'
					handleClick={() => navigate('/product/xx99-mark-two-headphones')}
				/>
			</div>

			<div className=' flex flex-col px-5 pb-26 md:px-8 gap-6 lg:gap-10 lg:px-35 2xl:pt-50'>
				<div>
					<CategoryMenu />
				</div>
				<div className='bg-orange-dark rounded-md flex max-lg:flex-col items-center justify-between lg:justify-around max-lg:pb-12 max-lg:pt-15 max-lg:text-center lg:px-12 h-[600px] text-white relative overflow-hidden'>
					<PatternCircles />
					<img
						src={`/home/${imageType}/image-speaker-zx9.png`}
						alt='zx9 speaker'
						className='w-38 lg:w-100 lg:pt-38 z-20'
					/>
					<div className='flex flex-col gap-6 max-lg:items-center justify-center md:w-80'>
						<h1 className='h1 w-60 pt-3'>ZX9 SPEAKER</h1>
						<p className='body w-70 lg:w-80 '>
							Upgrade to premium speakers that are phenomenally built to deliver
							truly remarkable sound.
						</p>
						<PrimaryButton
							style={
								'w-[160px] h-[48px] bg-black border-black hover:bg-black-hover hover:border-black-hover text-white'
							}
							handleClick={() => navigate('/product/zx9-speaker')}
							text='SEE PRODUCT'
						/>
					</div>
				</div>
				<div className='relative'>
					<img
						src={`/home/${imageType}/image-speaker-zx7.jpg`}
						alt='zx7 speaker'
						className='rounded-md w-full'
					/>
					<div className='flex flex-col gap-7 pl-6 md:pl-[4rem] absolute top-[50%] translate-y-[-50%] '>
						<h1 className='h4'>ZX7 SPEAKER</h1>
						<PrimaryButton
							style={
								'w-[160px] h-[48px] border-black hover:bg-black hover:text-white '
							}
							handleClick={() => navigate('/product/zx7-speaker')}
							text='SEE PRODUCT'
						/>
					</div>
				</div>
				<div className='flex max-md:flex-col gap-6 lg:gap-8 md:gap-3'>
					<img
						src={`/home/${imageType}/image-earphones-yx1.jpg`}
						alt='yx1 earphones'
						className='rounded-md md:h-[320px] h-[200px] w-full'
					/>
					<div className='bg-gray-light md:h-[320px] w-full h-[200px] flex flex-col justify-center rounded-md'>
						<div className='flex flex-col gap-7 pl-6 md:pl-[3rem]'>
							<h1 className='h4'>YX1 EARPHONES</h1>
							<PrimaryButton
								style={
									'w-[160px] h-[48px] border-black hover:bg-black hover:text-white'
								}
								handleClick={() => navigate('/product/yx1-earphones')}
								text='SEE PRODUCT'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='px-5 pb-24 md:px-8 lg:px-35 lg:pt-20 lg:pb-45 flex lg:flex-row-reverse lg:items-center max-lg:flex-col gap-8 max-lg:text-center'>
				<img
					src={`/shared/${imageType}/image-best-gear.jpg`}
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

export default Home;
