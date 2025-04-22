import GoBackBtn from '../components/GoBackBtn';
import TextInput from '../components/TextInput';
import RadioInput from '../components/RadioInput';
import CartContext from '../context/CartContext';
import FormContext from '../context/FormContext';
import CashIcon from '/checkout/icon-cash-on-delivery.svg';
import PaymentSuccess from '../components/PaymentSuccess';
import { useContext } from 'react';
import ScrollToTop from '../components/ScrollToTop';
const CheckoutPage = () => {
	const {
		cart,
		total,

		removeFromCart,
		vat,
		grandTotal,
	} = useContext(CartContext);

	const {
		handleChange,
		handleSubmit,
		paymentMethod,
		handlePaymentChange,
		isPaid,
		setIsPaid,
	} = useContext(FormContext);
	return (
		<div>
			<div className='bg-black w-full h-[90px]'></div>
			<div className='px-5 pb-20 md:px-8 md:pt-3 lg:px-35 lg:pt-10 bg-white-dark'>
				<GoBackBtn />
				<form
					className='flex max-lg:flex-col gap-6'
					onSubmit={handleSubmit}>
					<div className='bg-white rounded-md p-5 flex flex-col gap-5 md:px-7 lg:flex-1'>
						<h2 className='h4-mobile pb-3'>CHECKOUT</h2>

						<h5 className='subtitle text-orange-dark '>BILLING DETAILS</h5>
						<div className='grid md:grid-cols-2 gap-5 '>
							<TextInput
								placeholder='Alexei Ward'
								handleChange={handleChange}
								name='name'
								label='Name'
							/>

							<TextInput
								type='email'
								placeholder='alexei@mail.com'
								handleChange={handleChange}
								name='email'
								label='Email Address'
							/>

							<TextInput
								type='tel'
								placeholder='+1 202-555-0136'
								handleChange={handleChange}
								name='phone'
								label='Phone Number'
							/>
						</div>
						<h5 className='subtitle text-orange-dark pt-3'>SHIPPING INFO</h5>
						<div className='grid md:grid-cols-2 gap-5'>
							<div className='md:col-span-2'>
								<TextInput
									placeholder='1137 Williams Avenue'
									handleChange={handleChange}
									name='address'
									label='Address'
								/>
							</div>

							<TextInput
								type='number'
								placeholder='10001'
								handleChange={handleChange}
								name='zip'
								label='ZIP Code'
							/>

							<TextInput
								placeholder='New York'
								handleChange={handleChange}
								name='city'
								label='City'
							/>

							<TextInput
								placeholder='United States'
								handleChange={handleChange}
								name='country'
								label='Country'
							/>
						</div>
						<div className='flex flex-col gap-1.5'>
							<h5 className='subtitle text-orange-dark pb-3 pt-4'>
								PAYMENT DETAILS
							</h5>
							<div className='grid md:grid-cols-2'>
								<span className='label-mobile pb-1'>Payment Method</span>
								<RadioInput
									handleChange={handlePaymentChange}
									paymentMethod={paymentMethod}
								/>
							</div>
						</div>
						<div className='py-3'>
							{paymentMethod === 'emoney' ? (
								<div className='grid md:grid-cols-2 gap-5'>
									<TextInput
										type='number'
										placeholder='238521993'
										name='emoneyNum'
										label='e-Money Number'
										handleChange={handleChange}
									/>

									<TextInput
										type='number'
										placeholder='6891'
										name='emoneyPin'
										label='e-Money PIN'
										handleChange={handleChange}
									/>
								</div>
							) : (
								<div className='flex gap-3 md:gap-6  items-center  '>
									<img
										src={CashIcon}
										alt='cash on delivery icon'
										className='w-[48px]'
									/>
									<p className='body text-gray-darker'>
										The 'Cash on Delivery' option enables you to pay in cash
										when our delivery courier arrives at your residence. Just
										make sure your address is correct so that your order will
										not be cancelled.
									</p>
								</div>
							)}
						</div>
					</div>
					<div className='bg-white rounded-md px-5 py-5 md:px-7 lg:w-[350px] lg:h-fit'>
						<div>
							<h2 className='h6 pt-2 pb-5'>SUMMARY</h2>
							{cart.map((item) => (
								<div
									key={item.id}
									className='flex items-center justify-between py-3'>
									<div className='flex items-center gap-5'>
										<img
											src={item.image.mobile}
											alt={item.name}
											className='w-[64px] rounded-md'
										/>
										<div className='body font-manrope-bold'>
											<h3>{item.cartName}</h3>
											<p className='text-gray-darker'>
												$ {item.price.toLocaleString()}
											</p>
										</div>
									</div>
									<div className='body font-manrope-bold text-gray-darker'>
										x{item.quantity}
									</div>
								</div>
							))}
						</div>
						<div className='flex flex-col gap-2 py-4'>
							<div className='flex justify-between items-center'>
								<span className='body text-gray-darker'>TOTAL</span>
								<span className='h6 tracking-normal'>
									$ {total.toLocaleString()}
								</span>
							</div>
							<div className='flex justify-between items-center'>
								<span className='body text-gray-darker'>SHIPPING</span>
								<span className='h6 tracking-normal'>$ 50</span>
							</div>
							<div className='flex justify-between items-center'>
								<span className='body text-gray-darker'>VAT (INCLUDED)</span>
								<span className='h6 tracking-normal'>
									$ {vat.toLocaleString()}
								</span>
							</div>
							<div className='flex justify-between items-center py-3'>
								<span className='body text-gray-darker'>GRAND TOTAL</span>
								<span className='h6 tracking-normal text-orange-dark'>
									$ {grandTotal.toLocaleString()}
								</span>
							</div>
							<button
								className='border subtitle transition-colors duration-300 cursor-pointer bg-orange-dark border-orange-dark text-white hover:bg-orange-light hover:border-orange-light py-2'
								type='submit'>
								CONTINUE & PAY
							</button>
						</div>
					</div>
				</form>
			</div>
			{isPaid && (
				<>
					<PaymentSuccess
						cart={cart}
						grandTotal={grandTotal}
						setIsPaid={setIsPaid}
						removeFromCart={removeFromCart}
					/>{' '}
					<ScrollToTop />
				</>
			)}
		</div>
	);
};

export default CheckoutPage;
