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

        <label htmlFor="password">Confirma????o de senha:</label>
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

## Passando o usuario para o contexto

Vamos no App.js e envolver nosso AuthProvider com o valor do usuario recuperado

```tsx
//importamos o onAuthStateChanged , ele que mapeia se o usuario esta logado com sucesso
import { onAuthStateChanged } from "firebase/auth";

//importamos alguns hooks , useState useEffect
import { useState, useEffect } from "react";

//importamos  nosso Hook useAuthentication
import { useAuthentication } from "./hooks/useAuthentication";

//agora vamos iniciar a logica de como monitora o status do usuario

// criamos o estado do user
const [user, setUser] = useState(undefined);

// criamos o auth invocado com useAuthentication
const { auth } = useAuthentication();

//criamos um loadingUser para ver se ja carregou ou nao o usuario
const loadingUser = user === undefined;

//checamos se ta carregando o usuario
if (loadingUser) {
  return <p>Carregando...</p>;
}

//criamos um useEffect para ficar de olho se esta autenticado ou nao o user
useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });
}, [auth]);

// Agora passamo o user para o nosso value do Provider

<AuthProvider value={{ user }}></AuthProvider>;
```

## Links para usuario autenticado e links nao autenticado

Vamos no Navbar.js e puxar o contexto para ele

```tsx
//comecamos importando
import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

//pegamos o usuario
const { user } = useAuthValue();

//Os links de entrar e cadastra nao faz sentido se o usuario estiver logado
//vamos fazer um if checando se esta logado ou nao
{
  !user && (
    <>
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
          Registrar
        </NavLink>
      </li>
    </>
  );
}
```

Vamos criar paginas para usuario autenticado

pages/Dashboard/Dashboard.js Dashboard.module.css

pages/CreatePost/CreatePost.js CreatePost.module.css

Vamos no App.js, e criar as nossas rotas

```tsx


  <Route path={"/dashboard"} element={<Dashboard />} />
  <Route path={"/posts/create"} element={<CreratePost />} />

```

Agora vamos na Navbar e colocamos se o usuario estiver logado apareca os links dashboard e createpost

```tsx
{
  user && (
    <>
      <li>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/posts/create"}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Criar Novo Posts
        </NavLink>
      </li>
    </>
  );
}
```

## Bloqueio de paginas que precisa de auenticacao

Vamos no App.js que temos acesso ao usuario autenticado ou nao

```tsx

  //no element do Route fazermo um ifi ternario
  // se o usuario nao esta presente mandamos ele para outra rota
   element={!user ? <Login /> : <Navigate to={"/"} />}

   //quando estiver logado
    <Route
        path={"/register"}
        element={!user ? <Register /> : <Navigate to={"/"} />}
      />
      <Route
        path={"/login"}
        element={!user ? <Login /> : <Navigate to={"/"} />}
      />

  //quando nao estiver logado
    <Route
        path={"/dashboard"}
        element={user ? <Dashboard /> :  <Navigate to={"/login"} />}
      />
      <Route
        path={"/posts/create"}
        element={user ? <CreratePost /> :  <Navigate to={"/login"} />}
      />

```

Criando o HTML do sobre
About.js

```tsx
<div className={styles.about}>
  <h2>
    Sobre o Mini <span>Blog</span>
  </h2>
  <p>
    Este projeto consiste em um blog feito com react no front-end e Firebase no
    back-end
  </p>
  <Link to={"/posts/create"} className={"btn"}>
    Criar post
  </Link>
</div>
```

Colocando estilo no About.module.css

```css
.about {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about p {
  color: #aaa;
  margin-bottom: 2em;
}

.about a {
  display: block;
  margin-top: 15px;
  padding: 10px 15px;
}
```

## funcao de logout no nosso sistema

Vamos no nosso hook useAuthentication.js

```tsx
//logout
const logout = () => {
  checkIsCancelled();
  signOut(auth);
};

//passamos o logout no retorno
return { logout };
```

