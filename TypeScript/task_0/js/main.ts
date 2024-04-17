interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

let student1: Student = {
    firstName: 'Alice',
    lastName: 'Durand',
    age: 22,
    location: 'Paris'
};

let student2: Student = {
    firstName: 'Bob',
    lastName: 'Lefebvre',
    age: 24,
    location: 'Lyon'
};

let studentsList: Array<Student> = [student1, student2];


function displayStudentsTable(students: Array<Student>) {
    // Création de la table
    const table = document.createElement('table');
    // Création de l'entête de la table
    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    let headerCell1 = headerRow.insertCell(0);
    let headerCell2 = headerRow.insertCell(1);
    headerCell1.textContent = 'Prénom';
    headerCell2.textContent = 'Localisation';

    // Parcours la liste
    students.forEach(student => {
        const row = table.insertRow();
        const firstNameCell = row.insertCell(0);
        const locationCell = row.insertCell(1);
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
    });

    // Ajout de la table au DOM
    document.body.appendChild(table);
}

displayStudentsTable(studentsList);
