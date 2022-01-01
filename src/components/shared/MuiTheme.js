import { createTheme } from '@material-ui/core';

const colors = {
	gold: {
		light: '#DFC780',
		medium: '#DAB55D',
		dark: '#B69037',
		veryDark: '#AA8733',
	},
	grey: {
		medium: '#B3B3B3',
	},
};

// BASED ON LIGHT GREY TEXT COLOR (#B3B3B3)
// #B3B3B3,#999999,#7F7F7F,#666666,#4C4C4C,#333333,#191919
// const greyShades = {
// 	100: '#B3B3B3',
// 	200: '#999999',
// 	300: '#7F7F7F',
// 	400: '#666666',
// 	500: '#4C4C4C',
// 	600: '#333333',
// 	700: '#191919',
// };

// Main Button BG => #333333
// Main Text Color => #B3B3B3
// FROM WEBSITE INSPIRATION:
// Blue:   #4CA8C2
// Green:  #8ACF91
// Yellow: #C0B293

const Theme = createTheme({
	root: {},
	palette: {
		primary: {
			main: '#DAB55D',
		},
		secondary: {
			main: '',
		},
	},
});

export default Theme;
