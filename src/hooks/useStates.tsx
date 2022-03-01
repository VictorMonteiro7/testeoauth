import { useContext } from "react";
import { Context } from "../context/MainContext";

export const useStates = ()=>{
  return useContext(Context);
}