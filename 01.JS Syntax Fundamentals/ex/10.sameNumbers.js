function solve(numbers){

    let sum = 0;
    let same = true;

    let numberString = numbers.toString();
    let firstSymol = numberString[0];

    for (let char of numberString){

        sum += Number(char)

        if (char != firstSymol){
            same = false;   
        }
    }

    console.log(same)
    console.log(sum)
}

solve(2222222)
solve(1234)