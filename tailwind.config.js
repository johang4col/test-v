module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#FFFFFF',
			black: '#000000',
			blue: {
				't-900': '#e6edf1',
				't-800': '#cddae3',
				't-700': '#b3c8d5',
				't-600': '#9ab5c7',
				't-500': '#81a3b9',
				't-400': '#6890ab',
				't-300': '#4f7e9d',
				't-200': '#356b8f',
				't-100': '#1c5981',
				DEFAULT: '#034673',
				's-100': '#033F68',
				's-200': '#02385c',
				's-300': '#023151',
				's-400': '#022a45',
				's-500': '#02233a',
				's-600': '#011c2e',
				's-700': '#011522',
				's-800': '#010e17',
				's-900': '#00070b',
			},
			orange: {
				't-900': '#fef1e9',
				't-800': '#fde2d3',
				't-700': '#fbd4be',
				't-600': '#fac5a8',
				't-500': '#f9b792',
				't-400': '#f8a87c',
				't-300': '#f79a66',
				't-200': '#f58b51',
				't-100': '#f47d3b',
				DEFAULT: '#f36e25',
				's-100': '#db6321',
				's-200': '#c2581e',
				's-300': '#aa4d1a',
				's-400': '#924216',
				's-500': '#7a3713',
				's-600': '#612c0f',
				's-700': '#49210b',
				's-800': '#311607',
				's-900': '#180b04',
			},
			charcoal: {
				't-900': '#eeeeef',
				't-800': '#dedede',
				't-700': '#cdcdce',
				't-600': '#bcbdbd',
				't-500': '#acacad',
				't-400': '#9b9b9d',
				't-300': '#8a8b8c',
				't-200': '#797a7c',
				't-100': '#696a6b',
				DEFAULT: '#58595b',
				's-100': '#4f5052',
				's-200': '#464749',
				's-300': '#3e3e40',
				's-400': '#353537',
				's-500': '#2c2d2e',
				's-600': '#232424',
				's-700': '#1a1b1b',
				's-800': '#121212',
				's-900': '#090909',
			},
			ruby: {
				't-900': '#fae9e9',
				't-800': '#f4d2d3',
				't-700': '#efbcbe',
				't-600': '#e9a5a8',
				't-500': '#e48f92',
				't-400': '#de787c',
				't-300': '#d96266',
				't-200': '#d34b51',
				't-100': '#ce353b',
				DEFAULT: '#c81e25',
				's-100': '#b41b21',
				's-200': '#a0181e',
				's-300': '#8c151a',
				's-400': '#781216',
				's-500': '#640f13',
				's-600': '#500c0f',
				's-700': '#3c090b',
				's-800': '#280607',
				's-900': '#140304',
			},
			amber: {
				't-900': '#fef6e7',
				't-800': '#fcedcf',
				't-700': '#fbe3b6',
				't-600': '#f9da9e',
				't-500': '#f8d186',
				't-400': '#f6c86e',
				't-300': '#f5bf56',
				't-200': '#f3b53d',
				't-100': '#f2ac25',
				DEFAULT: '#f0a30d',
				's-100': '#d8930c',
				's-200': '#c0820a',
				's-300': '#a87209',
				's-400': '#906208',
				's-500': '#785207',
				's-600': '#604105',
				's-700': '#483104',
				's-800': '#302103',
				's-900': '#181001',
			},
			rose: {
				't-900': '#f6edf6',
				't-800': '#ecdaec',
				't-700': '#e3c8e3',
				't-600': '#d9b5d9',
				't-500': '#d0a3d0',
				't-400': '#c690c6',
				't-300': '#bd7ebd',
				't-200': '#b36bb3',
				't-100': '#aa59aa',
				DEFAULT: '#a046a0',
				's-100': '#903f90',
				's-200': '#803880',
				's-300': '#703170',
				's-400': '#602a60',
				's-500': '#502350',
				's-600': '#401c40',
				's-700': '#301530',
				's-800': '#200e20',
				's-900': '#100710',
			},
			amethyst: {
				't-900': '#efe6ee',
				't-800': '#e0ccde',
				't-700': '#d0b3cd',
				't-600': '#c199bd',
				't-500': '#b180ac',
				't-400': '#a1669b',
				't-300': '#924d8b',
				't-200': '#82337a',
				't-100': '#731a6a',
				DEFAULT: '#630059',
				's-100': '#590050',
				's-200': '#4f0047',
				's-300': '#45003e',
				's-400': '#3b0035',
				's-500': '#32002d',
				's-600': '#280024',
				's-700': '#1e001b',
				's-800': '#140012',
				's-900': '#0a0009',
			},
			sapphire: {
				't-900': '#ecebf4',
				't-800': '#d8d6e8',
				't-700': '#c5c2dd',
				't-600': '#b1add1',
				't-500': '#9e99c6',
				't-400': '#8a84ba',
				't-300': '#7770af',
				't-200': '#635ba3',
				't-100': '#504798',
				DEFAULT: '#3c328c',
				's-100': '#362d7e',
				's-200': '#302870',
				's-300': '#2a2362',
				's-400': '#241e54',
				's-500': '#1e1946',
				's-600': '#181438',
				's-700': '#120f2a',
				's-800': '#0c0a1c',
				's-900': '#06050e',
			},
			turquoise: {
				't-900': '#e6f3f5',
				't-800': '#cce7ea',
				't-700': '#b3dbe0',
				't-600': '#99cfd5',
				't-500': '#80c3cb',
				't-400': '#66b7c0',
				't-300': '#4dabb6',
				't-200': '#339fab',
				't-100': '#1a93a1',
				DEFAULT: '#008796',
				's-100': '#007a87',
				's-200': '#006c78',
				's-300': '#005f69',
				's-400': '#00515a',
				's-500': '#00444b',
				's-600': '#00363c',
				's-700': '#00282d',
				's-800': '#001b1e',
				's-900': '#000d0f',
			},
			lapiz: {
				't-900': '#eae6f0',
				't-800': '#d4cce0',
				't-700': '#bfb3d1',
				't-600': '#a999c1',
				't-500': '#9480b2',
				't-400': '#7f66a2',
				't-300': '#694d93',
				't-200': '#543383',
				't-100': '#3e1a74',
				DEFAULT: '#290064',
				's-100': '#25005a',
				's-200': '#210050',
				's-300': '#1d0046',
				's-400': '#19003c',
				's-500': '#150032',
				's-600': '#100028',
				's-700': '#0c001e',
				's-800': '#080014',
				's-900': '#04000a',
			},
			peridot: {
				't-900': '#f4fbf0',
				't-800': '#e8f6e0',
				't-700': '#ddf2d1',
				't-600': '#d1edc1',
				't-500': '#c6e9b2',
				't-400': '#bae4a2',
				't-300': '#afe093',
				't-200': '#a3db83',
				't-100': '#98d774',
				DEFAULT: '#8cd264',
				's-100': '#7ebd5a',
				's-200': '#70a850',
				's-300': '#629346',
				's-400': '#547e3c',
				's-500': '#466932',
				's-600': '#385428',
				's-700': '#2a3f1e',
				's-800': '#1c2a14',
				's-900': '#0e150a',
			},
			jade: {
				't-900': '#e7efed',
				't-800': '#d0e0db',
				't-700': '#b8d0ca',
				't-600': '#a0c1b8',
				't-500': '#89b1a6',
				't-400': '#71a194',
				't-300': '#599282',
				't-200': '#418271',
				't-100': '#2a735f',
				DEFAULT: '#12634d',
				's-100': '#105945',
				's-200': '#0e4f3e',
				's-300': '#0d4536',
				's-400': '#0b3b2e',
				's-500': '#093227',
				's-600': '#07281f',
				's-700': '#051e17',
				's-800': '#04140f',
				's-900': '#020a08',
			},
			gold: {
				DEFAULT: '#F7FF00D9',
			},
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		// eslint-disable-next-line global-require
		require('@tailwindcss/forms'),
	],
};
