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

            //closest
            //pointEl.closest("tr")
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
        <td><button class="btn btn-warning btn-sm btn-delete">❌</button></td>
    </tr>`;
    });

    document.querySelector('#tblStudents tbody').innerHTML = strStudentRows;
};

const createEventsForDeleteButtons = () => {
    document.querySelectorAll('.btn-delete').forEach((btnDel) => {
        btnDel.addEventListener('click', (e) => {
            e.stopPropagation(); //olayin parent lara aktarilmasini engeller
            const name = e.target.closest('tr').querySelector('td').innerHTML;
            const result = confirm(`Are you sure you want to delete ${name}?`);
            if (result) {
                //delete operation
            }
        });
    });
};

const createEventsForTBodyRows = () => {
    document.querySelectorAll('#tblStudents tbody tr').forEach((row) => {
        row.addEventListener('click', (e) => {
            e.target.closest('tr').classList.toggle('table-danger');
        });
    });
};

loadStudents();
createEventsForDeleteButtons();
createEventsForTBodyRows();
