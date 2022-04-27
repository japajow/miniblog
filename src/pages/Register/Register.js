import React from "react";
import styles from "./Register.module.css";

import { useState, useEffect } from "react";

export const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p className="register">Crie seu usuario e compartilhe suas histórias</p>
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

        <button type="submit" className="btn">Cadastrar</button>
      </form>
    </div>
  );
};
