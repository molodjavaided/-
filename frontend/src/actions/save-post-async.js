import { request } from "../utils/request";
import { setPostData } from "./set-post-data";

export const savePostAsync = (id, newPostData) => async (dispatch) => {
    const saveRequest = id ?
    request(`/posts/${id}`, "PATCH", newPostData) :
    request('/posts', "POST", newPostData);

    const updatedPost = await saveRequest;
    dispatch(setPostData(updatedPost.data));
    return updatedPost.data;
}