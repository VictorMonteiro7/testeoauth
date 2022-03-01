import { Home } from "../../Pages/Home/index";
import { useRoutes } from "react-router-dom";
import { Sobre } from "../../Pages/Sobre";
import { useContext } from "react";
import { Context } from "../../context/MainContext";

export const Routes = ()=>{
  const {state} = useContext(Context);
  return (
    useRoutes([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: state.userInfo.id ? <Sobre /> : <Home />,
      }
    ])
  )
}
