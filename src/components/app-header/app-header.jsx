import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import appHeaderStyles from "./app-header.module.css";


import { NavLink, useMatch} from "react-router-dom";


function AppHeader() {
  const style = ({ isActive }) =>
    isActive
      ? `${appHeaderStyles.link} text text_type_main-default text_color_primary `
      : `${appHeaderStyles.link} text text_type_main-default text_color_inactive `
  const homeLink = useMatch("/");
  const profileLink = useMatch("/profile");
  const orderFeedLink = useMatch("/order-feed");

  return (
    <header>
      <div className={appHeaderStyles.header}>
        <nav>
          <ul className={appHeaderStyles.list}>
            <li>
              <NavLink to="/" className={style}>
                <BurgerIcon type={homeLink ? "primary" : "secondary"}/>
                <p className={appHeaderStyles.text}>Конструктор</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/order-feed" className={style}>
                <ListIcon type={orderFeedLink ? "primary" : "secondary"}/>
                <p className={appHeaderStyles.text}>Лента заказов</p>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={appHeaderStyles.logo}>
          <Logo />
        </div>
        <NavLink to="/profile" className={style}>
          <ProfileIcon type={profileLink ? "primary" : "secondary"}/>
          <p className={appHeaderStyles.text}>Личный кабинет</p>
        </NavLink>
      </div>
    </header>
  );
}

export default AppHeader;