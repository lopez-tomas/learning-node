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

const getEmployee = ( id ) => {

		return new Promise(( resolve, reject ) => {
			
			const employee = employees.find( (e) => e.id === id )?.name;

			( employee ) 
				? resolve( employee )
				: reject(`There is no employee with ID: ${ id }`)
	});
}

const getSalary = ( id ) => {

	return new Promise(( resolve, reject ) => {
		const salary = salaries.find( (s) => s.id === id )?.salary;

		( salary )
			? resolve( salary )
			: reject(`There is no salary for employee with ID: ${ id }`)
	});
}

const id = 1;

//getEmployee(id)
	//.then( employee => console.log( employee ) )
	//.catch( err => console.log( err ) )

//getSalary(id)
	//.then( salary => console.log( salary ) )
	//.catch( err => console.log( err ) )

getEmployee( id )
	.then( employee => {
		getSalary( id )
			.then( salary => {
				console.log(`Employee(ID: ${id}) ${ employee } has a salary of: $ ${ salary }.`);
			})
			.catch( err => console.log( err ) )
	})
	.catch( err => console.log( err ) )

// In this way, the code is difficult to maintain.
// We must use Promise Chaining to manage these errors and make everything easier
