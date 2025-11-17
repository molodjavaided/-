import { useEffect, useState } from "react";
import styled from "styled-components";
import { Pagination, PostCard, Search } from "./components";
import { PAGINATION_LIMIT } from "../../constants";
// import { debounce } from "../../bff/utils";
import { request } from "../../utils/request";

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  // const [shouldSearch, setShouldSearch] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    request(
      `/posts?search=${searchPhrase}&page=${page}&limit=${PAGINATION_LIMIT}`
    ).then(({ data: { posts, lastPage } }) => {
      setPosts(posts);
      setLastPage(lastPage);
    });
  }, [page, searchPhrase]);

  // const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 500), []);

  const onSearch = ({ target }) => {
    setSearchPhrase(target.value);
    // startDelayedSearch(!shouldSearch);
  };

  return (
    <div className={className}>
      <div className="post-and-search">
        <Search searchPhrase={searchPhrase} onChange={onSearch} />
        {posts.length > 0 ? (
          <div className="post-list">
            {posts.map(({ id, title, publishedAt, imageUrl, comments }) => (
              <PostCard
                key={id}
                id={id}
                title={title}
                imageUrl={imageUrl}
                publishedAt={publishedAt}
                commentsCount={comments.length}
              />
            ))}
          </div>
        ) : (
          <div className="no-posts-found">Статья не найдены</div>
        )}
      </div>

      {lastPage > 1 && posts.length > 0 && (
        <Pagination setPage={setPage} lastPage={lastPage} page={page} />
      )}
    </div>
  );
};

export const Main = styled(MainContainer)`
  dispalay: flex;
  flex-direction: column;
  justify-content: space-between;

  .post-list {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 20px 80px;
  }

  .no-posts-found {
    font-size: 20px;
    text-align: center;
    margin: 40px 0;
  }
`;
