import { request } from "../utils/request";
import { setPostData } from "./set-post-data";

export const savePostAsync = (id, newPostData) => (dispatch) => {
    const saveRequest = id ?
    request(`/posts/${id}`, "PATCH", newPostData) :
    request(`/posts/${id}`, "PATCH", newPostData);

    return saveRequest.then((updatedPost) => {
        dispatch(setPostData(updatedPost.data))

        return updatedPost.data;
    });
}