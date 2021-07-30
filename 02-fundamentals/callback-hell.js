const employees = [
	{
		id: 1,
		name: 'Tomas',
	},
	{
		id: 2,
		name: 'Fernando',
	},
	{
		id: 3,
		name: 'Linda',
	},
];

const salaries = [
	{
		id: 1,
		salary: 1000,
	},
	{
		id: 2,
		salary: 1500,
	},
];

const getEmployee = ( id, callback ) => {
	const employee = employees.find( (e) => e.id === id );
	if ( employee ) {
		callback( null, employee.name); // it's the same that in line nro. 7
	} else {
		callback(`Employee with ID: ${ id } doesn't exist.`);
	}
};

const getSalary = ( id, callback ) => {
	const salary = salaries.find( (s) => s.id === id )?.salary; // it's like a ternary, no?
	if ( salary ) {
		callback( null, salary);
	} else {
		callback(`There is no salary for employee with ID: ${ id }.`);
	}
}

const id = 3;

getEmployee( id, ( err, employee ) => {
	if ( err ) {
		return console.log('ERROR 1:' + err);
	}

	getSalary( id, ( err, salary ) => { 
		if ( err ) {
			return console.log('ERROR 2: ' + err);
		}

		console.log('ID: ' + id + ' - Employee: ' + employee + ' - Salary: ' + salary);
	})
});
