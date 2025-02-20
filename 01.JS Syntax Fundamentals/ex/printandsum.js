function solve(min,max){

    sum_digits = 0
    output =''

    for(let i = min; i <= max; i++){
        sum_digits += i;
        output += i +' '
    }
    console.log(output.trim())
    console.log(`Sum: ${sum_digits}`)
}

solve(5,10);
solve(0,26);
solve(50,60);

