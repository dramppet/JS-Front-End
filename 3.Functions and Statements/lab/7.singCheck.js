function solve(...params){

    let paramsStr = params.join();

    if((paramsStr.match(/-/g)?.length || 0) % 2 == 0){
        console.log('Positive');
    }else {
        console.log('Negative');
    }

}

solve(5,12,-15);
solve(-6,-12,14);
solve(-1, -2, -3);
solve(-5,1,1);