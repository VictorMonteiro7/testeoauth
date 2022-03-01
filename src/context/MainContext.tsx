import { createContext, useReducer } from "react";
import {
  initialState,
  userReducerType,
  userReducer,
} from "../reducers/MainReducer";
import { MainReducerType } from "../Types/MainReducerType";

// type initialStateType = {
//   userInfo: userReducerType;
// };

// type contextType = {
//   state: initialStateType;
//   dispatch: React.Dispatch<any>;
// };

// const initialStateContext = {
//   userInfo: initialState,
// };

// export const ContextTeste = createContext<contextType>({
//   state: initialStateContext,
//   dispatch: () => null,
// });

// const mainReducer = (state: initialStateType, action: MainReducerType) => {
//   userInfo: userReducer(state.userInfo, action);
// };

// export const ProviderContext = () => {
//   const [state, dispatch] = useReducer(mainReducer, initialStateContext);
//   return (
//     <ContextTeste
//   )
// };

type initialStateType = {
  userInfo: userReducerType;
};
type contextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
};

const initialStateDois = {
  userInfo: initialState,
};

export const Context = createContext<contextType>({
  state: initialStateDois,
  dispatch: () => null,
});

const mainReducer = (state: initialStateType, action: MainReducerType) => ({
  userInfo: userReducer(state.userInfo, action),
});

export const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialStateDois);
  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
