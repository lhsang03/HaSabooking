import "./navbar.css";
import { Link } from "react-router-dom";
import { Children, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {
  faBars,
  faBed,
  faCartFlatbedSuitcase,
  faHome,
  faMessage,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import Logout from "../logout/Logout";
import { useEffect } from "react";
import { NavbarContext } from "../../context/NavbarContext";
import { SearchContext } from "../../context/SearchContext";

const Navbar = () => {
  const [scrollNavbarRes, setScrollNavbarRes] = useState("");
  const [posEnd, setPosEnd] = useState();
  const { user } = useContext(AuthContext);
  const [openMenu, setOpenMenu] = useState(false);
  const { page } = useContext(NavbarContext);
  const { dispatch } = useContext(NavbarContext);
  const [ietm, setItem] = useState(page);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  // scroll navbar on mobile devices
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction(posEnd);
    };
  });

  const handleClickNavbar = (item) => {
    setItem(item);
    const page = item;
    dispatch({
      type: "UPDATE_NAVBAR",
      payload: { page },
    });
    if (page === "hotels") {
      const type = "";
      const destination = "";
      const dates = [
        {
          endDate: new Date(),
          key: "selection",
          startDate: new Date(),
        },
      ];
      const options = { adult: 1, children: 0, room: 1 };
      dispatch({
        type: "NEW_SEARCH",
        payload: { type, destination, dates, options },
      });
      navigate("/hotels", { state: { type, destination, dates, options } });
    } else if (page === "cart") {
      if (!user) navigate("/login");
    } else {
      navigate(`/${page}`);
    }
  };

  const scrollFunction = (posEnd) => {
    let posStart = document.documentElement.scrollTop;
    if (posStart > posEnd + 5) {
      setScrollNavbarRes("scrollNavbar");
    }
    if (posStart <= posEnd) {
      setScrollNavbarRes("");
    }
    setPosEnd(posStart);
  };

  return (
    <div className="navbar">
      <div
        className={openMenu ? `navContainer navContainerShow` : `navContainer`}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className={
            openMenu ? `closeMenuIcon closeMenuIconShow` : `closeMenuIcon`
          }
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
        <div className="wrapLeftList">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <span className="logo">HaSaBooking</span>
          </Link>
          <div className="navList">
            <div
              id="home"
              className={page !== "" ? "navListItem" : "navListItem active"}
              onClick={() => {
                handleClickNavbar("");
              }}
            >
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </div>
            <div
              id="stays"
              className={
                page !== "hotels" ? "navListItem" : "navListItem active"
              }
              onClick={() => {
                handleClickNavbar("hotels");
              }}
            >
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div
              id="cart"
              className={page !== "cart" ? "navListItem" : "navListItem active"}
              onClick={() => {
                handleClickNavbar("cart");
              }}
            >
              <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
              <span>My Room</span>
            </div>
            <div
              id="blogs"
              className={
                page !== "blogs" ? "navListItem" : "navListItem active"
              }
              onClick={() => {
                handleClickNavbar("blogs");
              }}
            >
              <FontAwesomeIcon icon={faMessage} />
              <span>Blogs</span>
            </div>
            <div id="account" className="navListItem" onClick={() => {}}>
              <FontAwesomeIcon icon={faUser} />
              <span>My Account</span>
            </div>
          </div>
        </div>
        {user ? (
          <div className="usernameWrap">
            <div className="navItemsUsername">{user.username}</div>
            <Popup
              modal
              trigger={<button className="navButton">Logout</button>}
            >
              {(close) => <Logout close={close} />}
            </Popup>
          </div>
        ) : (
          <div className="navItems">
            <button
              className="navButton"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </button>
            <button className="navButton" onClick={handleClick}>
              Login
            </button>
          </div>
        )}
      </div>
      <div
        className={openMenu ? `overlayMenu overlayMenuShow` : `overlayMenu`}
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      ></div>
      <div
        className={
          scrollNavbarRes
            ? `navContainerRes ${scrollNavbarRes}`
            : "navContainerRes"
        }
      >
        <FontAwesomeIcon
          className="iconMenu"
          icon={faBars}
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">HaSaBooking</span>
        </Link>
        {user ? (
          <div className="usernameWrap">
            <div className="navItemsUsername">{user.username}</div>
          </div>
        ) : (
          <div className="navItems">
            <button className="registerBtn navButton">Register</button>
            <button className="loginBtn navButton" onClick={handleClick}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
