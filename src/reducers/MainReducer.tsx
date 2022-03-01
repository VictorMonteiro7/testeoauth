import { MainReducerType } from "../Types/MainReducerType";
export type userReducerType = {
  id?: string;
  email?: string;
  photo?: string;
  name?: string;
};

export const initialState: userReducerType = {};

export const userReducer = (
  state: userReducerType,
  action: MainReducerType
) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload };
      break;
  }
  return state;
};
