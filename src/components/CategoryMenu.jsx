import ShopButton from '../components/ShopButton';
import CartContext from '../context/CartContext';
import { useContext } from 'react';

const CategoryMenu = () => {
	const { setIsOpen } = useContext(CartContext);
	const thumbnails = [
		{
			id: 1,
			name: 'headphones',
			image:
				'/src/assets/shared/desktop/image-category-thumbnail-headphones.png',
		},
		{
			id: 2,
			name: 'speakers',
			image: '/src/assets/shared/desktop/image-category-thumbnail-speakers.png',
		},
		{
			id: 3,
			name: 'earphones',
			image:
				'/src/assets/shared/desktop/image-category-thumbnail-earphones.png',
		},
	];
	return (
		<div className='py-6 pt-14'>
			{
				<div className='flex max-md:flex-col items-center gap-14 md:gap-3 py-4 lg:gap-6  '>
					{thumbnails.map((category) => (
						<div
							key={category.id}
							className='bg-gray-light w-full flex flex-col items-center justify-end gap-3 pb-3 rounded-md
                h-[165px] relative'>
							<h3 className='h6-mobile'>{category.name}</h3>
							<img
								src={category.image}
								alt='category image'
								className='w-35 absolute top-[-40px] lg:top-[-55px] lg:w-45'
							/>
							<ShopButton
								link={`/category/${category.name}`}
								setIsOpen={setIsOpen}
							/>
						</div>
					))}
				</div>
			}
		</div>
	);
};

export default CategoryMenu;
