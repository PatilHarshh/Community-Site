import React from "react";
import firebase from 'firebase/app';
import { initializeApp }  from "firebase/app";
import {getAuth, signOut, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';


function GoogleLogin() {
    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration

    // Initialize Firebase

    const handleGoogleLogin = () => {

        const firebaseConfig = {
            apiKey: "AIzaSyB1Byka6V04R40AD1W9vV8LnIu0SOFhOtw",
            authDomain: "community-login-167f7.firebaseapp.com",
            databaseURL: "https://community-login-167f7-default-rtdb.firebaseio.com",
            projectId: "community-login-167f7",
            storageBucket: "community-login-167f7.appspot.com",
            messagingSenderId: "1057784224156",
            appId: "1:1057784224156:web:1816856c3e38978daf9059"
        };
        const app = initializeApp(firebaseConfig);
        const auth = new getAuth(app);
        const provider = new GoogleAuthProvider(app);
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                alert(user.displayName);
                // document.querySelector('.form_close').click();
                localStorage.setItem('res', user);
                window.location.reload();

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                alert(errorMessage);
                console.log(errorCode, credential, email);
                // ...
            });

    };
    return (
        <div onClick={handleGoogleLogin} className="googleBtn googleloginbutton" >Continue With Google</div>
    );
}

export default GoogleLogin;
