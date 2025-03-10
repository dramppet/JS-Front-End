function factorial(p,q){

    let result = 1;
    if(p > q){
        for(let n = p; n > q; n --){
            result *= n;
        }
    }else{
        for(let n = q; n > p; n--){
            result /= n;
        }
    }

    console.log(result.toFixed(2));

}

factorial(5,2);
factorial(6,2);
factorial(3,4);