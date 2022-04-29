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
  return (
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
        <div></div>
      )}

      {posts &&
        posts.map((post) => (
          <div>
            <h3>{post.title}</h3>
          </div>
        ))}
    </div>
  );
};
