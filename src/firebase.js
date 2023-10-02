import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBZ2CfbpD087bOOHxAL7XkqRfOs80EiNEU",
    authDomain: "gsg-studio.firebaseapp.com",
    projectId: "gsg-studio",
    storageBucket: "gsg-studio.appspot.com",
    messagingSenderId: "496170464500",
    appId: "1:496170464500:web:ba9cd8df3cbca6d65adaa1",
    measurementId: "G-HMDZXMW6G7"
  };
  
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  
  export { app, database };