function solve(number){

    let numStr = number.toString();
    let sum = 0;

    for(let digit of numStr){
        sum += Number(digit)
    }

    console.log(sum);

}

solve(245678)
solve(97561)
solve(543)