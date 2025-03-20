function solve() {
   let list = document.getElementById('towns');
   let input = document.getElementById('searchText');
   let output = document.getElementById('result');

   let pattern = input.value;

   let matches = 0;

   for(let row of list.children){
      if(row.textContent.includes(pattern)){
         row.style.fontWeight = 'bold';
         row.style.textDecoration = 'inderline';
         matches ++;
      }else{
         row.style.fontWeight = ' ';
         row.style.textDecoration = ' ';
      }
   }
   output.textContent = `${matches} matches found`;
}