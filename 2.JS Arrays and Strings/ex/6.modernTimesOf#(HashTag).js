function solve(input){

    let words = input.split(' ');
    const validHashtags = words
        .filter(word => word.startsWith('#') && /^#[a-zA-Z]+$/.test(word))
        .map(word => word.substring(1));
    
    console.log(validHashtags.join('\n'));

}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');