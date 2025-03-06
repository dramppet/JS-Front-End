function validatorPass(password){
    let messages = [];
 
    if (password.length < 6 || password.length > 10) {
        messages.push('Password must be between 6 and 10 characters');
    }
    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        messages.push('Password must consist only of letters and digits');
    }
    if ((password.match(/\d/g) || []).length < 2) {
        messages.push('Password must have at least 2 digits');
    }
 
    if (messages.length === 0) {
        return 'Password is valid';
    } else {
        return messages.join('\n');
    }
}

console.log(validatorPass('logIn'));
console.log(validatorPass('MyPass123'));
console.log(validatorPass('Pa$s$s'));