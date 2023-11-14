

export const FirebaseConfig = {
  apiKey: "AIzaSyDXIGMFxchSqrxz0h63Teus0A9W0I_Yp1U",
  authDomain: "drbarbeccu.firebaseapp.com",
  databaseURL: "https://drbarbeccu-default-rtdb.firebaseio.com",
  projectId: "drbarbeccu",
  storageBucket: "drbarbeccu.appspot.com",
  messagingSenderId: "165833672097",
  appId: "1:165833672097:web:ceb3caabe212451d82f7e0",
  measurementId: "G-0S0JMKV9XL"
  }



/*import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';



const app = {
  apiKey: "AIzaSyCbMngkJCQIOEmZQk8Yt3r4P0NFahaC3Gs",
  authDomain: "diaexpress-d601a.firebaseapp.com",
  databaseURL: "https://diaexpress-d601a-default-rtdb.firebaseio.com",
  projectId: "diaexpress-d601a",
  storageBucket: "diaexpress-d601a.appspot.com",
  messagingSenderId: "878297008643",
  appId: "1:878297008643:web:86110af3f9c6d5b2b09c36",
  measurementId: "G-KG73S70S96"
  }
const FirebaseConfig = initializeApp(app);
// Import additional Firebase services as needed
const auth = getAuth(FirebaseConfig);
// Now, you can use the 'auth' object for authentication operations.
const firestore = getFirestore(FirebaseConfig);
// Now, you can use the 'firestore' object for Firestore operations.
const database = getDatabase(FirebaseConfig);
// Now, you can use the 'database' object for Realtime Database operations.

const storage = getStorage(FirebaseConfig);
// Now, you can use the 'storage' object for Storage operations.

// Modify the configuration for Firebase Hosting
if (window.location.hostname === 'localhost') {
  // Point to the local Firebase Hosting Emulator
  app.options.hosting = {
    local: true,
    emulatorHost: 'localhost',
    emulatorPort: 5000,
  };
}



  // Modify the configuration for the Authentication Emulator
if (window.location.hostname === 'localhost') {
  // Point to the local Authentication Emulator
  auth().useEmulator('http://localhost:9099');

  // Point to the local Firestore Emulator
  firestore().useEmulator('localhost', 8080);

  // Point to the local Realtime Database Emulator
  database().useEmulator('localhost', 9000);

  // Point to the local Storage Emulator
  storage().useEmulator('localhost', 9199);
}

export {FirebaseConfig};*/