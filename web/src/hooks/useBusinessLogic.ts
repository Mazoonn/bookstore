import { useSelector } from "react-redux";
import {RootState} from "../store";

export const useBusinessLogic = () => {
  const isLoggedIn = useSelector((state:RootState) => state.businessLogic.isLoggedIn);

  return {
    isLoggedIn,
  };
};
