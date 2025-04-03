document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const sizeSelect = document.getElementById('size');
    const form = document.getElementById('solutionCheck');
    const checkMessage = document.getElementById('check');
    const table = form.querySelector('table');
    const quickCheckButton = form.querySelector('input[type="submit"]');
    const clearButton = form.querySelector('input[type="reset"]');

    quickCheckButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        const values = [];
        for (let row of table.rows) {
            const rowValues = [];
            for (let cell of row.cells) {
                const input = cell.querySelector('input');
                rowValues.push(parseInt(input.value, 10));
            }
            values.push(rowValues);
        }

        if (isValidSudoku(values)) {
            table.style.border = "2px solid green";
            checkMessage.textContent = "Success!";
        } else {
            table.style.border = "2px solid red";
            checkMessage.textContent = "Keep trying...";
        }
    });

    clearButton.addEventListener('click', function () {
        // Clear all inputs
        const inputs = form.querySelectorAll('input[type="number"]');
        inputs.forEach(input => input.value = '');

        checkMessage.textContent = '';

        table.style.border = "";
    });

    function isValidSudoku(board) {
        for (let i = 0; i < board.length; i++) {
            if (!isValidUnit(board[i])) return false; // Check row
            let column = [];
            for (let j = 0; j < board[i].length; j++) {
                column.push(board[j][i]);
            }
            if (!isValidUnit(column)) return false; // Check column
        }
        return true;
    }

    function isValidUnit(unit) {
        const seen = new Set();
        for (let num of unit) {
            if (num < 1 || num > 3 || seen.has(num)) {
                return false;
            }
            seen.add(num);
        }
        return true;
    }
}