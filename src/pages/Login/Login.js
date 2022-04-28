import React from "react";
import styles from "./Login.module.css";
import { db } from "../../firebase/config";

import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

export const Login = () => {
  const [displayEmail, setDisplayEmail] = useState("");
  const [displayPassword, setDisplayPassword] = useState("");
  const [error, setError] = useState("");

  const { error: authError, loading ,login} = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayEmail,
      displayPassword,
    };

    const res = login(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.login}>
      <h1>Fazer Login</h1>
      <p>Faça o login para poder utilizar o sistema</p>
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
  );
};
