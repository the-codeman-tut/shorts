let upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let loweCases = 'abcdefghijklmnopqrstuvwxyz';
let specialCharacters = '!@#$%^&*';
let numbers = '1234567890';

let i = 0;
let password = '';

while (i < 2) {
    let upperCase = upperCases.split('')[Math.floor(Math.random() * upperCases.length)];

    let lowercase = loweCases.split('')[Math.floor(Math.random() * loweCases.length)];

    let specialCharacter = specialCharacters.split('')[Math.floor(Math.random() * specialCharacters.length)];

    let number = numbers.split('')[Math.floor(Math.random() * numbers.length)];

    password += `${upperCase}${lowercase}${specialCharacter}${number}`;

    i++;
}

console.log(`Generated password ==> ${password}`);