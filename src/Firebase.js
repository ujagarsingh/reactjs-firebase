import * as firebase from 'firebase/firebase';

//const settings = {timestampsInSnapshots: true};

import "firebase/auth";
import "firebase/database";

var config = {
	apiKey: "AIzaSyCTpzU9AVqg28DYLg1WqY-oERuDrAXn8mc",
    authDomain: "fir-realtime-db-web-eadb0.firebaseapp.com",
    databaseURL: "https://fir-realtime-db-web-eadb0.firebaseio.com",
    projectId: "fir-realtime-db-web-eadb0",
    storageBucket: "fir-realtime-db-web-eadb0.appspot.com",
    messagingSenderId: "1054541467576"
};
firebase.initializeApp(config);
//firebase.firestore()
//firebase.firestore().settings(settings);

export default firebase;

/*

var config = {
    apiKey: "AIzaSyCTpzU9AVqg28DYLg1WqY-oERuDrAXn8mc",
    authDomain: "fir-realtime-db-web-eadb0.firebaseapp.com",
    databaseURL: "https://fir-realtime-db-web-eadb0.firebaseio.com",
    projectId: "fir-realtime-db-web-eadb0",
    storageBucket: "fir-realtime-db-web-eadb0.appspot.com",
    messagingSenderId: "1054541467576"
  };
  firebase.initializeApp(config);
  
*/