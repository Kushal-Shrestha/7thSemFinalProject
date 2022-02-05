// import * as firebase from 'firebase';
// import '@firebase/auth';
// import '@firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'YOUR_KEY_HERE_AIzaSyAOWH',
//   authDomain: 'your-auth-domain-b1234.firebaseapp.com',
//   databaseURL: 'https://your-database-name.firebaseio.com',
//   projectId: 'your-project-id-1234',
//   storageBucket: 'your-project-id-1234.appspot.com',
//   messagingSenderId: '12345-insert-yourse',
//   appId: 'insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce',
// };

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

// export { firebase };
// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from '@firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCLA4vnLFaVow25ylLUkb57NhmnN6qk1vE",
//   authDomain: "fir-auth-65294.firebaseapp.com",
//   projectId: "fir-auth-65294",
//   storageBucket: "fir-auth-65294.appspot.com",
//   messagingSenderId: "105428798939",
//   appId: "1:105428798939:web:49a9375f32ea94d4dfebfe"
// };
const firebaseConfig = {
    apiKey: "AIzaSyAr79E3kRlzawYUGJYDCAim5T2uAQpxRvY",
    authDomain: "finalprojectfirebase-f9a19.firebaseapp.com",
    projectId: "finalprojectfirebase-f9a19",
    storageBucket: "finalprojectfirebase-f9a19.appspot.com",
    messagingSenderId: "806255981836",
    appId: "1:806255981836:web:328e84cd7a1cef038b0529",
    measurementId: "G-7DSRNCCZWW"
  };
  

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };