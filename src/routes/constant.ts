import Home from "../screens/auth/home/home";
import Login from "../screens/non_auth/login/Login";

export const SCREEN  = {
    NON_AUTH : [
        {name : "Login", component : Login}
    ],
    AUTH : [
        {name : "HOME", component : Home}
    ]
}