import styles from "./Search.module.css";

import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
import { PostDetails } from "../../components/PostDetails/PostDetails";
import { Link } from "react-router-dom";

export const Search = () => {
  const query = useQuery();
  const search = query.get("q");
  const { document: posts } = useFetchDocuments("posts", search);
  return (
    <div className={styles.search_container}>
      <h2>Search </h2>
      <div>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Nenhum posts encontrado para esta pesquisa</p>
            <Link to={"/"} className={"btn btn-dark"}>
              Voltar
            </Link>
          </div>
        )}
        {posts &&
          posts.map((post) => <PostDetails key={post.id} post={post} />)}
      </div>
    </div>
  );
};
