




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
