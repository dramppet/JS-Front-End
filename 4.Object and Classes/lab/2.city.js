function city(city) {
    let data = Object.entries(city);

    for(let [key, value] of data){
        console.log(`${key} -> ${value}`)
    }
}

city({name:"Sofia", area:492, population:1238438, country:"Bulgaria", postCOde:"1000"});

city({name:"Plovdiv", area:389, population:1162358, country:"Bulgaria", postCode:"4000"});