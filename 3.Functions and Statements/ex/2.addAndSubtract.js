function solve(a,b,c){

    console.log(subtracts(sumTwoNumbers(a , b),c));
 
    function sumTwoNumbers(x,y){
        return x + y;
    }

    function subtracts(p,q){
        return p - q;
    }
}




solve(23,6,10);
solve(1,17,30);
solve(42,58,100);