Vamos na Navbar.js e criar uma rota para o logout

```tsx
const { logout } = useAuthentication();
{
  user && (
    <li>
      <button onClick={logout}>Deslogar</button>
    </li>
  );
}
```

## Estruturando a pagina de Login

Copiamos todo formulario e colamos ele no Login.js
Formatamos um pouco o formulario para login

```tsx
<div>
  <h1>Fazer Login</h1>
  <p>Fa??a o login para poder utilizar o sistema</p>
  <form onSubmit={handleSubmit}>
    <label htmlFor="email">
      <span>E-mail:</span>
      <input
        type="email"
        id="email"
        name="displayEmail"
        required
        placeholder="E-mail do usuario"
        value={displayEmail}
        onChange={(e) => setDisplayEmail(e.target.value)}
      />
    </label>

    <label htmlFor="password">
      <span>Senha:</span>
      <input
        type="password"
        id="password"
        name="displayPassword"
        required
        placeholder="insira sua senha"
        value={displayPassword}
        onChange={(e) => setDisplayPassword(e.target.value)}
      />
    </label>
    {!loading ? (
      <button type="submit" className="btn">
        Entrar
      </button>
    ) : (
      <button type="submit" className="btn" disabled>
        Carregando
      </button>
    )}
    {error && <div className="error">{error}</div>}
  </form>
</div>
```

copiamos tambem os erros e o submit do register e colamos no login

```tsx

import React from "react";
import styles from "./Login.module.css";
import { db } from "../../firebase/config";

import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

export const Login = () => {
  const [displayEmail, setDisplayEmail] = useState("");
  const [displayPassword, setDisplayPassword] = useState("");
  const [error, setError] = useState("");

  const { error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayEmail,
      displayPassword,
    };
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);


```

Vamos no css do Login.module.css

```css
.login {
  text-align: center;
}

.login p {
  color: #aaa;
}
```

no Login.js colocamos a className

```tsx

  <div className={styles.login}>

```

## Login do usuario

Vamos no hook/useauthentication.js

```tsx
//login

const login = async (data) => {
  checkIsCancelled();

  setLoading(true);
  setError("");

  try {
    await signInWithEmailAndPassword(
      auth,
      data.displayEmail,
      data.displayPassword
    );
    setLoading(false);
  } catch (error) {
    let systemErrorMessage;

    if (error.message.includes("user-not-found")) {
      systemErrorMessage = "Usu??rio n??o existente, verifique novamente.";
    } else if (error.message.includes("wrong-password")) {
      systemErrorMessage = "Senha incorreta, verifique novamente.";
    } else {
      systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde ";
    }
    setLoading(false);
    setError(systemErrorMessage);
  }
};

// retornamos o login para ser utilizado
return { login };
```

vamois no Login.js e utilizar o login do hook

```tsx
//acrecentamos o login
const { error: authError, loading, login } = useAuthentication();

// chamamos o nosso login() passando o usurio do formulario
const res = login(user);
```

## Estrutura da pagina de criar postes CreatePost.js

CreatePost.js

