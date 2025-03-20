function solve() {
   let list = document.getElementById('towns');
   let input = document.getElementById('searchText').value;
   let output = document.getElementById('result');

   let pattern = input.value;

   for(let row of list.children){
      if(row.textContent.includes(pattern)){
         row.style.fontWeight = 'bold';
         row.style.textDecoration = 'inderline';
      }else{
         row.style.fontWeight = ' ';
         row.style.textDecoration = ' ';
      }
   }
}