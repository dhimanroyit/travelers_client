import firebase from 'firebase/app';
import firebaseConfig from './firebase.config';

const firebaseAppInit = () => {
  return !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
}

export default firebaseAppInit;