function students () {
    let submitBtn = document.getElementById('submit');
    let baseUrl = `http://localhost:3030/jsonstore/collections/students`;
    let tableBody = document.querySelector('#results tbody');
 
    submitBtn.addEventListener('click', function (e) {
        e.preventDefault;
        addStudent();
    })
 
    loadStudents();
    
    async function addStudent () {
        let firstName = document.getElementsByName('firstName')[0].value;
        let lastName = document.getElementsByName('lastName')[0].value;
        let facultyNumber = document.getElementsByName('facultyNumber')[0].value;
        let grade = document.getElementsByName('grade')[0].value;
 
        let newStudent = {
            firstName: firstName,
            lastName: lastName,
            facultyNumber: facultyNumber,
            grade: grade,
        }
 
        if (!firstName || !lastName || !facultyNumber || !grade) {
            return;
        }
 
        try {
            await fetch (baseUrl, {
                method: 'post',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(newStudent),
        })
 
        loadStudents();
 
        } catch (error) {
            console.error(error);
        }
    }
 
    async function loadStudents () {
        try {
            let response = await fetch(baseUrl);
            let studentData = await response.json();
 
            let students = Object.values(studentData);
 
            for (let student of students) {
                let newRow = document.createElement('tr');
                
                let firstNameCell = document.createElement('td');
                firstNameCell.textContent = student.firstName;
                newRow.appendChild(firstNameCell);
 
                let lastNameCell = document.createElement('td');
                lastNameCell.textContent = student.lastName;
                newRow.appendChild(lastNameCell);
                
                let facultyNumberCell = document.createElement('td');
                facultyNumberCell.textContent = student.facultyNumber;
                newRow.appendChild(facultyNumberCell);
 
                let gradeCell = document.createElement('td');
                gradeCell.textContent = student.grade;
                newRow.appendChild(gradeCell);
 
                tableBody.appendChild(newRow);
            }
 
        } catch (error) {
            console.error(error);
        }
 
    }
}
 
students();