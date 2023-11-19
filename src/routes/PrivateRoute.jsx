import { useSelector } from "react-redux";
import LoginPage from "../pages/LoginPage";
import { useEffect } from "react";

export default function PrivateRoute({children}){

const {auth} =useSelector((state)=>state.userReducer)


    if(auth){
        return children
    }



return <LoginPage></LoginPage>
}