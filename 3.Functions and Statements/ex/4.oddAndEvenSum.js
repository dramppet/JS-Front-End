function solve(nums){

    let numsStr = nums.toString().split('');

    let sumEven = 0;
    let sumOdd = 0;

    for(let i = 0; i < numsStr.length; i++){
        let num = Number(numsStr[i]);
        if(num % 2 == 0){
            sumEven += num;
        }else{
            sumOdd += num;
        }
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
}

solve(1000435);
solve(3495892137259234);