function toggle() {
    let content = document.getElementById('extra');
    let btn = document.querySelector('.button');


    if (btn.textContent == 'More' ) {
        content.style.display = 'block';
        btn.textContent = 'Less';
    } else {
        content.style.display = ' ';
        btn.textContent = 'More';
        content.style.display ='none'
    }
}