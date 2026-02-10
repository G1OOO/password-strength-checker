function checkPassword() {
    let passwordInput = document.getElementById("passwordInput");
    let strengthText = document.getElementById("strengthText");
    let password = passwordInput.value;
    
    let strength = 0;

    if (password.length > 5) {
        strength = strength + 1;
    }

    if (password.length > 10) {
        strength = strength + 1;
    }

    let hasNumber = false;
    let numbers = "0123456789";
    for (let i = 0; i < password.length; i++) {
        if (numbers.includes(password[i])) {
            hasNumber = true;
        }
    }

    if (hasNumber == true) {
        strength = strength + 1;
    }

    if (password.length == 0) {
        strengthText.innerText = "Strength: ";
        strengthText.style.color = "black";
    } else if (strength == 1) {
        strengthText.innerText = "Strength: Weak";
        strengthText.style.color = "red";
    } else if (strength == 2) {
        strengthText.innerText = "Strength: Medium";
        strengthText.style.color = "orange";
    } else if (strength >= 3) {
        strengthText.innerText = "Strength: Strong";
        strengthText.style.color = "green";
    }
}