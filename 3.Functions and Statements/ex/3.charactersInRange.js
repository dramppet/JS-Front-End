function charRange(chrA, chrB){
    let code1 = chrA.charCodeAt(0);
    let code2 = chrB.charCodeAt(0);
    
    let result = [];
    for(let i = Math.min(code1,code2) + 1; i < Math.max(code1,code2); i++){
        result.push(String.fromCharCode(i))
    }

    console.log(result.join(' '));
}

charRange('a','d');
charRange('#',':');
charRange('C','#');