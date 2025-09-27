import { addUser, getUser } from "../api";
import { sessions } from "../sessions";

export const register = async (registerLogin, registerPassword) => {
  const existedUser = await getUser(registerLogin);

  if (existedUser) {
    return {
      error: "Такой пользователь уже существует",
      res: null,
    };
  }

  const user = await addUser(registerLogin, registerPassword);

  return {
    error: null,
    res: {
      id: user.id,
      login: user.login,
      roleId: user.role_id,
      session: sessions.create(user),
    },
  };
};
