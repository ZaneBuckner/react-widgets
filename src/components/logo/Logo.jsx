const colors = {
	light: '#DFC780',
	medium: '#DAB55D',
	dark: '#B69037',
	gradient: 'url(#goldGradient)',
};

function Logo({ height, strokeWidth }) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={height} height={height} fill='none' viewBox='0 0 104 104'>
			<linearGradient id='goldGradient' gradientTransform='rotate(90)'>
				<stop offset='0%' stopColor={colors.light} />
				<stop offset='100%' stopColor={colors.dark} />
			</linearGradient>
			<path stroke={colors.gradient} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth} d='M2 2l14.655 10.337 53.448 4.307L102 2H2z'></path>
			<path
				stroke={colors.gradient}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={strokeWidth}
				d='M70.103 16.644L102 2 27.862 85.557l42.242-68.913z'
			></path>
			<path
				stroke={colors.gradient}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={strokeWidth}
				d='M70.103 16.644L27.862 85.557 2 101.922l59.483-78.388 8.62-6.891zM87.345 91.587l-59.483-6.03L2 101.932h100L87.345 91.586z'
			></path>
			<path
				stroke={colors.gradient}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={strokeWidth}
				d='M27.862 85.557L102 2 48.12 75.22 27.863 85.557zM16.655 12.337L2 2v51.685l14.655-41.348zM87.345 91.662L102 102V50.315L87.345 91.662z'
			></path>
			<path
				stroke={colors.gradient}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={strokeWidth}
				d='M16.655 12.337L2 53.685l23.276-35.318-8.62-6.03z'
			></path>
			<path
				stroke={colors.gradient}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={strokeWidth}
				d='M16.655 12.338l8.621 6.03 36.207 5.168 8.62-6.891-53.448-4.307zM87.345 91.586L102 50.238l-21.552 30.15 6.897 11.198zM87.323 91.678l-6.875-11.29-32.327-5.161-20.259 10.33 59.461 6.12z'
			></path>
		</svg>
	);
}

export default Logo;
