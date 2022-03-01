import { useContext } from "react";
import { Context } from "../../context/MainContext";
import { useStates } from "../../hooks/useStates";

export const Sobre = ()=>{
  const {state} = useStates();
  return (
    <>
      <h1>Sobre {state.userInfo.name}</h1>
    </>
  )
}