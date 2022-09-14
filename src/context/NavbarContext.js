import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  page: "",
};

export const NavbarContext = createContext(INITIAL_STATE);

const NavbarReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NAVBAR":
      return action.payload;
    default:
      return state;
  }
};

export const NavbarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NavbarReducer, INITIAL_STATE);

  return (
    <NavbarContext.Provider
      value={{
        page: state.page,
        dispatch,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};



















