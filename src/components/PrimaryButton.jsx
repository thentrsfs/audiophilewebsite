const PrimaryButton = ({ handleClick, style, text }) => {
	return (
		<button
			className={`${style} transition-colors duration-300 border subtitle cursor-pointer z-19	`}
			onClick={handleClick}>
			{text}
		</button>
	);
};

export default PrimaryButton;
