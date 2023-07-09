import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import appStyles from "./app.module.css";
import AppHeader from "../app-header/app-header";

import { getIngredients } from "../../utils/getIngredients";

import { Home, NotFound, Login, Register, Profile } from "../../pages/index";




function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={appStyles.app}>
      
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;