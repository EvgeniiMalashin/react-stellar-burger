import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import appHeaderStyles from "./app-header.module.css";

function AppHeader() {
  return (
    <header>
      <div className={appHeaderStyles.header}>
        <nav>
          <ul className={appHeaderStyles.list}>
            <li>
              <a href="#burger-constructor" className={appHeaderStyles.link}>
                <BurgerIcon />
                <p className="text text_type_main-default text_color_primary">Конструктор</p>
              </a>
            </li>
            <li>
              <a href="#order-feed" className={appHeaderStyles.link}>
                <ListIcon />
                <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
              </a>
            </li>
          </ul>
        </nav>
        <div className={appHeaderStyles.logo}>
          <Logo />
        </div>
        <a href="#personal-account" className={appHeaderStyles.link}>
          <ProfileIcon />
          <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
        </a>
      </div>
    </header>
  );
}

export default AppHeader;