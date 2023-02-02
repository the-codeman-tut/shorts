function generatePassword() {
    let generatedPassword = generateRandomPassword();

    let input = document.getElementById("password");
    input.value = generatedPassword;

    let hintText = document.getElementById("hint");

    hintText.innerText = ""
}

function copyText() {
    let copyText = document.getElementById("password");
    let hintText = document.getElementById("hint");

    copyText.select();// select the input field
    copyText.setSelectionRange(0,99999);// For mobile devices
    document.execCommand("copy");
    hintText.innerText = "copied"
    navigator.clipboard.writeText(copyText.value);
}

function clearPassword() {
    let input = document.getElementById("password");
    input.value = "";
}

function generateRandomPassword() {
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

    return password;
}