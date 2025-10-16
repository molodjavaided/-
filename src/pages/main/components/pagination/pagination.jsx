import styled from "styled-components";
import { Button } from "../../../../components";

const PaginationContainer = ({ className, lastPage, page, setPage }) => {
  return (
    <div className={className}>
      <Button disabled={page === 1} onClick={() => setPage(1)}>
        В начало
      </Button>
      <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Предыдущая
      </Button>
      <div className="current-page">Страница: {page}</div>
      <Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
        Следующая
      </Button>
      <Button disabled={page === lastPage} onClick={() => setPage(lastPage)}>
        В конец
      </Button>
    </div>
  );
};

export const Pagination = styled(PaginationContainer)`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  padding: 0 20px;

  button {
    margin: 0 20px;
  }

  .current-page {
    display: flex;
    border: 1px solid #000;
    width: 100%;
    font-size: 18px;
    height: 40px;
    align-items: center;
    justify-content: center;
  }
`;
