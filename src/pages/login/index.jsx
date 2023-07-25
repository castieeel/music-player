import * as S from "../../styled-components/login.style";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import logo from "../../assets/img/logo_dark.png";

import {
  useGetTokenMutation,
  useLoginMutation,
  useTokenRefreshMutation,
} from "../../services/user";

import {
  setAccess,
  setLogin,
  setLogout,
  setRefresh,
} from "../../store/slices/user";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [login, { isLoading: isLoadingLogin }] = useLoginMutation();
  const [getToken, { isError: isErrorGetToken }] = useGetTokenMutation();
  const [tokenRefresh] = useTokenRefreshMutation();
  const [authError, setAuthError] = useState("");

  const getAccessToken = (string) => {
    tokenRefresh({ refresh: string })
      .unwrap()
      .then((data) => {
        dispatch(setLogin({ id: localStorage.getItem("userID") }));
        dispatch(setRefresh({ refresh: string }));
        dispatch(setAccess({ access: data.access }));
        navigate("/");
      })
      .catch((e) => {
        setLogout();
        localStorage.clear();
        console.error(e.data.detail);
      });
  };

  useEffect(() => {
    const storageRefresh = localStorage.getItem("refresh");
    if (!storageRefresh) return;
    getAccessToken(storageRefresh);
  }, []);

  const onFormSubmit = async (fields) => {
    setAuthError("");
    try {
      const responseLogin = await login({ ...fields }).unwrap();
      dispatch(setLogin({ id: responseLogin.id }));
      localStorage.setItem("userID", responseLogin.id);

      const responseToken = await getToken({ ...fields });
      const tokenData = responseToken.data;
      // console.log('tokenData', tokenData)
      dispatch(setRefresh({ refresh: tokenData.refresh }));
      dispatch(setAccess({ access: tokenData.access }));
      localStorage.setItem("refresh", tokenData.refresh);
      navigate("/");
    } catch (e) {
      console.error(e.data.detail);
      setAuthError(e.data.detail);
    }
  };

  const handleRegistrationButtonClick = () => {
    navigate("/registration");
  };

  return (
    <S.Popup>
      <S.Wrapper>
        <S.Logo src={logo} alt="logo" />
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <S.Fields>
            <S.Input
              placeholder="Логин (email)"
              type="email"
              required
              {...register("email")}
            />
            <S.Input
              placeholder="Пароль"
              type="password"
              required
              {...register("password")}
            />
          </S.Fields>
          <S.Info>
            {isLoadingLogin && <div>Данные отправлены...</div>}
            <div>{authError}</div>
            {isErrorGetToken && <div>Ошибка получения токена.</div>}
          </S.Info>
          <S.Buttons>
            <S.Button type="submit" className="primary">
              Войти
            </S.Button>
            <S.Button
              type="button"
              onClick={handleRegistrationButtonClick}
              className="transparent"
            >
              Зарегистрироваться
            </S.Button>
          </S.Buttons>
        </form>
      </S.Wrapper>
    </S.Popup>
  );
};
