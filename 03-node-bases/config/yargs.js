const argv = require('yargs')
								.options({
									'b': {
										alias: 'base',
										type: 'number',
										demandOption: true,
										describe: 'To establish the base.'
									},
									'l': {
										alias: 'limit',
										type: 'number',
										demandOption: true,
										describe: 'To establish the limit.'
									},
									's': {
										alias: 'show',
										type: 'boolean',
										default: false,
										describe: 'Prints on console the corresponding multiplication table.'
									}
								})								
								.check( (argv, options) => {
									if( isNaN( argv.b )) {
										throw 'The base must be a number.'
									}
									if( isNaN( argv.l )) {
										throw 'The limit must be a number.'
									}
									return true;
								})
								.argv;

module.exports = argv;
