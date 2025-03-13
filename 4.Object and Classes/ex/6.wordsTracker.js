function wordsFunc(array){

    let searchedWords = array[0].split(' ');
    let targetWords = array.splice(1, array.length - 1);
    let wordObj = {};
 
    for (let word of searchedWords) {
        wordObj[word] = 0;
 
        for (let element of targetWords) {
            if (element === word) {
                wordObj[word] += 1;
            }
        }
    }
 
    let sortedEntries = Object.entries(wordObj).sort((a, b) => b[1] - a[1])
 
    for (let entry of sortedEntries) {
        console.log(`${entry[0]} - ${entry[1]}`)
    }

}

wordsFunc([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']);

wordsFunc([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence', 
    'because', 'this', 'is', 'your', 'task' ]);