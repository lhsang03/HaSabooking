import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./register.css";
import {
  faEye,
  faEyeSlash,
  faUser,
  faAt,
  faHotel,
} from "@fortawesome/free-solid-svg-icons";
import Picture1 from "../../assets/Picture1.png";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
  });

  const [errMessage, setErrMessage] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const validateEmail = (email) => {
    if (email) {
      if (
        email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        setErrMessage((prev) => ({ ...prev, email: "" }));
        return true;
      } else {
        setErrMessage((prev) => ({ ...prev, email: "Email is invalid!" }));
        return false;
      }
    }
  };

  const validatePassword = (password) => {
    if (password) {
      if (
        password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
      ) {
        setErrMessage((prev) => ({ ...prev, password: "" }));
        return true;
      } else {
        if (password.length < 8) {
          setErrMessage((prev) => ({
            ...prev,
            password: "At least 8 characters!",
          }));
          return false;
        } else {
          setErrMessage((prev) => ({
            ...prev,
            password: "Contain Upper, Lower, Number!",
          }));
          return false;
        }
      }
    }
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (confirmPassword) {
      if (password === confirmPassword) {
        setErrMessage((prev) => ({ ...prev, confirmPassword: "" }));
        return true;
      } else {
        setErrMessage((prev) => ({
          ...prev,
          confirmPassword: "Confirm password does not match!",
        }));
        return false;
      }
    }
  };

  const validatePhone = (phone) => {
    if (phone) {
      if (phone.match(/^\d{10}$/)) {
        setErrMessage((prev) => ({ ...prev, phone: "" }));
        return true;
      } else {
        setErrMessage((prev) => ({
          ...prev,
          phone: "Number phone is invalid!",
        }));
        return false;
      }
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    validateEmail(credentials.email);
    validatePassword(credentials.password);
    validateConfirmPassword(credentials.password, credentials.confirmPassword);
    validatePhone(credentials.phone);
    checkFieldRequired();
    if (
      validateEmail(credentials.email) &&
      validatePassword(credentials.password) &&
      validateConfirmPassword(
        credentials.password,
        credentials.confirmPassword
      ) &&
      validatePhone(credentials.phone)
    ) {
      try {
        await axios.post("/auth/register", credentials);
        navigate("/login");
      } catch (err) {
        if (err.response.data.message === "Username already exists!") {
          setErrMessage((prev) => ({
            ...prev,
            username: err.response.data.message,
            email: "",
          }));
        }
        if (err.response.data.message === "Email already exists!") {
          setErrMessage((prev) => ({
            ...prev,
            email: err.response.data.message,
          }));
        }
        if (err.response.data.message === "Number Phone already exists!") {
          setErrMessage((prev) => ({
            ...prev,
            username: "",
            phone: err.response.data.message,
          }));
        }
      }
    }

    addErrClass();
  };

  const checkFieldRequired = () => {
    const errItems = document.getElementsByClassName("lInput");
    for (let i = 0; i < 5; i++) {
      if (errItems[i].value === "") {
        setErrMessage((prev) => ({
          ...prev,
          [errItems[i].id]: "This field is required!",
        }));
      }
    }
  };

  const addErrClass = () => {
    const errItems = document.getElementsByClassName("lInput");
    const arrValueErr = Object.values(errMessage);
    for (let i = 0; i < 5; i++) {
      if (arrValueErr[i]) {
        errItems[i].classList.add("errInput");
      }
    }
  };

  const handleFocus = (e) => {
    e.target.classList.remove("errInput");
    setErrMessage((prev) => ({
      ...prev,
      [e.target.id]: "",
    }));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register">
      <div className="wrap">
        <div className="left">
          <div className="imgLeft">
            <img src={Picture1} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="lContainer">
            <FontAwesomeIcon className="logoregister" icon={faHotel} />
            <div className="registerHeader">Welcome!</div>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="reqInput">
              <div className="inputWrap">
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  onChange={handleChange}
                  className={errMessage.username ? "errInput lInput" : "lInput"}
                  value={credentials.username}
                  onFocus={handleFocus}
                />
                <FontAwesomeIcon className="symbol" icon={faUser} />
              </div>

              {errMessage.username ? (
                <span className="errMessage" id={errMessage.username}>
                  {errMessage.username}
                </span>
              ) : (
                <span className="dot">.</span>
              )}
              <div className="inputWrap">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  id="password"
                  onChange={handleChange}
                  className={errMessage.password ? "errInput lInput" : "lInput"}
                  value={credentials.password}
                  onFocus={handleFocus}
                />
                <FontAwesomeIcon
                  className="symbol"
                  icon={showPassword ? faEye : faEyeSlash}
                  onClick={handleShowPassword}
                />
              </div>
              {errMessage.password ? (
                <span className="errMessage" id={errMessage.password}>
                  {errMessage.password}
                </span>
              ) : (
                <span className="dot">.</span>
              )}

              <div className="inputWrap">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  onChange={handleChange}
                  className={
                    errMessage.confirmPassword ? "errInput lInput" : "lInput"
                  }
                  value={credentials.confirmPassword}
                  onFocus={handleFocus}
                />
                <FontAwesomeIcon
                  className="symbol"
                  icon={showPassword ? faEye : faEyeSlash}
                  onClick={handleShowPassword}
                />
              </div>
              {errMessage.confirmPassword ? (
                <span className="errMessage" id={errMessage.confirmPassword}>
                  {errMessage.confirmPassword}
                </span>
              ) : (
                <span className="dot">.</span>
              )}

              <div className="inputWrap">
                <input
                  type="text"
                  placeholder="Email"
                  id="email"
                  onChange={handleChange}
                  className={errMessage.email ? "errInput lInput" : "lInput"}
                  value={credentials.email}
                  onFocus={handleFocus}
                />
                <FontAwesomeIcon className="symbol" icon={faAt} />
              </div>
              {errMessage.email ? (
                <span className="errMessage" id={errMessage.email}>
                  {errMessage.email}
                </span>
              ) : (
                <span className="dot">.</span>
              )}

              <div className="inputWrap">
                <input
                  type="text"
                  placeholder="Phone"
                  id="phone"
                  onChange={handleChange}
                  className={errMessage.phone ? "errInput lInput" : "lInput"}
                  value={credentials.phone}
                  onFocus={handleFocus}
                />
              </div>
              {errMessage.phone ? (
                <span className="errMessage" id={errMessage.phone}>
                  {errMessage.phone}
                </span>
              ) : (
                <span className="dot">.</span>
              )}

              <button
                disabled={loading}
                onClick={handleClick}
                className="rButton"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
