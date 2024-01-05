import { students } from '../data/students.js';

document.getElementById('btnShowLowScores').addEventListener('click', () => {
    const pointsEls = document.querySelectorAll(
        '#tblStudents tbody tr td:last-child'
    );
    pointsEls.forEach((pointEl, index) => {
        const point = pointEl.innerText;
        if (point < 50) {
            document
                .querySelector(`#tblStudents tbody tr:nth-child(${index + 1})`)
                .classList.add('table-danger');
        }
    });
});

const loadStudents = () => {
    let strStudentRows = '';
    students.forEach((student, index) => {
        strStudentRows += ` <tr>
        <th scope="row">${index + 1}</th>
        <td>${student.name}</td>
        <td>${student.point}</td>
    </tr>`;
    });

    document.querySelector('#tblStudents tbody').innerHTML = strStudentRows;
};

loadStudents();
