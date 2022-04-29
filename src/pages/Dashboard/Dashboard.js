import React from "react";
import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

import { useDeleteDocument } from "../../hooks/useDeleteDocument";

//hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

export const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { document: posts, loading } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts", uid);

  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>

      {posts && posts.length === 0 ? (
        <div className={"noposts"}>
          <p>Nao foram encontados posts</p>
          <Link to={"/posts/create"} className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.post_header}>
            <span>Titulo</span>
            <span>Acoes</span>
          </div>
          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.post_row}>
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
