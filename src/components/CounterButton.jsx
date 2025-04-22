const CounterButton = ({
	style,
	increaseQuantity,
	decreaseQuantity,
	quantity,
}) => {
	return (
		<div
			className={`flex gap-4 subtitle justify-between items-center px-5 bg-gray-light ${style}`}>
			<span
				className='text-gray-darker cursor-pointer hover:text-orange-dark'
				onClick={decreaseQuantity}>
				-
			</span>
			<span>{quantity}</span>
			<span
				className='text-gray-darker cursor-pointer hover:text-orange-dark'
				onClick={increaseQuantity}>
				+
			</span>
		</div>
	);
};

export default CounterButton;
