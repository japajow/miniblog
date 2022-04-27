## Iniciando projeto 2 miniblog com Udemy matheus

instalando projeto
npx-create-app miniblog

instalando o firebase
npm i firebase

## Configurando o firebase no nosso projeto

crie uma pasta firebase/config.js

```tsx
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzih0LRVyeybP529JEsAqDiawZ8n2-dr4",
  authDomain: "miniblog-89d3f.firebaseapp.com",
  projectId: "miniblog-89d3f",
  storageBucket: "miniblog-89d3f.appspot.com",
  messagingSenderId: "559822453663",
  appId: "1:559822453663:web:9dafcbf14f540fcfabdbaa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//configurando o bd firestore
const db = getFirestore(app);

// importando o firestore pelo firebase/firebase
import { getFirestore } from "firebase/firebase";

//exportamos o db

export { db };
```
