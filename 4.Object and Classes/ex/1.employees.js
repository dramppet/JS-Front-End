function employee (names){

    let result = {}
   
    for(let name of names){
        result[name] = name.length;
    }

    for(let name in result){
        console.log(`Name: ${name} -- Personal Number: ${result[name]}`)
    }
}

employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])

