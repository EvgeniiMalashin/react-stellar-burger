import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import loginStyles from "./login.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../services/actions/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onClickRegister() {
    navigate('/register', { replace: true });
  };

  function onClickForgotPassword() {
    navigate('/forgot-password', { replace: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
    navigate('/', { replace: true });
  };

  return (
    <div className={loginStyles.area}>
      <form className={loginStyles.container} onSubmit={handleSubmit}>
        <h2 className="text text_type_main-medium mb-6">Вход</h2>
        <EmailInput
          placeholder={"E-mail"}
          value={email}
          name={"email"}
          extraClass="mb-6"
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          name={"password"}
          value={password}
          extraClass="mb-6"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          extraClass="mb-20"

        >
          Войти
        </Button>
        <h3 className="text text_type_main-default text_color_inactive mb-4">
          Вы - новый пользователь?{" "}
          <span className={loginStyles.span} onClick={onClickRegister}>
            Зарегистрироваться
          </span>
        </h3>
        <h3 className="text text_type_main-default text_color_inactive">
          Забыли пароль?{" "}
          <span className={loginStyles.span} onClick={onClickForgotPassword}>
            Восстановить пароль
          </span>
        </h3>
      </form>
    </div>
  );
}

export default Login;
