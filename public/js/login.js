
// if (isSignInWithEmailLink(auth, location.href)) {
//     let email = localStorage.getItem("emailForSignIn");
//     if (!email) {
//         email = prompt("Please provide your email for confirmation");
//     }
//     signInWithEmailLink(auth, email, location.href)
//         .then((result) => {
//             localStorage.removeItem("emailForSignIn");
//             // You can access the new user via result.user
//             // Additional user info profile not available via:
//             // result.additionalUserInfo.profile == null
//             // You can check if the user is new or existing:
//             // result.additionalUserInfo.isNewUser
//             localStorage.setItem("loginResult", result);
//             location.replace('http://localhost:5000/index.html')
//         })
//         .catch((error) => {
//             alert(`Error code: ${error.code}\nError message: ${error.message}`);
//         });
// }

let email = document.getElementById('email').value
let password = document.getElementById('password').value

document.getElementById("signUpButton").onclick() = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
    })
    .catch((error) => {
        alert(`Error code: ${error.code}\nError message: ${error.message}`);
        location.reload()
    });
}