```tsx
// primeiro importamos o que vamos utilizar
//estado
import { useState } from "react";
//useNavigate para criar a rota
import { useNavigate } from "reatc-router-dom";
//e o nosso useAuthValue para poder atrelar o nosso usuario do post
import { useAuthValue } from "../../context/AuthContext";

// criamos o estado do titulo
const [title, setTitle] = useState("");
//criamos o estado da imagem
const [image, setImage] = useState("");
// criamos o estado do conteudo chamando o de body
const [body, setBody] = useState("");
//criamos o estado de cada tag de cada postes
const [tags, setTags] = useState([]);
//criamos o error para pegar os error de formulario
const [formError, setFormError] = useState("");

//chamamso o nosso hook
const { error, loading } = useAuthentication();

//criamos a funcao de envio
const handleSubmit = (e) => {
  e.preventDefault();
};

//Criando a estrutura HTML do create post

<div>
  <h2>Criar post</h2>
  <p>Escreva sobre o que quiser e compartilhe o seu conhecimento</p>
  <form onSubmit={handleSubmit}>
    <label>
      <span>Titulo:</span>
      <input
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        placeholder="Digite o titulo do post"
        required
      />
    </label>

    <label>
      <span>imagens:</span>
      <input
        name="image"
        type="file"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        id="title"
        placeholder="Insira uma imagem que representa seu post"
        required
      />
    </label>

    <label>
      <span>Conteudo:</span>
      <textarea
        name="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        id="title"
        placeholder="Insira o conteudo do post"
        required
      ></textarea>
    </label>

    <label>
      <span>Tags:</span>
      <input
        name="tags"
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        id="title"
        placeholder="Insira as tags separadas por virgula"
        required
      />
    </label>

    {!loading ? (
      <button type="submit" className="btn">
        Cadastrar
      </button>
    ) : (
      <button type="submit" className="btn" disabled>
        Carregando
      </button>
    )}
    {error && <div className="error">{error}</div>}
  </form>
</div>;
```

Ajustando um pouco o css CreatePost.module.css

```css
.create_post {
  align-items: center;
}

.create_post h2 {
  font-size: 2.2em;
}

.create_post p {
  color: #aaa;
  margin-bottom: 2em;
}
```

Coloando na div do formulario o estilo criado

```tsx
  <div className={styles.create}>
```

## Criando um novo hook de post

src/hooks/useInsertDocument.js

```tsx
//importando o useState useEffect useReducer
import { useState, useEffect, useReducer } from "react";
//importamos o db fo firebase
import { db } from "firebase/config";

import { collection, addDoc, Timestamp } from "firebase/firestore";
//collection para trabalhar com tipo as tabelas mysql
//addDoc para fazer insert no documento do banco
//Timestamp para registrar o horario que foi criado

//criamos o estado inicial para o reducer
const initialState = {
  loading: null,
  error: null,
};

//vamsoi criar o reducer
const insertReducer = (state, action) => {};

//exportamos o nosso userInsertDocument , informamos qual e a colecao
export const useInsertDocument = (docCollection) => {
  // resposta e dispatch , iniciar o hook iniciar com insertReducer e o initialState
  const [response, dispatch] = useReducer(insertReducer, initialState);

  // depois vamos liberar a memoria
  const [cancelled, setCancelled] = useState(false);

  //criamos uma funcao para o cancelled antes de qualquer acao verifico se esta cancelado ou nao
  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  // agora tnemos a funcao de inserir o post
  const insertDocument = async (document) => {
    try {
      //pegamos o documento que vai ser inserido
      const newDocument = { ...document, createdAt: Timestamp.now() };

      //criamos uma funcao para o resultado da insercao
      const insertedDocument = await addDoc(
        collection(db, docCollection),
        newDocument
      );

      checkCancelBeforeDispatch({
        type: "",
        payload: insertedDocument,
      });
    } catch (error) {}
  };

  //voltamos para o nosso insertReducer e preencher as actions

  const insertReducer = (state, action) => {
    switch (action.type) {
      case "LOADING":
        return { loading: true, error: null };
      case "INSERTED_DOC":
        return { loading: false, error: null };
      case "ERROR":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  //agora no inserimos os loadings no nosso sistema

  checkCancelBeforeDispatch({
    type: "LOADING",
    payload: insertedDocument,
  });
};

//deixando o nosso insertDocument assim

const insertDocument = async (document) => {
  checkCancelBeforeDispatch({
    type: "LOADING",
    payload: insertedDocument,
  });

  try {
    //pegamos o documento que vai ser inserido
    const newDocument = { ...document, createdAt: Timestamp.now() };

    //criamos uma funcao para o resultado da insercao
    const insertedDocument = await addDoc(
      collection(db, docCollection),
      newDocument
    );

    checkCancelBeforeDispatch({
      type: "INSERTED_DOC",
      payload: insertedDocument,
    });
  } catch (error) {
    checkCancelBeforeDispatch({
      type: "ERROR",
      payload: error.message,
    });
  }
};

// colocamos o setCacelled como true para liberar a memoria do sistema
useEffect(() => {
  return () => setCancelled(true);
}, []);

// e retornar o insertCodument e response
return { insertDocument, response };
```

