import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../services/store";

interface IProtectedRoute {
  component: any,
  pass: boolean 
};

const ProtectedRoute = ({ component, pass }: IProtectedRoute) => {
  const location = useLocation();
  const userAuthState = useSelector((store: RootState) => store.user);

  if (userAuthState.isLoggedIn && !pass) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />
  }

  if (!userAuthState.isLoggedIn && pass) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
}

export default ProtectedRoute;




