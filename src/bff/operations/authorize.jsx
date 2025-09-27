import { getUser } from "../api";
import { sessions } from "../sessions";

export const authorize = async (authorizeLogin, authorizePassword) => {
  const user = await getUser(authorizeLogin);

  if (!user) {
    return {
      error: "Такой пользователь не найден",
      res: null,
    };
  }

  const { id, login, password, roleId } = user;

  if (authorizePassword !== password) {
    return {
      error: "Неверный пароль",
      res: null,
    };
  }

  return {
    error: null,
    res: {
      id,
      login,
      roleId,
      session: sessions.create(user),
    },
  };
};
