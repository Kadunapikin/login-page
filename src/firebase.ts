import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyADTYUIvo7oK_cKdB_LXNuonYm69zVJbVk",
    authDomain: "my-login-page-a823c.firebaseapp.com",
    projectId: "my-login-page-a823c",
    storageBucket: "my-login-page-a823c.firebasestorage.app",
    messagingSenderId: "609323376009",
    appId: "1:609323376009:web:ff6200d8ebafb5dd7b1558",
    measurementId: "G-J7R1255EE3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

//   const analytics = getAnalytics(app);