## Inserindo dados no Firebase

Unindo o nosso hook post feito acima com nosso fomrmulario de criar post

No CreatePost.js

```tsx
//importando o useInsertDocument
import { useInsertDocument } from "../hooks/useInsertCodument";

//chamamos o nosso hook useInsertDocument
const { insertDocument, response } = useInsertDocument("posts");

//pegamos o usuario
const { user } = useAuthValue();

const handleSubmit = (e) => {
  e.preventDefault();

  //primeiro zerar os erros do nosso formulario
  setFormError("");

  //validar a url da imagem

  //criar o array de tatgs

  //checar todos os valores

  // e colocamos a funcao insertDocument
  insertDocument({
    title,
    image,
    body,
    tags,
    uid: user.uid,
    createdBy: user.displayName,
  });

  //redirecionamos ele para home
};

//nosso botao de loading e erro vem pelo response

{
  !response.loading ? (
    <button type="submit" className="btn">
      Cadastrar
    </button>
  ) : (
    <button type="submit" className="btn" disabled>
      Carregando
    </button>
  );
}
{
  response.error && <div className="error">{response.error}</div>;
}
```

## Validacao dos dados

Em CreatePost.js

```tsx
// validando a URL da imagem
try {
  new URL(image);
} catch (error) {
  setFormErro("A imagem precisa ser uma URL");
}

//casp tiver erro no formError ele retorna epara que nao prociga
if (formError) {
  return;
}

// mostramos o erro conforme abaixo
{
  formError && <div className="error">{formError}</div>;
}

//criando um metodo para pegar as tags e transformalas em uma array
//em seguida usamos o map para fazer algumas modificacoes na tags
//limpamos os espaco com trim()
//passamos todos a serem minusculos as tags

const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

//validamos se todos os valores vieram
if (!title || !tags || !image || !body) {
  setFormEr

  //subtistuimos a tags por tagsArray
  insertDocument({
      title,
      image,
      body,
      tagsArray, >>>> aqui
      uid: user.uid,
      createdBy: user.displayName,
    });

    //importamos o useNavigate
    const navigate = useNavugate()

    //redireciona a Home
    navigate("/");
```

## estruturando a HOME

vamos na HOme.js

```tsx
//criamos o formulario de pesquisa
<form>
  <input
    type="text"
    placeholder="ou busque por tags..."
    onChange={(e) => setQuery(e.target.value)}
  />
  <button className="btn btn-dark">Pesquisar</button>
</form>;

// criamos as querys do estado
const [query, setQuery] = useState("");

//criamos estado do posts
const [posts] = useState([]);

//criamos nosso handleSubmit
const handleSubmit = (e) => {
  e.preventDefault();
};

// criamos o nosso HTMl quando nao houver postes
{
  posts && posts.length === 0 && (
    <div className={styles.noposts}>
      <p>Nao foram encontrados posts</p>
      <Link to={"/posts/create"} className={"btn"}>
        Criar primeiro post
      </Link>
    </div>
  );
}

//passamos as classes no HTML
<div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}></form>
```

estilizando a Home.module.css

```css
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.search_form {
  max-width: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
}

.search_form input {
  margin-right: 10px;
  width: 50%;
}

.noposts {
  text-align: center;
}

.noposts p {
  margin-bottom: 1.5em;
}

.noposts a {
  padding: 10px 25px;
}
```

## criando hook resgate dos dados que esta firebase

criando o hooks/useFetchDocuments.js

