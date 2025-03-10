function carWash(comands) {

    let cleans = 0

    comands.forEach(command => {
        switch (command) {
            case 'soap':
                cleans += 10;
                break;
            case 'water':
                cleans *= 1.2;
                break;
            case 'vacuum cleaner':
                cleans *= 1.25;
                break;
            case 'mud':
                cleans *= 0.9;
                break;
        }

    });
    console.log(`The car is ${cleans.toFixed(2)}% clean.`);

}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);