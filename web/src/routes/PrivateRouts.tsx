import { Navigate } from 'react-router-dom';
import {useBusinessLogic} from "../hooks";
import {ABOUT_US} from "../consts/routes";

export const  PrivateRoute = ({ children }:any) => {
    const {isLoggedIn} = useBusinessLogic()
    if (!isLoggedIn) {
        return <Navigate to={ABOUT_US} replace />;
    }

    return children;
}