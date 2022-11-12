import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore/lite"

const firebaseConfig = {

  apiKey: "AIzaSyAB4GHv6Lk5KSlfGFkqXp2LedadKOiRW-k",
  authDomain: "wallygallery.firebaseapp.com",
  projectId: "wallygallery",
  storageBucket: "wallygallery.appspot.com",
  messagingSenderId: "472600017908",
  appId: "1:472600017908:web:417cdee532d20a17e717a1",
  measurementId: "G-3882KGG4XL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



