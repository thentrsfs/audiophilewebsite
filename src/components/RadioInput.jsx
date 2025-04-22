const RadioInput = ({ paymentMethod, handleChange }) => {
	return (
		<div className='flex flex-col gap-4'>
			<div
				className={`flex items-center gap-4 border transition-colors duration-300 border-gray-dark active:border-orange-dark h-[56px] rounded-md px-5 ${
					paymentMethod === 'emoney' && 'border-orange-dark'
				}`}>
				<input
					type='radio'
					name='payment'
					value='emoney'
					checked={paymentMethod === 'emoney'}
					onChange={handleChange}
					className='radio radio-sm checked:text-orange-dark checked:border-gray-dark border-gray-dark'
				/>
				<span className='input-mobile'>e-Money</span>
			</div>
			<div
				className={`flex items-center gap-4 border  transition-colors duration-300 border-gray-dark active:border-orange-dark h-[56px] rounded-md px-5 ${
					paymentMethod === 'cash' && 'border-orange-dark'
				}`}>
				<input
					type='radio'
					name='payment'
					value='cash'
					checked={paymentMethod === 'cash'}
					onChange={handleChange}
					className='radio radio-sm checked:text-orange-dark checked:border-gray-dark border-gray-dark'
				/>
				<span className='input-mobile'>Cash on Delivery</span>
			</div>
		</div>
	);
};

export default RadioInput;
