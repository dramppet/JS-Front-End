function picccolo(commands){
    let parking = new Set();

    for(let row of commands){
        let [comand, id] = row.split(', ');

        if(comand == 'IN'){
            parking.add(id);
        }else if(comand == 'OUT'){
            parking.delete(id);
        }
    }

    if(parking.size){
        console.log(Array.from(parking).sort().join('\n'));
    }else{
        console.log('Parking Lot is Empty');
    }

}

picccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);

picccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI', 
    'IN, CA9876HH', 
    'IN, CA2822UU'])