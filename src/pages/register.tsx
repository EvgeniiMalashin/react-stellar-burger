import { Input, Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import registerStyles from "./register.module.css";
import { useNavigate } from "react-router-dom";
import { newUser } from "../services/actions/user";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { AppDispatch } from "../services/store";

const Register = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(newUser(email, password, name));
    navigate('/', { replace: true });
  };

  function onClickLogin() {
    navigate('/login', { replace: true });
  };

  return (
    <div className={registerStyles.box}>
      <form className={registerStyles.container} onSubmit={handleRegister}>
        <h2 className="text text_type_main-medium mb-6">Регистрация</h2>
        <Input
          type={"text"}
          placeholder={"Имя"}
          extraClass="mb-6"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <EmailInput
          placeholder={"E-mail"}
          extraClass="mb-6"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          name={"password"}
          extraClass="mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          extraClass="mb-20"
        >
          Зарегистрироваться
        </Button>
        <h3 className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?{" "}
          <span className={registerStyles.span} onClick={onClickLogin}>
            Войти
          </span>
        </h3>
      </form>
    </div>
  );
}

export default Register;
