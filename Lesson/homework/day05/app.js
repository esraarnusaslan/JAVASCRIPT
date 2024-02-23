const txtName = document.getElementById('txtName');
const txtPoint = document.getElementById('txtPoint');
const btnAdd = document.getElementById('btnAdd');
const tblListBody = document.querySelector('#tblList tbody');
const tblListFooter = document.querySelector('#tblList tfoot');
const tblListFooterEmptyRow = document.querySelector(
    '#tblList tfoot .empty-row'
);
const tblListFooterSummaryRow = document.querySelector(
    '#tblList tfoot .summary'
);

btnAdd.addEventListener('click', () => {
    const name = txtName.value;
    const point = txtPoint.value;
    if (
        !name ||
        (!point && point == 0) ||
        isNaN(point) ||
        point < 0 ||
        point > 100
    )
        return;

    const row = getNewRow(name, point);
    tblListBody.prepend(row);
    updateTableRowIndexes();
    updateAverage();
    setFooter();
    resetForm();
});

const getNewRow = (name, point) => {
    const row = document.createElement('tr');
    row.innerHTML = getRowHtml(name, point);
    attachDeleteEventListener(row);
    attachEditEventListener(row);
    attachCancelEventListener(row);
    attachUpdateEventListener(row);
    return row;
};

const getRowHtml = (name, point) => {
    return ` 
    <tr>
    <td>#</td>
    <td>${name}</td>
    <td class="text-end">${point}</td>
    <td>


    <span class="btn-group-primary">
    <button class="btn btn-link btn-del"><i class="fa-solid fa-trash"></i></button>
    <button class="btn btn-link btn-edit"><i class="fa-solid fa-edit"></i></button>
    </span>

    <span class="btn-group-secondary d-none">
    <button class="btn btn-link btn-update"><i class="fa-solid fa-check"></i></button>
    <button class="btn btn-link btn-cancel"><i class="fa-solid fa-times"></i></button>
    </span>

    </td>
    </tr>
    
    `;
};

const updateTableRowIndexes = () => {
    tblListBody
        .querySelectorAll('tr td:first-child')
        .forEach((col, i) => (col.innerHTML = i + 1));
};

const updateAverage = () => {
    const pointEls = Array.from(
        tblListBody.querySelectorAll('tr td:nth-child(3)')
    );

    const total = pointEls
        .map((item) => item.innerText)
        .reduce((total, point) => total + Number(point), 0);

    const avg = (total / pointEls.length).toFixed(2);
    tblListFooter.querySelector('#lblAverage').innerHTML = avg;
};

const setFooter = () => {
    const isTableEmpty =
        tblListBody.querySelectorAll('tr').length > 0 ? false : true;

    if (isTableEmpty) {
        tblListFooterEmptyRow.classList.remove('d-none');
        tblListFooterSummaryRow.classList.add('d-none');
    } else {
        tblListFooterEmptyRow.classList.add('d-none');
        tblListFooterSummaryRow.classList.remove('d-none');
    }
};

const resetForm = () => {
    txtName.value = '';
    txtPoint.value = '';
    txtName.focus();
};

const resetTableRows = () => {
    tblListBody.querySelectorAll('tr').forEach((row) => {
        const elName = row.querySelector('td:nth-child(2)');
        const elPoint = row.querySelector('td:nth-child(3)');
        elName.contentEditable = false;
        elPoint.contentEditable = false;

        row.querySelector('.btn-group-primary').classList.remove('d-none');
        row.querySelector('.btn-group-secondary').classList.add('d-none');
        row.closest('tr').classList.remove('table-info');
    });
};

const attachDeleteEventListener = (row) => {
    row.querySelector('.btn-del').addEventListener('click', () => {
        const name = row.querySelector('td:nth-child(2)').innerText;
        const result = confirm(`Are you sure you want to delete ${name}?`);

        if (result) {
            row.remove();
            updateAverage();
            updateTableRowIndexes();
            setFooter();
        }
    });
};

const attachEditEventListener = (row) => {
    row.querySelector('.btn-edit').addEventListener('click', () => {
        resetTableRows();
        const elName = row.querySelector('td:nth-child(2)');
        const elPoint = row.querySelector('td:nth-child(3)');

        elName.contentEditable = true;
        elPoint.contentEditable = true;

        elName.focus();

        elName.dataset.name = elName.innerText;
        elPoint.dataset.point = elPoint.innerText;

        row.querySelector('.btn-group-primary').classList.toggle('d-none');
        row.querySelector('.btn-group-secondary').classList.toggle('d-none');
        row.closest('tr').classList.add('table-info');
    });
};

const attachCancelEventListener = (row) => {
    row.querySelector('.btn-cancel').addEventListener('click', () => {
        const elName = row.querySelector('td:nth-child(2)');
        const elPoint = row.querySelector('td:nth-child(3)');

        elName.contentEditable = false;
        elPoint.contentEditable = false;

        elName.innerText = elName.dataset.name;
        elPoint.innerText = elPoint.dataset.point;

        row.querySelector('.btn-group-primary').classList.remove('d-none');
        row.querySelector('.btn-group-secondary').classList.add('d-none');
        row.closest('tr').classList.remove('table-info');
    });
};

const attachUpdateEventListener = (row) => {
    row.querySelector('.btn-update').addEventListener('click', () => {
        const elName = row.querySelector('td:nth-child(2)');
        const elPoint = row.querySelector('td:nth-child(3)');

        const name = elName.innerText;
        const point = elPoint.innerText;

        if (
            !name ||
            (!point && point == 0) ||
            isNaN(point) ||
            point < 0 ||
            point > 100
        )
            return;

        elName.contentEditable = false;
        elPoint.contentEditable = false;

        elName.dataset.name = '';
        elPoint.dataset.point = '';

        row.querySelector('.btn-group-primary').classList.remove('d-none');
        row.querySelector('.btn-group-secondary').classList.add('d-none');
        row.closest('tr').classList.remove('table-info');

        updateAverage();
    });
};