```tsx
import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection, // definir os dados da collection
  query, // recupera os dados
  orderBy, // ordernar
  onSnapshot, //ele verifica se tem dados novos se tiver ele traz
  where, // a onde
} from "firebase/firestore";

//criando a funcao useFetchDocuments
//docCollection de  qual banco de dados
// search de busca como nulo
// id como nulo para poder pegar os dados do usuario
export const useFetchDocuments = (docCollection, search = null, uid = null) => {
  //setando os documents
  const [documents, setDocuments] = useState(null);
  //erro
  const [error, setError] = useState(null);
  //loading
  const [loading, setLoading] = useState(null);

  //fazendo o sistema da memoria leak para limpar a  memoria
  const [cancelled, setCancelled] = useState(false);

  // criamos a funcao baseada no useEffect
  //se chegar dados buscamos docCollection, busca dados
  // search busca dados
  // uid busca dados
  //cancelled poder nao mais buscar dados , encerra o papel do useEffect
  useEffect(() => {
    //criamos a funcao asyncrona
    async function loadData() {
      if (cancelled) return;

      setLoading(true);

      const collectionRef = collection(db, docCollection);

      try {
        let q;

        q = await query(collectionRef, orderBy("createdAt", "desc"));

        await onSnapshot(q, (querySnapshot) => {
          setDocument(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });

        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
      loadData();
    }
  }, [docCollection, search, uid, cancelled]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { document, loading, error };
};
```

## Exibindo os dados na Home

Na Home.js

```tsx
const { documents: posts, loading } = useFetchDocuments("posts");

// agora pegamos os posts e colocamos no HTML
{
  posts && posts.map((post) => <h3>{post.title}</h3>);
}
```

Vamos criar o nosso port details components/PostDetails.js PostDetails.module.css

```tsx
import React from "react";
import styles from "./PostDetails.module.css";

import { Link } from "react-router-dom";

export const PostDetails = ({ post }) => {
  return (
    <div>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.createdBy}</p>
      <div>
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outiline}">
        Ler
      </Link>
    </div>
  );
};
```

Colocamos o component PostDetails.js na Home.js

```tsx
{
  posts && posts.map((post) => <PostDetails key={post.id} post={post} />);
}
```

## Css do detalhes post PostDetails.module.css

PostDetails.module.css

```css
.post_detail {
  margin-bottom: 2em;
}

.post_detail img {
  max-width: 600px;
}

.post_detail h2 {
  margin-bottom: 0.4em;
}

.post_detail .tags {
  display: flex;
  margin-bottom: 1.2em;
}

.tags p {
  margin-right: 0.5em;
}

.tags span {
  font-weight: bold;
}

.createdby {
  font-style: italic;
  color: #444;
  font-size: 0.8em;
  margin-bottom: 1em;
}
```

colocando as classes no HTML do PostDetails.js

```tsx

   <div className={styles.post_detail}>
      <img  src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdby}>{post.createdBy}</p>
      <div className={styles.tags}>

```

## Criando a funcionalidade de busca

Vamos no useFetchDocuments.js

```tsx
//temos o search = null
//fazer a busca atraves das tags
//dentro do try
if (search) {
  q = await query(
            collectionRef,
            where("tagsArray", "array-contains", search),
            orderBy("createdAt", "desc")
} else {
  q = await query(collectionRef, orderBy("createdAt", "desc"));
}
```

Agora vamos na Home.js

```tsx
//const navigate  usamos o hook useNavigate
const navigate = useNavigate();
//no handleSubmit
const handleSubmit = (e) => {
  e.preventDefault();

  if (query) {
    return navigate(`/search?q=${query}`);
  }
};
```

Criando a nova pagina de busca
pages/search/Search.js e Search.module.css

Vamos no App.js e criamos a URL para o Search

```tsx
<Route path={"/search"} element={<Search />} />
```

No search.js

```tsx
//importamos o hook import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
```

Criamos agora um novo hook useQuery.js

