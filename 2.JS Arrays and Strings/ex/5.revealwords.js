function solve(wordsString, text){
    let wordArr =wordsString.split(', ');
    for(let word of wordArr ){
        text = text.replace('*'.repeat(word.length),word);
    }

    console.log(text);
}

solve('great',
    'softuni is ***** place for learning new programming languages');
solve('great, learning',
    'softuni is ***** place for ******** new programming languages')