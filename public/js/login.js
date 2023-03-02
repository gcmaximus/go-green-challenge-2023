// validate password
let myInput = document.getElementById("password2");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
};

// Form stuff
const toggleForm = document.querySelector(".toggle-form");


// Toggle between login and signup forms
toggleForm.addEventListener("click", function () {
    const loginForm = document.querySelector("#login-form");
    const signupForm = document.querySelector("#signup-form");
    const cardToggleBtn = document.querySelector(".card-toggle button");
    if (signupForm.style.display === "block") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        cardToggleBtn.textContent = "Switch to Login";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        cardToggleBtn.textContent = "Switch to Sign Up";
    }
});

const username2Input = document.querySelector("#username2");
const email2Input = document.querySelector("#email2");
const password2Input = document.querySelector("#password2");

username2Input.addEventListener("input", function () {
    if (this.validity.valueMissing) {
        this.setCustomValidity("Please enter your username");
    } else {
        this.setCustomValidity("");
    }
});

password2Input.addEventListener("input", function () {
    if (this.validity.valueMissing) {
        this.setCustomValidity("Please enter your password");
    } else {
        this.setCustomValidity("");
    }
});

email2Input.addEventListener("input", function () {
    if (this.validity.valueMissing) {
        this.setCustomValidity("Please enter your email");
    } else if (this.validity.typeMismatch) {
        this.setCustomValidity("Please enter a valid email address");
    } else {
        this.setCustomValidity("");
    }
});

// Add floating label effect to input fields
const formGroups = document.querySelectorAll(".form-group");
formGroups.forEach((group) => {
    const input = group.querySelector("input");
    input.addEventListener("focus", function () {
        group.classList.add("focused");
    });
    input.addEventListener("blur", function () {
        if (input.value === "") {
            group.classList.remove("focused");
        }
    });
});
