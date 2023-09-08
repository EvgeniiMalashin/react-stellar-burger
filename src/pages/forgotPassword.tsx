import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "../utils/hooks";
import { useNavigate } from "react-router-dom";
import forgotpasswordStyles from "./forgotPassword.module.css";
import { resetPassword } from "../services/actions/password";
import { useState } from "react";


const ForgotPassword: React.FC = (): JSX.Element | null => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetPassword(email));
    navigate('/reset-password', { replace: true });
  };
  const handleLogin = () => {
    navigate('/login', { replace: true });
  };

  return (
    <div className={forgotpasswordStyles.area}>
      <form className={forgotpasswordStyles.container} onSubmit={handleReset}>
        <h2 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h2>
        <EmailInput
          placeholder={"Укажите e-mail"}
          extraClass="mb-6"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          extraClass="mb-20"
        >
          Восстановить
        </Button>
        <h3 className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?{" "}
          <span className={forgotpasswordStyles.span} onClick={handleLogin}>
            Войти
          </span>
        </h3>
      </form>
    </div>
  );
}

export default ForgotPassword;
