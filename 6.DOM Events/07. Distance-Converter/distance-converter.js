document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputDistance = document.getElementById('inputDistance');
    const inputUnits = document.getElementById('inputUnits');
    const outputUnits = document.getElementById('outputUnits');
    const outputDistance = document.getElementById('outputDistance');
    const convertButton = document.getElementById('convert');
  
    const conversionRates = {
      km: 1000,
      m: 1,
      cm: 0.01,
      mm: 0.001,
      mi: 1609.34,
      yrd: 0.9144,
      ft: 0.3048,
      in: 0.0254,
    };
  
    convertButton.addEventListener('click', () => {
      const inputValue = parseFloat(inputDistance.value);
      const fromUnit = inputUnits.value;
      const toUnit = outputUnits.value;
  
      if (isNaN(inputValue)) {
        outputDistance.value = 'Невалидна стойност';
        return;
      }
  
      const meters = inputValue * conversionRates[fromUnit];
      const result = meters / conversionRates[toUnit];
  
      outputDistance.value = result;
    });
  }