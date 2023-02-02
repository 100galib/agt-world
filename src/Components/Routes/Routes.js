import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import LoginForm from "../Post-section/LoginForm";
import MyVerticallyCenteredModal from "../Post-section/MyVerticallyCenteredModal";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '/login',
                element: <LoginForm></LoginForm>
            },
            {
                path: "/register",
                element: <MyVerticallyCenteredModal></MyVerticallyCenteredModal>
            }
        ]
    }
])


export default routes;