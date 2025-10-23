import { getPost } from "../api";
import { getPostCommentsWidthAuthor } from "../utils";

export const fetchPost = async (postId) => {
  let post;
  let error;

  try {
    post = await getPost(postId);
  } catch (postError) {
    error = postError;
  }

  if (error) {
    return {
      error,
      res: null,
    };
  }

  const commenWithAuthor = await getPostCommentsWidthAuthor(postId);

  return {
    error: null,
    res: {
      ...post,
      comments: commenWithAuthor,
    },
  };
};
