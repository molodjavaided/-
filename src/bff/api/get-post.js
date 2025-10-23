import { transformPost } from '../transformers'

export const getPost = async (postId) =>
    fetch(`http://localhost:3000/posts/${postId}`)
    .then((responce) => {
        if (responce.ok) {
            return responce;
        }

        const error = responce.status === 404 ? 'Такая страница не существует' : "Что то пошло не так. Попробуйте позже"

        return Promise.reject(error);
    })
    .then((loadedPost) => loadedPost.json())
    .then((loadedPost) => loadedPost && transformPost(loadedPost));
