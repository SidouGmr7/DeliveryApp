import {getApp, getApps, initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
        apiKey: "AIzaSyANvS46A4z3sEzj84caGNhZqmciLsyDWts",
        authDomain: "myreacttestp.firebaseapp.com",     
        databaseURL: "https://myreacttestp-default-rtdb.firebaseio.com",
        projectId: "myreacttestp",
        storageBucket: "myreacttestp.appspot.com",
        messagingSenderId: "161461806232",
        appId: "1:161461806232:web:5ab7355f90dffcabb8dced",
        measurementId: "G-046XZHHLS8"
      };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage};