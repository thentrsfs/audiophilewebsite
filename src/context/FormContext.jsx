import { createContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
	const [paymentMethod, setPaymentMethod] = useState('emoney');
	const handlePaymentChange = (e) => {
		setPaymentMethod(e.target.value);
	};
	const initialFormData = {
		name: '',
		email: '',
		phone: '',
		address: '',
		zip: '',
		city: '',
		country: '',
		emoneyNum: '',
		emoneyPin: '',
	};
	const [submitted, setSubmitted] = useState(false);
	const [isPaid, setIsPaid] = useState(false);
	const [errors, setErrors] = useState({});
	const [formData, setFormData] = useState(initialFormData);
	const formatPhone = (value) => {
		// Remove all non-digit characters
		const digits = value.replace(/\D/g, '');

		// Match digits into country code, area code, prefix, line number
		const match = digits.match(/^(\d{1})(\d{3})(\d{3})(\d{0,4})/);

		if (match) {
			return `+${match[1]} ${match[2]}-${match[3]}-${match[4]}`;
		}

		// If less than full match, just keep adding digits after the +
		return '+' + digits;
	};

	const handleChange = (e) => {
		let { name, value } = e.target;
		if (name === 'phone') {
			value = formatPhone(value);
		}
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		setErrors((prev) => ({
			...prev,
			[name]: '',
		}));
	};
	const validate = () => {
		const newErrors = {};

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (formData.email && !emailRegex.test(formData.email)) {
			newErrors.email = 'Wrong Format';
		}

		const phoneRegex = /^\+\d{1,3}\s\d{3}-\d{3}-\d{4}$/;
		if (formData.phone && !phoneRegex.test(formData.phone)) {
			newErrors.phone = 'Wrong Format';
		}

		const zipRegex = /^\d{5}$/;
		if (formData.zip && !zipRegex.test(formData.zip)) {
			newErrors.zip = 'Wrong Format';
		}

		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = validate();

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			window.scrollTo(0, 0);
		} else {
			console.log('Form submitted', formData);
			setSubmitted(true);
			setIsPaid(true);
			setFormData(initialFormData);
		}
	};

	return (
		<FormContext.Provider
			value={{
				paymentMethod,
				handlePaymentChange,
				submitted,
				setSubmitted,
				formData,
				setFormData,
				errors,
				handleChange,
				handleSubmit,
				isPaid,
				setIsPaid,
			}}>
			{children}
		</FormContext.Provider>
	);
};

export default FormContext;
