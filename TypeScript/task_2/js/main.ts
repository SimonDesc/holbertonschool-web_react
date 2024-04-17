interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTask(): string;
}

class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home'
	}
	getCoffeeBreak(): string {
		return 'Getting a coffee break'
	}
	workDirectorTasks(): string {
		return 'Getting to director tasks'
	}
}

class Teacher implements TeacherInterface {
	workFromHome(): string {
		return 'Cannot work from home'
	}
	getCoffeeBreak(): string {
		return 'Cannot have a break'
	}
	workTeacherTask(): string {
		return 'Getting to work'
	}
}


function createEmployee(salary: number): DirectorInterface | TeacherInterface {
	if (salary < 500) {
		return new Teacher();
	}
	else {
		return new Director();
	}
}

function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
	return employee instanceof Director;
}

function executeWork(employee: DirectorInterface | TeacherInterface) {
	if (employee instanceof Director) {
		console.log(employee.workDirectorTasks());
	}
	else if (employee instanceof Teacher) {
		console.log(employee.workTeacherTask());
	}
}


executeWork(createEmployee(200));
executeWork(createEmployee(1000));


type Subjects = "Math" | "History";

function teachClass(todayClass: string): string {
	if (todayClass === "Math") {
		console.log("Teaching Math");
		return "Teaching Math"
	}
	else if (todayClass === "History") {
		console.log("Teaching History");
		return "Teching History"
	}
}


teachClass('Math');
teachClass('History');
