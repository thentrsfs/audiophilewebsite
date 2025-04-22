import ConfirmationIcon from '/checkout/icon-order-confirmation.svg';
import PrimaryButton from './PrimaryButton';
import { useNavigate } from 'react-router';

const PaymentSuccess = ({ cart, grandTotal, setIsPaid, removeFromCart }) => {
	const navigate = useNavigate();
	const handleBackToHome = () => {
		setIsPaid(false);
		navigate('/');
		removeFromCart();
	};
	return (
		<div className='absolute max-md:inset-x-5 top-[25%] md:left-[50%] md:translate-x-[-50%] bg-white z-22 rounded-md md:w-[540px] '>
			<div className='flex flex-col gap-5 p-6 md:p-10 md:gap-8'>
				<img
					src={ConfirmationIcon}
					alt='confirmation icon'
					className='w-[64px]'
				/>
				<h2 className='h3 md:pr-40'>THANK YOU FOR YOUR ORDER</h2>
				<p className='body text-gray-darker'>
					You will receive an email confirmation shortly.
				</p>
				<div className='flex flex-col md:gap-4'>
					<div className='flex max-md:flex-col '>
						<div className='max-md:rounded-t-md md:rounded-l-md bg-gray-light p-6 flex flex-col gap-2 flex-3'>
							<div className='flex justify-between '>
								<div className='flex gap-5'>
									<img
										src={cart[0].image.mobile}
										alt='product image'
										className='w-12'
									/>
									<div className='flex flex-col'>
										<span className='body font-manrope-bold'>
											{cart[0].cartName}
										</span>
										<span className='input-mobile text-gray-darker'>
											$ {cart[0].price.toLocaleString()}
										</span>
									</div>
								</div>
								<span className='body font-manrope-bold text-gray-darker'>
									x{cart[0].quantity}
								</span>
							</div>
							<hr className='text-gray-darker' />
							<span className='label-mobile text-gray-darker flex justify-center'>
								and {cart.length - 1} other item(s)
							</span>
						</div>
						<div className='bg-black flex-2 max-md:rounded-b-md md:rounded-r-md flex flex-col px-6 py-3.5 gap-2 md:justify-center'>
							<span className='body text-gray-darker'>GRAND TOTAL</span>
							<span className='h6  tracking-normal text-white'>
								$ {grandTotal.toLocaleString()}
							</span>
						</div>
					</div>
					<PrimaryButton
						style={
							' bg-orange-dark hover:bg-orange-light hover:border-orange-light text-white border-orange-dark w-full mt-5 h-[48px] '
						}
						text='BACK TO HOME'
						handleClick={handleBackToHome}
					/>
				</div>
			</div>
		</div>
	);
};

export default PaymentSuccess;
