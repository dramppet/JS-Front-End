function solve() {
    let data = document.querySelector('#inputs textarea').value;
    let dataArr = JSON.parse(data);
    let restaurantMap = new Map();
 
    for (let element of dataArr) {
        let [restaurant, workers] = element.split(' - ');
 
        if (!restaurantMap.has(restaurant)) {
            restaurantMap.set(restaurant, []);
        }
 
        let workerArr = workers.split(', ');
 
        for (let worker of workerArr) {
            let [name, wage] = worker.split(' ');
            restaurantMap.get(restaurant).push({ name, wage: Number(wage) });
        }
    }
 
    let bestRestaurantEntry = [...restaurantMap.entries()]
        .map(([name, workers]) => {
            let avgSalary = workers.reduce((acc, curr) => acc + curr.wage, 0) / workers.length;
            let bestSalary = Math.max(...workers.map(w => w.wage));
            return { name, avgSalary, bestSalary, workers };
        })
        .sort((a, b) => b.avgSalary - a.avgSalary)[0];
 
    bestRestaurantEntry.workers.sort((a, b) => b.wage - a.wage);
 
    document.querySelector('#bestRestaurant p').textContent =
        `Name: ${bestRestaurantEntry.name} Average Salary: ${bestRestaurantEntry.avgSalary.toFixed(2)} Best Salary: ${bestRestaurantEntry.bestSalary.toFixed(2)}`;
 
    document.querySelector('#workers p').textContent =
        bestRestaurantEntry.workers.map(w => `Name: ${w.name} With Salary: ${w.wage}`).join(' ');
}