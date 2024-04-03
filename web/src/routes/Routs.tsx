import {
  BASE,
  ABOUT_US,
  REGISTER
} from '../consts/routes';
import {
    createBrowserRouter,
} from "react-router-dom";
import AboutUs from "../Components/AboutUs/AboutUs";
import Register from "../Components/Register/Register";

import Layout from "../layout";
import Home from "../Components/Home/Home";
import { PrivateRoute } from './PrivateRouts';

let router = createBrowserRouter([
    {
        path: BASE,
        Component() {
            return <Layout>
              <PrivateRoute> <Home/></PrivateRoute>
            </Layout>;
        },
    },
    {
        path: REGISTER,
        Component() {
            return <Layout>
                <Register />
            </Layout>;
        },
    },
    {
        path: ABOUT_US,
        Component() {
            return <Layout>
                <AboutUs/>
            </Layout>;
        },
    }
]);

export default router;
