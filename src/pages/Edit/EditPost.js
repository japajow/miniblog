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
