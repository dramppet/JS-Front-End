function solve(order,count){
    let single_order = 0;
    if(order == 'coffee'){
        single_order = 1.5;
    }else if(order == 'water'){
        single_order = 1.0;
    }else if(order == 'coke'){
        single_order = 1.4;
    }else{
        single_order = 2;
    }
    console.log((single_order * count).toFixed(2));
}

solve("water",5);
solve("coffee", 2);