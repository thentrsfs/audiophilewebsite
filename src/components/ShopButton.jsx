import ArrowIcon from '/shared/desktop/icon-arrow-right.svg';
import { useNavigate } from 'react-router';
const ShopButton = ({ link, setIsOpen }) => {
	const navigateTo = useNavigate();

	// Go to category page
	const navigate = () => {
		setIsOpen(false);
		navigateTo(link);
	};
	return (
		<button
			className='subtitle flex items-center transition-colors duration-300 cursor-pointer text-gray-darker hover:text-orange-dark gap-3'
			onClick={navigate}>
			<span>SHOP </span>
			<img
				src={ArrowIcon}
				alt='arrow icon'
			/>
		</button>
	);
};

export default ShopButton;
