import { addCommentApi, getPost } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";
import { getPostCommentsWidthAuthor } from "../utils";

export const addPostComment = async (hash, userId, postId, content) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

  const access = await sessions.access(hash, accessRoles);

  if (!access) {
    return {
      error: "Доступ запрещен",
      res: null,
    };
  }

  await addCommentApi(userId, postId, content);

  const post = await getPost(postId);

  const commenWithAuthor = await getPostCommentsWidthAuthor(postId);

  return {
    error: null,
    res: {
      ...post,
      comments: commenWithAuthor,
    },
  };
};
