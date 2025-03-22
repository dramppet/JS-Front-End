function makeDictionary(input) {
    let dictionary = {};

    for (let jsonString of input) {
        let obj = JSON.parse(jsonString);
        let term = Object.keys(obj)[0];
        let definition = obj[term];
        dictionary[term] = definition;
    }

    let sortedTerms = Object.keys(dictionary).sort();
    for (let term of sortedTerms) {
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
    }
}

makeDictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for afare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])