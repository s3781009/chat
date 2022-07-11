import { initializeApp, } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMxw92FSFRBSXDUjvXsp4ehXiW3R9VFxA",
    authDomain: "chat-b8745.firebaseapp.com",
    projectId: "chat-b8745",
    storageBucket: "chat-b8745.appspot.com",
    messagingSenderId: "308814271149",
    appId: "1:308814271149:web:86d54dd89f27cbb2656c24",
    measurementId: "G-EYB6KWTK4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
// const analytics = getAnalytics(app);
