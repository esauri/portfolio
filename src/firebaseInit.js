import firebase from 'firebase';

/**
 * firebaseInit - Initializes firebase
 *
 */
export default function firebaseInit() {
  const config = {
    apiKey: "AIzaSyAKsDMuUSb9LARTWe62nrY6kNoFfjPtw70",
    authDomain: "portfolio-7ad56.firebaseapp.com",
    databaseURL: "https://portfolio-7ad56.firebaseio.com",
    projectId: "portfolio-7ad56",
    storageBucket: "portfolio-7ad56.appspot.com",
    messagingSenderId: "802027825662",
  };

  firebase.initializeApp(config);
}