```tsx
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export function useQuery() {
  // pegamos o search pela url
  const { search } = useLocation();
  // envolvemos o useMemo  e chamamos o URLSearchParams para buscar um parametro pela URL
  //essa funcao so vai ser executada quando osearch for alterada

  return useMemo(() => new URLSearchParams(search), [search]);
}
```

Voltamosno Search.js e importamos tambem esse hook useQuery()

```tsx
import { useQuery } from "../../hooks/useQuery";
const query = useQuery();
//pegamos o atributo q
const search = query.get("q");
```

## Exibindo resultado da busca

Na pagina do Search.js temos que carregar os documentos na base que foi feita a pesquisa

usamos o hook useFetchDocuments

```tsx
 //usamos o nosso useFetcDocuments passando posts e a busca search
  const [documents: posts] = useFetchDocuments("posts",search)

  // criamos uma div
  // e fazemos um map chamando o nosso PostDetails passando atributo post do map
  //esse seria quando tiver o post pesquisado
    {posts && posts.map((post)=> (<PostDetail  key={post.id} post={post}/>))}

  // quando nao houver resultado
   {posts && posts.length === 0 && (<><p>Nao foram encontrados posts a partir da sua busca...</p><LInk to={'/'} className={'btn btn-dark'}>Voltar</Link></>)}

```

Estilizando nossa pagina Search.module.css

```css
.search_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.search_container h1 {
  margin-bottom: 1em;
}

.search_container p {
  margin-bottom: 30px;
}

.noposts {
  text-align: center;
}
```

Colocando a classe no HTML no Search.js

```tsx

  <div className={styles.search_container}>

   <div className={styles.noposts}>

```

## Criando pagina de post individual sigle page

pages/Post/Post.js Post.module.css

```tsx
import React from "react";

import styles from "./Post.module.css";

//hooks
import { useParams } from "react-router-dom";

export const Post = () => {
  return <div>Post</div>;
};
```

Vamos no App.js e criamos a rota para o sigle page

```tsx
<Route path="/post/:id" element={<Post />} />
```

Voltamso no Post.js

```tsx
//pegamos o id pelo useParams

const { id } = useParams();
```

## Exibindo dados do post individual

Criamos um hook novo useFetchDocument.js
compiamos todo conteudo do useFetchDocuments no plural
para o nosso useFetchDocument.js

```tsx
import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //criando estado para limpando a memoria
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadDocument() {
      if (cancelled) return;

      setLoading(true);

      try {
        const docRef = await doc(db, docCollection, id);
        const docSnap = await getDoc(docRef);

        setDocument(docSnap.data());
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
    }
    loadDocument();
  }, [docCollection, id]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { document, loading, error };
};
```

Agora vamos no Post.js aplicamos o nosso novo hook a essa pagina

```tsx
import { useFetchDocument } from "../../hooks/useFetchDocument";

const { document: post, loading } = useFetchDocument("posts", id);

<div>
  {loading && <p>Carregando...</p>}
  {post && (
    <>
      <h1>{post.title}</h1>
    </>
  )}
</div>;
```

## Css da pagina post individual

Primeiro terminando a estrutura do HTML

```tsx
<div>
  {loading && <p>Carregando...</p>}
  {post && (
    <>
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} />
      <p>{post.body}</p>
      <h3>Este post trata sobre</h3>
      <div className={styles.tags}>
        {[
          post.tagsArray.map((tag) => (
            <p key={tag}>
              <span>#</span>
              {tag}
            </p>
          )),
        ]}
      </div>
    </>
  )}
</div>
```

etilizando

```css
.post_container {
  text-align: center;
}

.post_container h3 {
  margin-bottom: 0.2em;
}

.post_container .tags {
  display: flex;
  justify-content: center;
}

.tags p {
  margin-right: 1em;
}

.tags span {
  font-weight: bold;
}
```

## Estruturando o Dashboard

Dashboard.js

