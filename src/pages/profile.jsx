import profileStyles from "./profile.module.css";
import { useNavigate, useMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, userLogout, patchUser } from "../services/actions/user";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import FeedProfile from "../components/feed-profile/feed-profile";

const Profile = ({ pass }) => {
  const profileLink = useMatch("/profile");
  const profileOrdersLink = useMatch("/profile/orders");
  const [activeButton, setActiveButton] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((store) => store.user.refreshToken);
  const userName = useSelector((store) => store.user.name);
  const userEmail = useSelector((store) => store.user.email);
  
  useEffect(() => {
    dispatch(getUser(token));
    setName(userName);
    setEmail(userEmail);
    setPassword("******");
  }, []);

  const handleOrdersClick = () => {
    navigate('/profile/orders', { replace: true });
  };
  const handleInfoClick = () => {
    navigate('/profile', { replace: true });
  };
  const handleExitClick = () => {
    dispatch(userLogout());
    navigate('/login', { replace: true });
  };

  const handleCancel = () => {
    setName(userName);
    setEmail(userEmail);
    setActiveButton(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(patchUser(email, name));
  };

  return (
    <div>
      <div className={profileStyles.profileContainer}>
        <div>
          <div
            className={`${profileLink ? " " : "text_color_inactive"
              } ${profileStyles.menu} text text_type_main-medium `}
            onClick={handleInfoClick}
          >
            Профиль
          </div>
          <div
            className={`${profileOrdersLink ? " " : "text_color_inactive"
              } ${profileStyles.menu} text text_type_main-medium  `}
            onClick={handleOrdersClick}
          >
            История заказов
          </div>
          <div
            className={`${"text_color_inactive"
              } ${profileStyles.menu} text text_type_main-medium mb-20`}
            onClick={handleExitClick}
          >
            Выход
          </div>
          <p className={`${profileStyles.text} text text_type_main-small`}>
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
        {pass ? (
          <form onSubmit={onSubmit}>
            <Input
              type={"text"}
              placeholder={"Имя"}
              onChange={(e) => setName(e.target.value)}
              icon={activeButton === "name" ? "CloseIcon" : "EditIcon"}
              value={name}
              name={"name"}
              error={false}
              onIconClick={() => setActiveButton("name")}
              errorText={"Ошибка"}
              size={"default"}
              extraClass="mb-4"
            />
            <Input
              type={"email"}
              placeholder={"Логин"}
              onChange={(e) => setEmail(e.target.value)}
              icon={activeButton === "email" ? "CloseIcon" : "EditIcon"}
              value={email}
              name={"email"}
              error={false}
              onIconClick={() => setActiveButton("email")}
              errorText={"Ошибка"}
              size={"default"}
              extraClass="mb-4"
            />
            <Input
              type={"text"}
              placeholder={"Пароль"}
              onChange={(e) => setPassword(e.target.value)}
              icon={activeButton === "password" ? "CloseIcon" : "EditIcon"}
              value={password}
              name={"password"}
              error={false}
              onIconClick={() => setActiveButton("password")}
              errorText={"Ошибка"}
              size={"default"}
              extraClass="mb-4"
            />
            {activeButton && (
              <div className={profileStyles.buttonContainer}>
                <Button
                  htmlType="button"
                  type="secondary"
                  size="large"
                  extraClass="mb-20"
                  onClick={() => handleCancel()}
                >
                  Отмена
                </Button>
                <Button
                  htmlType="submit"
                  type="primary"
                  size="large"
                  extraClass="mb-20"
                >
                  Сохранить
                </Button>
              </div>
            )}
          </form>) : (
          <FeedProfile />
        )}
      </div>
    </div>
  );
};

export default Profile;
