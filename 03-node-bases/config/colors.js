const colors = require('colors');

colors.setTheme({
	headerNumber: ['bgWhite', 'magenta'],
	headerTitle: ['bgYellow', 'bold'],
	headerLines: 'rainbow',
	number: 'yellow',
	result: ['magenta', 'bgWhite', 'bold'],
	crux: ['blue', 'bold'],
	file: ['rainbow', 'bold'],
	success: 'blue',
	error: 'red'
});

module.exports = colors;


