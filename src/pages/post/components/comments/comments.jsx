import { useState } from "react";
import styled from "styled-components";
import { Icon } from "../../../../components";
import { Comment } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../../../selectors";
import { addCommentAsync } from "../../../../actions";
import { useServerRequest } from "../../../../hooks";

const CommentsContainer = ({ className, comments, postId }) => {
  const [newComment, setNewComment] = useState("");
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();
  const requestServer = useServerRequest();

  const onNewCommentAdd = (userId, postId, content) => {
    dispatch(addCommentAsync(requestServer, userId, postId, content));

    setNewComment("");
  };

  return (
    <div className={className}>
      <div className="new-comment">
        <textarea
          name="comment"
          value={newComment}
          placeholder="Комментарий..."
          onChange={({ target }) => setNewComment(target.value)}
        ></textarea>
        <Icon
          id="fa-paper-plane-o"
          onClick={() => onNewCommentAdd(userId, postId, newComment)}
        />
      </div>

      <div className="comments">
        {comments.map(({ id, author, content, publishedAt }) => (
          <Comment
            key={id}
            postId={postId}
            id={id}
            author={author}
            content={content}
            publishedAt={publishedAt}
          />
        ))}
      </div>
    </div>
  );
};

export const Comments = styled(CommentsContainer)`
  width: 580px;
  margin: 0 auto;

  & .new-comment {
    display: flex;
    gap: 5px;
    padding: 10px;
    width: 100%;

    & textarea {
      padding: 10px;
      resize: none;
      width: 100%;
      height: 120px;
    }
  }

  .comments {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
