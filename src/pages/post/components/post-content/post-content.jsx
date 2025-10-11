import styled from "styled-components";
import { H2, Icon } from "../../../../components";

const PostContentContainer = ({
  className,
  post: { id, title, imageUrl, content, publishedAt },
}) => {
  return (
    <div className={className}>
      {imageUrl && <img src={imageUrl} alt={title} />}
      <H2>{title}</H2>
      <div className="special-panel">
        <div className="published-at">
          <Icon id="fa-calendar-o" />
          {publishedAt}
        </div>
        <div className="buttons">
          <Icon id="fa-pencil-square-o" onClick={() => {}} />
          <Icon id="fa-trash-o" onClick={() => {}} />
        </div>
      </div>
      <div className="post-text">{content}</div>
    </div>
  );
};

export const PostContent = styled(PostContentContainer)`
  img {
    float: left;
    margin: 0 20px 20px 0;
  }

  .special-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: -20px 0 20px;
    font-size: 25px;
  }

  .published-at {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .buttons {
    display: flex;
    gap: 10px;
  }

  .post-text {
  }
`;
