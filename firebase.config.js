import {getApp,getApps,initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";




const firebaseConfig = {
    apiKey: "AIzaSyDsL4t2diQmMWftdx7hRhiAjw9Fkccv_Ww",
    authDomain: "food-delivery-5f7b6.firebaseapp.com",
    databaseURL: "https://food-delivery-5f7b6-default-rtdb.firebaseio.com",
    projectId: "food-delivery-5f7b6",
    storageBucket: "food-delivery-5f7b6.appspot.com",
    messagingSenderId: "100905495602",
    appId: "1:100905495602:web:5c7da69aff5188bcb7202b"
  };
  

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);


  
  export{app,firestore,storage};