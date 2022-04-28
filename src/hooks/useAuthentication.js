import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data) => {
    checkIsCancelled();

    setLoading(true);
    setError(null);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.displayEmail,
        data.displayPassword
      );

      await updateProfile(user, { displayName: data.displayName });
      setLoading(false);
      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail ja cadastrado";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde ";
      }
      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  //logout
  const logout = () => {
    checkIsCancelled();
    signOut(auth);
  };

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
        systemErrorMessage = "Usuário não existente, verifique novamente.";
      } else if (error.message.includes("wrong-password")) {
        systemErrorMessage = "Senha incorreta, verifique novamente.";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde ";
      }
      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { auth, createUser, error, loading, logout, login };
};
