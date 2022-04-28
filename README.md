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
import { getFirestore } from "firebase/firestore";

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

## CSS no Navbar e Footer

```css
.footer {
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #edf3f6;
}
```

Footer.js

```tsx

    criando a classe

// export const Footer = () => {
//   return (
    <footer className={styles.footer}>
//       <h3>Escreva sobre o que voce tem interesse!</h3>
//       <p>Mini Blog &copy; 2022</p>
    // </footer>
//   );
// };

```

Agora no Navbar.module.css

```css
.navbar {
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.15) 0px -2px 10px 0px;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 2em;
}

.brand {
  font-size: 1.2em;
}

.brand span {
  font-weight: 900;
  text-transform: uppercase;
}

.link_list {
  display: flex;
  list-style: none;
}

.link_list li {
  margin-right: 1em;
}

.link_list li a {
  padding: 0.4em 0.6em;
}

.active {
  background-color: #000;
  color: #fff;
}
```

Navbar.js

```tsx


// export const Navbar = () => {
//   return (
//     <nav className={styles.navbar}>
      <NavLink to={"/"} className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.link_list}>
//         <li>
//           <NavLink to={"/"}>Home</NavLink>
//         </li>

//         <li>
//           <NavLink to={"/about"}>Sobre</NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };
```

Verificamos se esta isActive se estiver colocamos active na class

```tsx

      <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >

```

## Estilos e fontes gerais do projeto

font google que vamos utilizar

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

Vamos no index.html e colamos no head

Vamos agora no index.css e colocar uns estilos base

```css
body {
  background-color: #f6fcff;
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

input::placeholder,
textarea::placeholder {
  font-family: "Montserrat", sans-serif;
}

input:focus,
textarea:focus {
  outline: none;
}

a,
nav button {
  text-decoration: none;
  background-color: transparent;
  border: none;
  color: #000;
  transition: 0.4s;
  font-size: 1em;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
}

a:hover,
nav button:hover {
  color: #bbb;
}
```

## Criando o formulario de cadastro

Criando a pasta no pages/Login/Login.js Login.module.css
pages/Register/Register.js Register.module.css

Vamos no App.js e criamos a rotas

```tsx

 <Route path={"/register"} element={<Register />} />
 <Route path={"/login"} element={<Login />} />

```

Colocanod o login e register na navbar

```tsx

     <li>
          <NavLink
            to={"/login"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Entrar
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/register"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Cadastrar
          </NavLink>
        </li>


```

Vamos na pagina de Register.js
e construir ela

```tsx
//importando o useState e useEffect
import React from "react";
import styles from "./Register.module.css";

import { useState, useEffect } from "react";

export const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <form>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="displayName"
          required
          placeholder="Nome do usuario"
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="displayEmail"
          required
          placeholder="E-mail do usuario"
        />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="displayPassword"
          required
          placeholder="insira sua senha"
        />

        <label htmlFor="password">Confirmação de senha:</label>
        <input
          type="password"
          id="password"
          name="confirmPassword"
          required
          placeholder="Confirme sua senha"
        />

        <button type="submit" className="btn">
          Cadastrar
        </button>
      </form>
    </div>
  );
};
```

Agora no Register.css

```css
.register {
  text-align: center;
}

.register p {
  color: #aaa;
}
```

## Estilizando os formulario com css global

index.css

```css
body {
  background-color: #f6fcff;
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

input::placeholder,
textarea::placeholder {
  font-family: "Montserrat", sans-serif;
  color: #aaa;
}

input:focus,
textarea:focus {
  outline: none;
}

a,
nav button {
  text-decoration: none;
  background-color: transparent;
  border: none;
  color: #000;
  transition: 0.4s;
  font-size: 1em;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
}

a:hover,
nav button:hover {
  color: #bbb;
}

/* Form  */

form {
  max-width: 40%;
  margin: 0 auto;
}

label {
  display: flex;
  flex-direction: column;
  margin-bottom: 1px;
  font-weight: bold;
  text-align: left;
}

input,
textarea {
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 1.8em 0;
  background-color: transparent;
}

.btn {
  background-color: #1a8918;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  width: 120px;
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  font-size: 1em;
}

.btn.btn-dark {
  background-color: #000;
  border-radius: 0;
}

.btn.btn-outline {
  background-color: transparent;
  border-radius: 0;
  color: #000;
  border: 1px solid #000;
  padding: 7px 30px;
}

.btn:hover {
  background-color: #0f730c;
  color: #fff;
}

.btn.btn-outline:hover {
  background-color: #000;
}

.btn.btn-danger:hover {
  background-color: #dc3545;
}
button[disabled] {
  background-color: #aaa;
}

.container .error {
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  padding: 5px;
  border-radius: 5px;
}
```

## State do form cadastro Register.js

