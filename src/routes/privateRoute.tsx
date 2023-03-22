import { Navigate } from "react-router-dom";

type PrivateRoutesParams = {
  children: JSX.Element;
};

const defineIfApliccationShowPrivateRoutes = "true";

const PrivateRoute = ({ children }: PrivateRoutesParams): JSX.Element => {
  if (defineIfApliccationShowPrivateRoutes) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
