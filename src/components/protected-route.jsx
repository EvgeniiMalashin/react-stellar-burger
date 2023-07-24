import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component, pass }) => {
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




