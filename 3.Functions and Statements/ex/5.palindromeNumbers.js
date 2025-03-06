function palindrome(numArray){

    for (let num of numArray) {
        let numString = num.toString();
        let reverseString = numString.split('').reverse().join('');
        console.log(numString === reverseString)
    }
}

palindrome([123,323,421,121]);
palindrome([32,2,232,1010]);