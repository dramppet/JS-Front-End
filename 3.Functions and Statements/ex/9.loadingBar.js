function loading(num){
    if (num == 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        console.log(`${num}% [${'%'.repeat(num / 10)}${'.'.repeat((100 - num) / 10)}]`)
        console.log('Still loading...')
    }
}

loading(30);
loading(50);
loading(100);