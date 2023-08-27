import { Input, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import resetpasswordStyles from "./resetpassword.module.css";
import { newPassword } from "../services/actions/password";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../services/store";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const email = useSelector((store: RootState) => store.password.email);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const resetPassHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(newPassword(password, token));
  };
  const onClickLogin = () => {
    navigate('/login', { replace: true });
  };

  if (email === "" || email === null) {
    return <Navigate to={'/forgot-password'} replace={true} />;
  }

  return (
    <div className={resetpasswordStyles.area}>
      <form className={resetpasswordStyles.container} onSubmit={resetPassHandler}>
        <h2 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h2>
        <PasswordInput
          name={"password"}
          placeholder={"Введите новый пароль"}
          extraClass="mb-6"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          extraClass="mb-6"
          onChange={(e) => setToken(e.target.value)}
        />
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          extraClass="mb-20"
        >
          Сохранить
        </Button>
        <h3 className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?{" "}
          <span className={resetpasswordStyles.span} onClick={onClickLogin}>
            Войти
          </span>
        </h3>
      </form>
    </div>
  );
}

export default ResetPassword;
