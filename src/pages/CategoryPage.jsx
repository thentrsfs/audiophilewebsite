import { useParams, useLoaderData, useNavigate } from 'react-router';
import PrimaryButton from '../components/PrimaryButton';
import CategoryMenu from '../components/CategoryMenu';
import CartContext from '../context/CartContext';
import { useContext } from 'react';

const CategoryPage = () => {
	// Load data
	const data = useLoaderData();

	const { categoryName } = useParams();
	const { setIsOpen, imageType } = useContext(CartContext);
	const navigate = useNavigate();

	return (
		<div>
			<div className='bg-black pt-23'>
				<div>
					<h1 className='h2 text-white py-8 md:py-20 text-center'>
						{categoryName}
					</h1>
				</div>
			</div>
			<div className='px-5 md:px-8 lg:px-35 lg:py-20'>
				{data
					.filter((item) => item.category === categoryName)
					.reverse()
					.map((item, index) => (
						<div
							key={item.id}
							className={`flex max-lg:flex-col ${
								index % 2 !== 0 && 'flex-row-reverse'
							} items-center max-lg:text-center py-14 lg:pb-35 gap-5`}>
							<img
								src={item.categoryImage?.[imageType]}
								alt={item.name}
								className='rounded-md lg:w-[540px]'
							/>
							<div className='flex flex-col gap-5 max-lg:items-center px-1 md:px-18 lg:pr-28'>
								<h3 className='overline-text md:pt-5 text-orange-dark'>
									{item.new && 'New Product'}
								</h3>
								<h2 className='h2 '>{item.name}</h2>
								<p className='body text-gray-darker'>{item.description}</p>
								<PrimaryButton
									style={
										'w-[160px] h-[48px] border-orange-dark bg-orange-dark text-white hover:bg-orange-light hover:border-orange-light '
									}
									handleClick={() => navigate(`/product/${item.slug}`)}
									text='SEE PRODUCT'
								/>
							</div>
						</div>
					))}
				<CategoryMenu setIsOpen={setIsOpen} />
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

export default CategoryPage;