```tsx
//Importando o Link
import { Link } from "react-router-dom";
// importando alguns hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

//Pegando o usuario
const { user } = useAuthValue();
//pegando o id do usuario
const uid = user.uid;

//Posts do usuario
const posts = []

//estruturando o HTML
 <div>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Nao foram encontados posts</p>
          <Link to={"/posts/create"} className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
```

## Exibindo os posts do usuario na Dashboard

Vamos no useFetchDocuments.js e incluir mais uma condifcao de query

```tsx
q = await query(
  collectionRef,
  where("uid", "==", uid),
  orderBy("createdAt", "desc")
);
```

vamos agora na dashboard

```tsx

apagamos o const posts = []
e colocamos no luigar
 const { document: posts, loading } = useFetchDocuments("posts", null, uid);

  {posts &&
        posts.map((post) => (
          <div>
            <h3>{post.title}</h3>
          </div>
        ))}

```

## Esruturando o Dashboard

```tsx
//quando nao tem posts
<div>
  <h2>Dashboard</h2>
  <p>Gerencie os seus posts</p>
  {loading && <p>Carregando...</p>}
  {posts && posts.length === 0 ? (
    <div className={styles.noposts}>
      <p>Nao foram encontados posts</p>
      <Link to={"/posts/create"} className="btn">
        Criar primeiro post
      </Link>
    </div>
  ) : (
    //quando tem postes
    <>
      <div>
        <span>Titulo</span>
        <span>Acoes</span>
      </div>
      {posts.map((post) => (
        <div key={post.id}></div>
      ))}
    </>
  )}
</div>
```

```js
import React from "react";
import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

//hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

export const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { document: posts, loading } = useFetchDocuments("posts", null, uid);
  //excluir pega pelo id
  const deleteDocument = (id) => {};

  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>

      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Nao foram encontados posts</p>
          <Link to={"/posts/create"} className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <>
          <div>
            <span>Titulo</span>
            <span>Acoes</span>
          </div>
          {posts &&
            posts.map((post) => (
              <div>
                <p>{post.title}</p>
                <div>
                  <Link to={`/posts/${post.id}`} className={"btn btn-outline"}>
                    Ver
                  </Link>
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className={"btn btn-outline"}
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => deleteDocument(post.id)}
                    className={"btn btn-outline btn-danger"}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
```

## CSS da dashboard

Dashboard.module.css

```css
.dashboard {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dashboard h2 {
  font-size: 2.2em;
  margin-bottom: 0.5em;
}

.dashboard p {
  color: #aaa;
  margin-bottom: 1em;
}

.post_header,
.post_row {
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 10px;
}

.post_header {
  font-weight: bold;
  border-bottom: 2px solid #ccc;
}

.post_row {
  align-items: center;
  border-bottom: 1px solid #eee;
}

.post_row p {
  color: #000;
}

.post_row button,
.post_row a {
  margin: 0 5px;
  height: 30px;
  width: 100px;
  font-size: 0.7em;
}
```

colocanso as classes no HTML

```tsx

 <div className={styles.dashboard}>
      // <h2>Dashboard</h2>
      // <p>Gerencie os seus posts</p>

      // {posts && posts.length === 0 ? (
      //   <div className={"noposts"}>
      //     <p>Nao foram encontados posts</p>
      //     <Link to={"/posts/create"} className="btn">
      //       Criar primeiro post
      //     </Link>
      //   </div>
      // ) : (
      //   <>
          <div className={styles.post_header}>
          //   <span>Titulo</span>
          //   <span>Acoes</span>
          // </div>
          // {posts &&
          //   posts.map((post) => (
              <div key={post.id} className={styles.post_row}>

```

## Excluindo o post

Criando um hook para o delete

hooks/useDeleteDocument.js

copiamos um pouco do useInsertDocument.js

