import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useServerRequest } from "../../hooks";
import { Pagination, PostCard, Search } from "./components";
import { PAGINATION_LIMIT } from "../../constants";
import { debounce, getLastPageFromLinks } from "../../bff/utils";

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [shouldSearch, setShouldSearch] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  const requestServer = useServerRequest();

  useEffect(() => {
    requestServer("fetchPosts", searchPhrase, page, PAGINATION_LIMIT).then(
      ({ res: { posts, links } }) => {
        setPosts(posts);
        setLastPage(getLastPageFromLinks(links));
      }
    );
  }, [requestServer, page, shouldSearch]);

  const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 500), []);

  const onSearch = ({ target }) => {
    setSearchPhrase(target.value);
    startDelayedSearch(!shouldSearch);
  };

  return (
    <div className={className}>
      <div className="post-and-search">
        <Search searchPhrase={searchPhrase} onChange={onSearch} />
        {posts.length > 0 ? (
          <div className="post-list">
            {posts.map(
              ({ id, title, publishedAt, imageUrl, commentsCount }) => (
                <PostCard
                  key={id}
                  id={id}
                  title={title}
                  imageUrl={imageUrl}
                  publishedAt={publishedAt}
                  commentsCount={commentsCount}
                />
              )
            )}
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
