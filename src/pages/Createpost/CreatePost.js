import React, { useState } from "react";
import styles from "./CreatePost.module.css";

import { useAuthValue } from "../../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useNavigate } from "react-router-dom";

export const CreratePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

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
            type="text"
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

        {!response.loading && <button className="btn">Cadastrar</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {response.error && <div className="error">{response.error}</div>}
        {formError && <div className="error">{formError}</div>}
      </form>
    </div>
  );
};
