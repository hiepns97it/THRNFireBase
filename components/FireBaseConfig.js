import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAi-oM7e3W7skMtoCY1nmQcErMAkL12m2g",
    authDomain: "thuchanhfirebase-2f72f.firebaseapp.com",
    projectId: "thuchanhfirebase-2f72f",
    storageBucket: "thuchanhfirebase-2f72f.appspot.com",
    messagingSenderId: "613632094367",
    appId: "1:613632094367:web:c283eef33ef64c48b7b2aa",
    measurementId: "G-LJ91T517YM"
};
export  const firebaseApp = firebase.initializeApp(firebaseConfig)
//export const firebaseAnlyticAPp = firebase.analytics();