
const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "http://localhost:5000/login.html",

    // This must be true.
    handleCodeInApp: true,
};

let email = document.getElementById("emailForSignIn").value;

document.getElementById("signInButton").addEventListener("click", () => {
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
            localStorage.setItem("emailForSignIn", email);
        })
        .catch((error) => {
            alert(`Error code: ${error.code}\nError message: ${error.message}`);
        });
});

if (isSignInWithEmailLink(auth, location.href)) {
    let email = localStorage.getItem("emailForSignIn");
    if (!email) {
        email = prompt("Please provide your email for confirmation");
    }
    signInWithEmailLink(auth, email, location.href)
        .then((result) => {
            localStorage.removeItem("emailForSignIn");
            // You can access the new user via result.user
            // Additional user info profile not available via:
            // result.additionalUserInfo.profile == null
            // You can check if the user is new or existing:
            // result.additionalUserInfo.isNewUser
            localStorage.setItem("loginResult", result);
            location.replace('http://localhost:5000/index.html')
        })
        .catch((error) => {
            alert(`Error code: ${error.code}\nError message: ${error.message}`);
        });
}
