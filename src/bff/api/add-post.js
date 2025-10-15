import { generateDate } from "../utils/generate-date";

export const addPost = ({ imageUrl, title, content }) =>
     fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            title: title,
            content: content,
            image_url: imageUrl,
            published_at: generateDate(),
        })
    }).then((createdPost) => createdPost.json())