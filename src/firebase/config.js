import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyArZI_ftaWSvSWSvl7b-g-JQp1f6Bifkn8",
  authDomain: "vue-blog-app-262ca.firebaseapp.com",
  projectId: "vue-blog-app-262ca",
  storageBucket: "vue-blog-app-262ca.appspot.com",
  messagingSenderId: "504561842822",
  appId: "1:504561842822:web:a547db0a817b0c2caa6f07"
};

const fb = initializeApp(firebaseConfig);

export { fb };