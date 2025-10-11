import styled from "styled-components";
import { Icon } from "../../../../../../components";

const CommentContainer = ({ className, id, author, publishedAt, content }) => {
  return (
    <div className={className}>
      <div className="comment">
        <div className="information-panel">
          <div className="author">
            <Icon id="fa-user-circle-o" onCkick={() => {}} />
            {author}
          </div>
          <div className="published-at">
            <Icon id="fa-calendar-o" onCkick={() => {}} />
            {publishedAt}
          </div>
        </div>
        <div className="content-text">{content}</div>
      </div>
      <Icon id="fa-trash-o" onCkick={() => {}} />
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
