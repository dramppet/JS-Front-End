function matrix(n) {
    let row = Array(n).fill(n).join(' '); 

    for (let i = 0; i < n; i++) {
        console.log(row);
    }
}

matrix(3);
matrix(7);