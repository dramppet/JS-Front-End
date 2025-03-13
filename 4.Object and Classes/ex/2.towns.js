function towns(input) {
    for (let row of input) {
        let [town, lat, lon] = row.split(' | ');
        
        let townObj = {
            town: town,
            latitude: Number(lat).toFixed(2),
            longitude: Number(lon).toFixed(2)
        };
        
        console.log(townObj);
    }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
towns([['Plovdiv | 136.45 | 812.575']]);