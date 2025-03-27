function solve() {
    let sected = new Map();
    let headers = document.querySelectorAll('thead [type="checkbox"]');

    for (let i = 0; i< headers.length; i++){
        if(headers[i].checked){
            sected.set(i, headers[i].name);
        }
    }

    let rows = document.querySelectorAll('tbody tr');

    let result = [];

    for(let row of rows){
        let record = {}
        for(let i =0; i < row.children.length; i++){
            if(sected.has(i)){
                let popName = sected.get(i);
                let col = row.children[i];

                record[popName] = col.textContent;
            }
        }
        result.push(record);
    }
    let output = document.getElementById('output');
    output.value = JSON.stringify(result);
}