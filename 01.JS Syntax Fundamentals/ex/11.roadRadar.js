function solve(speed, area) {

    const speedLimits = {
      motorway: 130,
      interstate: 90,
      city: 50,
      residential: 20
    };
  
    const speedLimit = speedLimits[area];

  
    if (speed <= speedLimit) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
      const difference = speed - speedLimit;
      let status;
  
      if (difference <= 20) {
        status = "speeding";
      } else if (difference <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }
  
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    }
  }
  

solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')