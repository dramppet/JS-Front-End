    class Vehicle{
       type;
       model;
       parts = {};
       fuel;

       constructor(type,model,parts,fuel){
            this.type = type;
            this.model = model;
            this.parts.engine = parts.engine;
            this.parts.power = parts.power;
            this.parts.quality = parts.engine * parts.power;
            this.fuel = fuel;
       }
       drive(fuelSpend){
        this.fuel -= fuelSpend;
       }
    }


let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

let parts2 = { engine: 9, power: 500 };
let vehicle2 = new Vehicle('l', 'k', parts, 840);
vehicle.drive(20); console.log(vehicle.fuel);