```tsx
//Criando os estados do formulariop e erro
const [displayName, setDisplayName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");

//criando o metodo de submit

const handleSubmit = (e) => {
  e.preventDefault();
};

// no form colocamos o onSubmit
<form onSubmit={handleSubmit}></form>

//linkamos os estados com os inputs
value={displayName}
onChange={(e)=> setDisplayName(e.target.value)}

value={displayEmail}
onChange={(e)=> setDisplayEmail(e.target.value)}

value={displayPassword}
onChange={(e)=> setDisplayPassword(e.target.value)}

value={displayConfirmPassword}
onChange={(e)=> setDisplayConfirmPassword(e.target.value)}


//Quando envio o formulario o setError fica vazio

setErro("")

//formulariando o usuario

const user = {
    displayName,
    displayEmail,
    displayPassword
}

//validacao da senha com confirmsenha

if(displayPassword != displayConfirmPassword){
    setError("As senhas precisam ser iguais!");
    return;
}

// e colocamos o erro abaixo do button do formulario
  {error && <div className="error">{error}</div>}

```

## Criando o hook de autenticacao

Criando a pasta no src/hooks/useAuthentication.js

```tsx
//importando getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile,singOut
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

//importamos o useState e useEffect
import { useState, useEffect } from "react";

// criamos oa funcao do hook
export const useAuthentication = () => {
  //criamos os estados de erro e loading
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // criamos um cleanup para apagar funcoes que nao funcione eternamente
  const [cancelled, setCancelled] = useState(false);

  //instaciamos o getAuth para usar funcoes dela
  const auth = getAuth();

  //criamos uma funcao para reutilizar a verificacao se esta cancelado ou nao
  function checkIsCancelled() {
    if (cancelled) {
      return;
    }
  }
};
```

## Registrando usuario no sistema

Criando uma funcao que cria usuario com a funcionalidade asyncrona

```tsx
const createUser = async (data) => {
  //verificamos se esta cancelado ou nao
  checkIsCancelled();
  // chamamos o loading
  setLoading(true);

  // criamos um try catch

  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    await updateProfile(user, { displayName: data.displayName });

    return user;
  } catch (error) {
    console.log(error.message);
    console.log(typeof error.message);
  }

  //passamos o setLoading como falso
  setLoading(false);
};

//criamos um useEffect() para passar o setCancelled para false assim que sairmos dessa pagina
useEffect(() => {
  return () => setCancelled(true);
}, []);

//retornamos
return { auth, createUser, error, loading };
```

Agora linkamos o Register.js com o nosso hook feito cima

```tsx
//renomeamos o error pq ja temos no fronend uma variavel chamada error
const { createUser, error: authError, loading } = useAuthentication();

//transformamos nosso handleSubmit em um async await e chamamso o createUser(user) passando o user

const res = await createUser(user);

const handleSubmit = async (e) => {
//   e.preventDefault();

//   setError("");

//   const user = {
//     displayName,
//     displayEmail,
//     displayPassword,
//   };

//   if (displayPassword != displayConfirmPassword) {
//     setError("As senhas precisam ser iguais!");
//     return;
//   }

  const res = await createUser(user);

  console.log(res);
};

// para o sistema saber que estamos usando o firebase importamos o db no nosso Register.js
import {db} from ../../firebase/config



```

Vamos no nosso Hook e pegar os erros com catch e apresentar ao usuario mais amigavel

```tsx
//Criamos uma variavel let para pegar os erros
let systemErrorMessage;

//criamos um if else para verificar e pegar os erros do systema vindo pelo firebase
let systemErrorMessage;

if (error.message.includes("Password")) {
  systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres";
} else if (error.message.includes("email-already")) {
  systemErrorMessage = "E-mail ja cadastrado";
} else {
  systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde ";
}

//passamos os erros para o setError()

setError(systemErrorMessage);
```

No Register.js criamos um useEffect() para ficar de olho se algum erro aconteceu

```tsx
useEffect(() => {
  if (authError) {
    setError(authError);
  }
}, [authError]);

//incluimos o loading no nosso button
{
  !loading ? (
    <button type="submit" className="btn">
      Cadastrar
    </button>
  ) : (
    <button type="submit" className="btn">
      Carregando
    </button>
  );
}
```

## Contexto de autenticacao

criando uma pasta src/context/AuthContext.js

```tsx
//criamodo contexto
const AuthContext = createContext();

//criamos a funcao provider
export function AuthProvider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

//Criamos uma funcao que retorna o contexto criado acima, assim nao criamos o hook deste context
export function useAuthvalue() {
  return useContext(AuthContext);
}
```

Vamos no App.js e inserir nosso Provider feito acima

```tsx
// function App() {
//   return (
//     <div className="App">
<AuthProvider>
  <BrowserRouter>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
</AuthProvider>
//     </div>
//   );
// }
```
