import { transformUser } from "../transformers"

export const getUsers = () => fetch('http://localhost:3000/users').then((loadedUsers) => loadedUsers.json()).then((loadedUser) => loadedUser && loadedUser.map(transformUser))