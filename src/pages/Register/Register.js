import { db } from "../../firebase/config";

import React from "react";
import styles from "./Register.module.css";

import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

export const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [displayEmail, setDisplayEmail] = useState("");
  const [displayPassword, setDisplayPassword] = useState("");
  const [displayConfirmPassword, setDisplayConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      displayEmail,
      displayPassword,
    };

    if (displayPassword != displayConfirmPassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }

    const res = await createUser(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p className="register">Crie seu usuario e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <span>Nome:</span>
          <input
            type="text"
            id="name"
            name="displayName"
            required
            placeholder="Nome do usuario"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>

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
        <label htmlFor="password">
          <span>Confirmação de senha:</span>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha"
            value={displayConfirmPassword}
            onChange={(e) => setDisplayConfirmPassword(e.target.value)}
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
    </div>
  );
};
