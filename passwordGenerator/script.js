function generatePassword() {
    let generatedPassword = generateRandomPassword();

    let input = document.getElementById("password");
    input.value = generatedPassword;

    let hintText = document.getElementById("hint");

    // hintText.innerText = ""
}

function copyText() {
    let copyText = document.getElementById("password");
    let hintText = document.getElementById("hint");

    if (copyText.value === "") {
        let element = document.getElementById("errorCheck");
        element.classList.add("error");
        setTimeout(() => {
            element.classList.remove("error");
        }, 1000);
    } else {
        copyText.select();// select the input field
        copyText.setSelectionRange(0,99999);// For mobile devices
        document.execCommand("copy");
        hintText.innerText = "copied"
        navigator.clipboard.writeText(copyText.value);
    
        setTimeout(() => {
            let hintText = document.getElementById("hint");
            hintText.innerHTML = "&nbsp;"
        }, 1000);
    }


}

function clearPassword() {
    let input = document.getElementById("password");
    let hintText = document.getElementById("hint");
    input.value = "";
    hintText.innerHTML = "&nbsp;"
}

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

function generateRandomPassword() {
    let specialCharacters = '!@#$%^&*';

    const date = new Date();
    
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.toJSON().slice(0, 10).split("-")[1];
    const specialCharacter = specialCharacters.split('')[Math.floor(Math.random() * specialCharacters.length)];
    const seconds = date.getSeconds();
    const password = `${month}${day}${specialCharacter}${addZero(seconds)}`;
    return password;
}