import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { SearchContextProvider } from "./context/SearchContext";
import { NavbarContextProvider } from "./context/NavbarContext";
import axios from "axios";

axios.defaults.baseURL = "https://backendbooking.herokuapp.com/api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <NavbarContextProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </NavbarContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
