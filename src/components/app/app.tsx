import { useEffect } from "react";
import { useDispatch } from "../../utils/hooks";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import appStyles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import { getIngredients } from "../../utils/getIngredients";
import { Home, NotFound, Login, Register, Profile, ForgotPassword, ResetPassword, IngredientPage, OrdersFeed, FeedOrder } from "../../pages/index";
import ProtectedRoute from "../protected-route";
import { getCookie } from "../../utils/cookie";
import { refreshToken, getUser } from "../../services/actions/user";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import FeedOrderDetails from "../feed-order-details/feed-order-details";


function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state?.background;
  let token = localStorage.getItem("refreshToken");
  const cookie = getCookie("token");
  
  
  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUser(token));
  }, [dispatch]);

  useEffect(() => {
    if (!cookie && token) {
      dispatch(refreshToken());
    }
    if (cookie && token) {
      dispatch(getUser(token));
    }
  }, [dispatch, cookie, token]);

  const closeModal = () => {
    navigate(-1);
  };

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<ProtectedRoute pass={false} component={<Login />} />} />
        <Route path="/register" element={<ProtectedRoute pass={false} component={<Register />} />} />
        <Route path="/profile" element={<ProtectedRoute pass={true} component={<Profile pass={true}/>} />} />
        <Route path="/profile/orders" element={<ProtectedRoute pass={true} component={<Profile pass={false}/>} />} />
        <Route path="/forgot-password" element={<ProtectedRoute pass={false} component={<ForgotPassword />} />} />
        <Route path="/reset-password" element={<ProtectedRoute pass={false} component={<ResetPassword />} />} />
        <Route path="/ingredients/:id" element={<IngredientPage />} />
        <Route path="/feed" element={<OrdersFeed />} />
        <Route path="/feed/:id" element={<FeedOrder />} />
        <Route path="/profile/orders/:id" element={<FeedOrder />} />
      </Routes>
      {!!background && (
        <Routes>
          <Route path="/ingredients/:id" element={<Modal onClose={closeModal} title="Детали ингредиента"><IngredientDetails /></Modal>} />
          <Route path="/feed/:id" element={<Modal onClose={closeModal} title="" ><FeedOrderDetails /></Modal>} /> 
          <Route path="/profile/orders/:id" element={<Modal onClose={closeModal} title=""><FeedOrderDetails /></Modal>} />
        </Routes>
      )}
    </div>
  );
}

export default App;