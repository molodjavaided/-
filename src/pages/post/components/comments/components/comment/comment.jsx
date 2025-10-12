import styled from "styled-components";
import { Icon } from "../../../../../../components";
import { useDispatch } from "react-redux";
import {
  CLOSE_MODAL,
  openModal,
  removeCommentAsync,
} from "../../../../../../actions";
import { useServerRequest } from "../../../../../../hooks";

const CommentContainer = ({
  className,
  id,
  author,
  publishedAt,
  postId,
  content,
}) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();

  // const onCommentRemove = (id) => {
  //   console.log(id, CLOSE_MODAL, postId, requestServer);

  //   dispatch(
  //     openModal({
  //       text: "Удалить комментарий?",
  //       onConfirm: () => {
  //         dispatch(removeCommentAsync(requestServer, postId, id));
  //         dispatch(CLOSE_MODAL);
  //       },
  //       onCancel: () => dispatch(CLOSE_MODAL),
  //     })
  //   );
  // };

  const onCommentRemove = (id) => {
    dispatch(
      openModal({
        text: "Удалить комментарий?",
        onConfirm: () => {
          dispatch(removeCommentAsync(requestServer, postId, id));
          dispatch(CLOSE_MODAL);
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      })
    );
  };

  return (
    <div className={className}>
      <div className="comment">
        <div className="information-panel">
          <div className="author">
            <Icon id="fa-user-circle-o" onClick={() => {}} />
            {author}
          </div>
          <div className="published-at">
            <Icon id="fa-calendar-o" onClick={() => {}} />
            {publishedAt}
          </div>
        </div>
        <div className="content-text">{content}</div>
      </div>
      <Icon id="fa-trash-o" onClick={() => onCommentRemove(id)} />
    </div>
  );
};

export const Comment = styled(CommentContainer)`
  display: flex;
  gap: 5px;

  .comment {
    border: 1px solid #000;
    width: 100%;
    padding: 5px;
  }

  .information-panel {
    display: flex;
    justify-content: space-between;
  }

  .author {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .published-at {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  ${Icon} {
    padding: 5px;
  }
`;
