import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: '',
  authDomain: 'dogder-710b1.firebaseapp.com',
  projectId: 'dogder-710b1',
  storageBucket: 'dogder-710b1.appspot.com',
  messagingSenderId: '951449294118',
  appId: '1:951449294118:web:a26b9d2b29cc447a1d5de7',
  measurementId: 'G-03P6V828HY',
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const Firebase = {
  app: firebaseApp,
  auth: firebaseAuth,
};

export default Firebase;
