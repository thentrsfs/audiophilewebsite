import { useEffect, useState } from 'react';
const PatternCircles = () => {
	// Get the width of the window
	const [width, setWidth] = useState(window.innerWidth);

	// Add an event listener to update the width when the window is resized
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<svg
			width='944'
			height='944'
			xmlns='http://www.w3.org/2000/svg'
			className='absolute top-[-53%] z-19 lg:left-[-12%] 2xl:left-[-1%] lg:top-[0]'>
			<g
				stroke='#FFF'
				fill='none'
				fillRule='evenodd'
				opacity='.202'>
				<circle
					cx='472'
					cy='472'
					r={width < 768 ? '155.5' : width > 1024 ? '265.5' : '250.5'}
				/>
				<circle
					cx='472'
					cy='472'
					r={width < 768 ? '180.5' : width > 1024 ? '300.5' : '285.5'}
				/>
				<circle
					cx='472'
					cy='472'
					r={width < 768 ? '281' : width > 1024 ? '470.5' : '400.5'}
				/>
			</g>
		</svg>
	);
};

export default PatternCircles;
