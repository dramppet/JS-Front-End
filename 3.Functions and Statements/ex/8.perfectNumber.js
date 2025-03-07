function perfetNumber(num){

    let divisor = [1];

    for(let i = 2; i < num; i++){
        if(num % i == 0){
            divisor.push(i);
        }
    }

    let sum = 0;
    for(let n of divisor){
        sum += n;
    }

    if(sum == num){
        console.log('We have a perfect number!');
    }else{
        console.log("It's not so perfect.");
    }

}

perfetNumber(6);
perfetNumber(28);
perfetNumber(12346498);