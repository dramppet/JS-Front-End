function solve() {
  let textValue = document.getElementById('text').value;
  let textType = document.getElementById('naming-convention').value;
 
  let valueArray = textValue.toLowerCase().split(' ');
  let result = ''
 
  if (textType === 'Camel Case') {
    result = valueArray[0];
    for (let i = 1; i < valueArray.length; i++) {
      result += valueArray[i][0].toUpperCase() + valueArray[i].slice(1);
    }
  } else if (textType === 'Pascal Case') {
    for (let word of valueArray) {
      result += word[0].toUpperCase() + word.slice(1);
    }
  } else {
    result = 'Error!';
  }
 
  document.getElementById('result').textContent = result;
 
}