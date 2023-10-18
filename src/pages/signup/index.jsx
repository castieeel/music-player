import logo from "../../assets/img/logo_dark.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignupMutation } from "../../services/user";
import { useState } from "react";
import * as S from "../../styled-components/signup.styles";

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [signup] = useSignupMutation();
  const [regError, setRegError] = useState("");

  const onFormSubmit = (fields) => {
    setRegError("");
    if (fields.password !== fields.repeatPassword) {
      setRegError("Пароль не совпадает.");
      return;
    }
    signup({
      username: fields.username,
      password: fields.password,
      email: fields.username,
    })
      .unwrap()
      .then(() => {
        navigate("/login");
      })
      .catch(({ data }) => {
        let errorText = "";
        console.error(data);
        for (const key in data) {
          errorText += `${key} : ${data[key].join(" ")}\n`;
        }
        setRegError(errorText);
      });
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
              {...register("username")}
            />
            <S.Input
              placeholder="Пароль"
              type="password"
              required
              {...register("password")}
            />
            <S.Input
              placeholder="Повторите пароль"
              type="password"
              required
              {...register("repeatPassword")}
            />
          </S.Fields>
          <S.Info>{regError}</S.Info>
          <S.Buttons>
            <S.Button type="submit" className="primary">
              Зарегистрироваться
            </S.Button>
          </S.Buttons>
        </form>
      </S.Wrapper>
    </S.Popup>
  );
};
