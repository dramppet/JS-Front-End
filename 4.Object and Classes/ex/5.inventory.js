function inventoryFunc(data) {

    let registry = [];

    for (let row of data) {
        let [name, level, items] = row.split(' / ');

        level = Number(level);

        let hero = {
            name,
            level, items
        };
        registry.push(hero);
    }

    registry.sort(compareLevels);


    for (let hero of registry) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }


    function compareLevels(a, b) {
        return a.level - b.level;
    }
}

inventoryFunc([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);