function solve(word, text){

    let textArr = text.split(' ');
    let flag = true;
    
    for(let i = 0; i < textArr.length; i++){
        if(textArr[i].toUpperCase() == word.toUpperCase()){
            flag = false;
            console.log(word);
            break
        }
    }

    if(flag){
        console.log(`${word} not found!`)
    }
}

solve('javascript',
'JavaScript is the best programming language');

solve('python',
'JavaScript is the best programming language');