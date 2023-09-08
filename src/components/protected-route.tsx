import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "../utils/hooks";


interface IProtectedRoute {
  component: JSX.Element,
  pass: boolean 
};

const ProtectedRoute = ({ component, pass }: IProtectedRoute) => {
  const location = useLocation();
  const userAuthState = useSelector((store) => store.user);

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




