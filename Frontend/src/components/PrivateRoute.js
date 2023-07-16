import { Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';

const PrivateRoute = ({
  isAllowed,
  redirectPath = '/login',
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath}  />;
  }

  return children ? children : <Login/>;
};



export default PrivateRoute;
