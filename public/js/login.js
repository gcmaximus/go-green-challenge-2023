
$(document).ready(function () {
    // validate password

    var myInput = document.getElementById("password2");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");


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
    }


    // Form stuff
    const toggleForm = document.querySelector('.toggle-form');
    const loginForm = document.querySelector('#login-form');
    const signupForm = document.querySelector('#signup-form');
    const cardToggleBtn = document.querySelector('.card-toggle button');

    // Toggle between login and signup forms
    toggleForm.addEventListener('click', function () {
        if (signupForm.style.display === 'block') {
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
            cardToggleBtn.textContent = 'Switch to Login';
        }
        else {
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
            cardToggleBtn.textContent = 'Switch to Sign Up';
        }
    });

    // Handle form submission
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Perform login validation here
        alert('Login successful!');
        // Redirect to index.html dashboard
    });

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Perform signup validation here
        const username2Input = document.querySelector('#username2');
        const email2Input = document.querySelector('#email');
        const password2Input = document.querySelector('#password2');

        username2Input.addEventListener('input', function () {
            if (this.validity.valueMissing) {
                this.setCustomValidity('Please enter your username');
            } else {
                this.setCustomValidity('');
            }
        });

        password2Input.addEventListener('input', function () {
            if (this.validity.valueMissing) {
                this.setCustomValidity('Please enter your password');
            } else {
                this.setCustomValidity('');
            }
        });
        email2Input.addEventListener('input', function () {
            if (this.validity.valueMissing) {
                this.setCustomValidity('Please enter your email');
            } else if (this.validity.typeMismatch) {
                this.setCustomValidity('Please enter a valid email address');
            } else {
                this.setCustomValidity('');
            }
        });
        alert('Sign up successful!');
        // Show login form after successful signup
        const emailInput = document.querySelector('#email');
        const passwordInput = document.querySelector('#password');


        emailInput.addEventListener('input', function () {
            if (this.validity.valueMissing) {
                this.setCustomValidity('Please enter your email');
            } else {
                this.setCustomValidity('');
            }
        });

        passwordInput.addEventListener('input', function () {
            if (this.validity.valueMissing) {
                this.setCustomValidity('Please choose a password');
            } else {
                this.setCustomValidity('');
            }
        });
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        cardToggleBtn.textContent = 'Switch to Login';
    });

    // Add floating label effect to input fields
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input');
        input.addEventListener('focus', function () {
            group.classList.add('focused');
        });
        input.addEventListener('blur', function () {
            if (input.value === '') {
                group.classList.remove('focused');
            }
        });
    });
})








const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "https://localhost:5000/index.html",

    // This must be true.
    handleCodeInApp: true,
};

let email = window.document.getElementById("email");

// sendSignInLinkToEmail(auth, email, actionCodeSettings)
//     .then(() => {
//         window.localStorage.setItem("emailForSignIn", email);
//     })
//     .catch((error) => {
//         window.alert(
//             `Error code: ${error.code}\nError message: ${error.message}`
//         );
//     });

if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
        email = window.prompt("Please provide your email for confirmation");
    }
    signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
            window.localStorage.removeItem("emailForSignIn");
            // You can access the new user via result.user
            // Additional user info profile not available via:
            // result.additionalUserInfo.profile == null
            // You can check if the user is new or existing:
            // result.additionalUserInfo.isNewUser
            window.localStorage.setItem("loginResult", result);
        })
        .catch((error) => {
            window.alert(
                `Error code: ${error.code}\nError message: ${error.message}`
            );
        });
}
