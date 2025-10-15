import styled from "styled-components";
import { Icon } from "../../../../components";
import { Link } from "react-router-dom";

const PostCardContainer = ({
  className,
  id,
  title,
  publishedAt,
  commentsCount,
  imageUrl,
}) => {
  return (
    <Link to={`/post/${id}`} className={className}>
      <img src={imageUrl} alt={title} />
      <div className="post-card-footer">
        <h4>{title}</h4>
        <div className="post-card-info">
          <div className="published-at">
            <Icon id="fa-calendar-o" inactive={true} />
            {publishedAt}
          </div>
          <div className="comments-count">
            <Icon id="fa-comment-o" inactive={true} />
            {commentsCount}
          </div>
        </div>
      </div>
    </Link>
  );
};

export const PostCard = styled(PostCardContainer)`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin: 20px;
  border: 1px solid #000;

  img {
    display: block;
    width: 100%;
  }

  .post-card-footer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-top: 1px solid #000;
  }
  .post-card-info {
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }

  .published-at {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .comments-count {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
