export interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
}

const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
};
console.log(teacher3);

interface Directors extends Teacher {
	numberOfReports: number;
}

const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
  };
  console.log(director1);


interface teacherPrint {
	(firstName: string, lastName: string): string;
}

let printTeacher: teacherPrint;

printTeacher = function (firstName: string, lastName: string): string {
	let result = firstName[0] + '. ' + lastName;
	return result;
}


console.log(printTeacher("John", "Doe"));


interface StudentClassConstructor {
	new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}

const Student: StudentClassConstructor = class StudentClass implements StudentClassInterface {
	private firstName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
	};

	workOnHomework(): string {
		return "Currently working"
	}
	displayName(): string {
		return this.firstName;
	}
}


const student1 = new Student("toto", "tata");
console.log(student1.workOnHomework(), student1.displayName());
