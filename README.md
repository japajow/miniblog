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

## Configurando o react router

instalando o router

npm i react-router-dom

No App.js fazemos a configuracao do router

```tsx
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
```

Criando a pasta src/pages/Home/Home.js About/About.js

```tsx
import React from "react";
// import './Home.css';

export const Home = () => {
  return <div>Home</div>;
};

//about

import React from "react";
//import './About.css';

export const About = () => {
  return <div>About</div>;
};
```

Configurando as rotas no App.js

```tsx

    <Route path={'/'} element={<Home />} />
    <Route path={'/about'} element={<About />} />

```

## Adicionando componente o Navbar e Footer

Criando o componente navbar

Criando componentes/Navbar/Navbar.js Navbar.module.css Footer.js Footer.module.js

Eles vao ser reptidos por toda nossa pagina

```tsx
import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return <div>Navbar</div>;
};

//Footer

import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return <div>Footer</div>;
};
```

inserindo o navbar e footer no App.js

```tsx
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
        <Navbar />
        // <div className="container">
        //   <Routes>
        //     <Route path={"/"} element={<Home />} />
        //     <Route path={"/about"} element={<About />} />
        //   </Routes>
        // </div>
        <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }
```

Configurando a nossa navbar com NavLink

```jsx
import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <Navlink to={"/"}>
        Mini <span>Blog</span>
      </Navlink>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>

        <li>
          <NavLink to={"/about"}>Sobre</NavLink>
        </li>
      </ul>
    </nav>
  );
};
```

Agora vamos no Footer.js

```tsx
import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <h3>Escreva sobre o que voce tem interesse!</h3>
      <p>Mini Blog &copy; 2022</p>
    </footer>
  );
};
```
