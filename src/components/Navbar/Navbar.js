import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

export const Navbar = () => {
  const { user } = useAuthValue();

  return (
    <nav className={styles.navbar}>
      <NavLink to={"/"} className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.link_list}>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>

        {user && (
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
        )}

        {!user && (
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
        )}

        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
