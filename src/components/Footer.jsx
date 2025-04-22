import Logo from '/src/assets/shared/desktop/logo.svg';
import Twitter from './Twitter';
import Facebook from './Facebook';
import Instagram from './Instagram';
import { Link } from 'react-router';
const Footer = () => {
	return (
		<footer className='max-md:text-center'>
			<div className='bg-black-light flex flex-col max-md:items-center relative gap-10 md:gap-8 py-10 px-6 md:px-10 md:pt-13 lg:px-35 '>
				<div
					className='w-[100px] h-[4px] bg-orange-dark absolute top-0 left-[50%]
                translate-x-[-50%] md:left-[5.2rem] lg:left-[11.8rem]'></div>
				<div className='flex max-lg:flex-col gap-10 pt-3 lg:justify-between'>
					<img
						src={Logo}
						alt='logo'
						className='w-fit cursor-pointer'
					/>
					<ul className='footer-nav text-white flex max-md:flex-col gap-4 md:gap-7'>
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
				</div>
				<p className='body text-gray-darker lg:w-135'>
					Audiophile is an all in one stop to fulfill your audio needs. We're a
					small team of music lovers and sound specialists who are devoted to
					helping you get the most out of personal audio. Come and visit our
					demo facility - we're open 7 days a week.
				</p>
				<div className='flex max-md:flex-col gap-8 max-md:items-center md:justify-between md:pt-10'>
					<p className='body font-manrope-bold text-gray-darker'>
						Copyright 2021. All Rights Reserved
					</p>
					<div className='flex gap-4 '>
						<Facebook />
						<Twitter />
						<Instagram />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
