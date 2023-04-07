import {
    createBrowserRouter,
} from "react-router-dom";

import {SignUp, Login, Profile, ConfirmEmail, FindPassword, ChangePassword ,ConfirmPassword, ChangePasswordAfterLogin} from './pages'



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/signUp",
        element: <SignUp />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/email/confirm",
        element: <ConfirmEmail />,
    },
    {
        path: "/password/confirm",
        element: <ConfirmPassword />,
    },
    {
        path: "/find/password",
        element: <FindPassword />,
    },
    {
        path: "/change/password",
        element: <ChangePassword />,
    },
    {
        path: "/change/password/after",
        element: <ChangePasswordAfterLogin />,
    },
]);