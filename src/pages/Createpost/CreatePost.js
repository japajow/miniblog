import React, { useState } from "react";
import styles from "./CreatePost.module.css";

import { useAuthValue } from "../../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";

export const CreratePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { error, loading } = useAuthentication();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.create}>
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
    </div>
  );
};
