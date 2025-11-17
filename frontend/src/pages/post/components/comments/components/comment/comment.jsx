import styled from "styled-components";
import { Icon } from "../../../../../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  CLOSE_MODAL,
  openModal,
  removeCommentAsync,
} from "../../../../../../actions";
import { ROLE } from "../../../../../../constants";
import { selectUserRole } from "../../../../../../selectors";
import PropTypes from "prop-types";

const CommentContainer = ({
  className,
  id,
  author,
  publishedAt,
  postId,
  content,
}) => {
  const dispatch = useDispatch();
  const userRole = useSelector(selectUserRole);
  const onCommentRemove = (id) => {
    dispatch(
      openModal({
        text: "Удалить комментарий?",
        onConfirm: () => {
          dispatch(removeCommentAsync(postId, id));
          dispatch(CLOSE_MODAL);
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      })
    );
  };

  const isAdminOnModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);

  return (
    <div className={className}>
      <div className="comment">
        <div className="information-panel">
          <div className="author">
            <Icon id="fa-user-circle-o" inactive={true} />
            {author}
          </div>
          <div className="published-at">
            <Icon id="fa-calendar-o" inactive={true} />
            {publishedAt}
          </div>
        </div>
        <div className="content-text">{content}</div>
      </div>
      {isAdminOnModerator && (
        <Icon id="fa-trash-o" onClick={() => onCommentRemove(id)} />
      )}
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

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
};
