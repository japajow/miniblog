import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzih0LRVyeybP529JEsAqDiawZ8n2-dr4",
  authDomain: "miniblog-89d3f.firebaseapp.com",
  projectId: "miniblog-89d3f",
  storageBucket: "miniblog-89d3f.appspot.com",
  messagingSenderId: "559822453663",
  appId: "1:559822453663:web:9dafcbf14f540fcfabdbaa",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
