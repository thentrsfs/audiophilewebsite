import FormContext from '../context/FormContext';
import { useContext } from 'react';
const TextInput = ({
	placeholder,
	name,
	handleChange,
	label,
	type = 'text',
}) => {
	const { errors, formData } = useContext(FormContext);
	return (
		<div className='relative flex flex-col gap-1.5 '>
			<span className={`label-mobile ${errors[name] && 'text-error-red'}`}>
				{label}
			</span>
			<input
				name={name}
				type={type}
				value={formData[name]}
				placeholder={placeholder}
				onChange={handleChange}
				className={`${
					errors[name]
						? 'border-2 border-error-red focus:border-error-red hover:border-error-red '
						: 'border-gray-dark hover:border-orange-dark focus:border-orange-dark'
				} h-[56px] transition-colors duration-300 w-full rounded-md input-mobile px-5 border   focus:outline-none `}
				required
			/>
			{errors[name] && (
				<div className=' absolute top-[-5px] right-0'>
					<span className='text-error-red label-mobile font-manrope-medium'>
						Wrong format
					</span>{' '}
				</div>
			)}
		</div>
	);
};

export default TextInput;
