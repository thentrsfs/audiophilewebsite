import { useNavigate } from 'react-router';
const GoBackBtn = () => {
	const navigate = useNavigate();
	return (
		<button
			onClick={() => navigate(-1)}
			className='body transition-colors duration-300 cursor-pointer text-gray-darker hover:text-orange-dark pt-4 pb-5 lg:pb-10'>
			Go Back
		</button>
	);
};

export default GoBackBtn;