```tsx
import { doc, deleteDoc } from "firebase/firestore";

const deleteReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "DELETED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useDeleteDocument = (docCollection) => {
  const [response, dispatch] = useReducer(deleteReducer, {
    loading: null,
    error: null,
  });
  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action) => {
    if (cancelled) {
      dispatch(action);
    }
  };

  const deleteDocument = async (id) => {
    checkCancelBeforeDispatch({
      type: "LOADING",
    });

    try {
      const deletedDocment = await deleteDoc(doc(db,docCollection, id));

      checkCancelBeforeDispatch({
        type: "DELETED_DOC",
        payload: deletedDocment,
      });
    } catch (error) {
      checkCancelBeforeDispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };

    useEffect(() => {
    return () => setCancelled(true);
  }, [setCancelled]);

  return { deleteDocument, response };
```

Voltamos para a dashboard

```tsx
//importamos o hook  useDeletedDocument
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

//usamos o hook
const { deleteDocument } = useDeleteDocument("posts", uid);
```

## Criando a pagina de editar

Vamos copiar o Create post

Criamos a rota no App.js

```tsx
<Route
  path={"/posts/edit/:id"}
  element={user ? <EditPost /> : <Navigate to={"/login"} />}
/>
```

No EditPost.js

```tsx
//incluimos
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useNavigate, useParams } from "react-router-dom";

// pegamos o id pelo params
const { id } = useParams();
//chamamos o nosso useFetchDocument
const { document: post } = useFetchDocument("posts", id);

//usamos o useEffect para preencher os dados em cada inputs
useEffect(() => {
  if (post) {
    setTitle(post.title);
    setBody(post.body);
    setImage(post.image);

    const textTags = post.tagsArray.join(", ");

    setTags(textTags);
  }
}, [post]);

//mudamos as escritas de create para edit

// para nao dar erro definimos a tag post &&
{post && <> </>}

//fazendo o preview da imagem
 <p className={styles.preview_title}>Preview da imagem atual:</p>
            <img
              src={post.image}
              alt={post.title}
              className={styles.preview_image}
            />
//completo ficaria assim

import React, { useEffect, useState } from "react";
import styles from "./EditPost.module.css";

import { useAuthValue } from "../../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

export const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);

      const textTags = post.tagsArray.join(", ");

      setTags(textTags);
    }
  }, [post]);

  const { insertDocument, response } = useInsertDocument("posts");
  console.log(response);
  const { user } = useAuthValue();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    //Validando a imagem se e uma URL
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL");
    }

    //tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    //validamos se todos os valores vieram
    if (!title || !tags || !image || !body) {
      setFormError("Por favor, Preencha todos os campos!");
    }

    if (formError) {
      return;
    }

    // e colocamos a funcao insertDocument
    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });
    //redireciona a Home
    navigate("/");
  };

  return (
    <div className={styles.edit}>
      {post && (
        <>
          <h3>Editar post: {post.title}</h3>
          <p>Altere os dados do post como desejar</p>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Titulo:</span>
              <input
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                placeholder="Digite o titulo do post"
                required
              />
            </label>

            <label>
              <span>imagens:</span>
              <input
                name="image"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                id="title"
                placeholder="Insira uma imagem que representa seu post"
                required
              />
            </label>
            <p className={styles.preview_title}>Preview da imagem atual:</p>
            <img
              src={post.image}
              alt={post.title}
              className={styles.preview_image}
            />
            <label>
              <span>Conteudo:</span>
              <textarea
                name="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                id="title"
                placeholder="Insira o conteudo do post"
                required
              ></textarea>
            </label>

            <label>
              <span>Tags:</span>
              <input
                name="tags"
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                id="title"
                placeholder="Insira as tags separadas por virgula"
                required
              />
            </label>

            {!response.loading && <button className="btn">Editar</button>}
            {response.loading && (
              <button className="btn" disabled>
                Aguarde...
              </button>
            )}
            {response.error && <div className="error">{response.error}</div>}
            {formError && <div className="error">{formError}</div>}
          </form>
        </>
      )}
    </div>
  );
};



```
