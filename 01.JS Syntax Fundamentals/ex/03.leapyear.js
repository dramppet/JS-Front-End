function solve(year){

    let output = ''

    if  ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        output = 'yes';
    }else{
        output = 'no';
    }

    return console.log(output)
}

solve(1984)
solve(2003)
solve(4)