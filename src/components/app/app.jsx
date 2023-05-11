import React from 'react';
import appStyles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getIngredients } from "../../utils/api";

function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    getIngredients()
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  },[])  
  return (
    <div className={appStyles.app}>
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerIngredients ingredient={data} />
        <BurgerConstructor ingredient={data} />
      </main>
    </div>
  );
}

export default App;