import * as firebase from "firebase";
import keyConfig from './config';

var config = {
    apiKey: keyConfig.API_KEY,
    authDomain: "lukemobile-47a64.firebaseapp.com",
    databaseURL: keyConfig.API_URL,
    projectId: "lukemobile-47a64",
    storageBucket: "lukemobile-47a64.appspot.com",
    messagingSenderId: "1045707156811",
    appId: "1:1045707156811:web:8e1307f7e1b0bf997c4cce",
    measurementId: "G-Q8R446BWD7"
};

let firebaseConfig = firebase.initializeApp(config);

export default firebaseConfig;