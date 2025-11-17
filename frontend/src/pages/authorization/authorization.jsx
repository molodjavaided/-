import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthFormError, Button, H2, Input, StyledLink } from "../../components";
import { setUser } from "../../actions";
import { selectUserRole } from "../../selectors";
import { ROLE } from "../../constants";
import { useResetForm } from "../../hooks";
import { request } from "../../utils/request";

const authFormSchema = yup.object().shape({
  login: yup
    .string()
    .required("Запоните логин")
    .matches(/^\w+$/, "Невереный логин. Допускаются только буквы и цифры")
    .min(3, "Неверный логин. Минимум 3 символа")
    .max(15, "Неверный логин. Максимум 15 символа"),
  password: yup
    .string()
    .required("Заполните пароль")
    .matches(/^[\w]+$/, "Неверно заполнен пароль. Допускаются буквы, цифры")
    .min(6, "Неверный пароль. Минимум 6 символа")
    .max(30, "Неверный пароль. Максимум 30 символа"),
});
const AuthorizationContainer = ({ className }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(authFormSchema),
  });

  const [serverError, setServerError] = useState(null);

  const dispatch = useDispatch();
  const roleId = useSelector(selectUserRole);

  useResetForm(reset);

  const onSubmit = ({ login, password }) => {
    request("/login", "POST", { login, password }).then(({ error, user }) => {
      if (error) {
        setServerError(`Ошибка запроса: ${error}`);
        return;
      }
      dispatch(setUser(user));
      sessionStorage.setItem("userData", JSON.stringify(user));
    });
  };

  const formError = errors?.login?.message || errors?.password?.message;
  const errorMessage = formError || serverError;

  if (roleId !== ROLE.GUEST) {
    return <Navigate to="/" />;
  }

  return (
    <div className={className}>
      <H2>Авторизация</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Логин..."
          {...register("login", {
            onchange: () => setServerError(null),
          })}
        />
        <Input
          type="password"
          placeholder="Пароль..."
          {...register("password", {
            onchange: () => setServerError(null),
          })}
        />
        <Button type="submit" disabled={!!formError}>
          Авторизоваться
        </Button>
        {errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
        <StyledLink to="/register">Регистрация</StyledLink>
      </form>
    </div>
  );
};

export const Authorization = styled(AuthorizationContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 260px;
  }
`;
