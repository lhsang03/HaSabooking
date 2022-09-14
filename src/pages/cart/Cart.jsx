import useFetch from "../../hooks/useFetch";
import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../context/SearchContext";
import "./cart.css";
import Navbar from "../../components/navbar/Navbar";
import Introduce from "../../components/introduce/Introduce";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const userId = JSON.parse(localStorage.getItem("user"))._id;
  const { data, loading, error } = useFetch(`/users/cart/${userId}`);
  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext);
  const { dates } = useContext(SearchContext);

  const linkToHotel = (item) => {
    //create new dates and dispatch
    const dates = [
      {
        endDate: new Date(
          item.unavailableDates[item.unavailableDates.length - 1]
        ),
        key: "selection",
        startDate: new Date(item.unavailableDates[0]),
      },
    ];
    const type = "";
    const destination = "";
    const options = undefined;
    dispatch({
      type: "NEW_SEARCH",
      payload: { type, destination, dates, options },
    });
    navigate(`/hotels/${item.hotelId}`);
  };

  return (
    <div>
      <Navbar />
      {loading ? (
        "loading"
      ) : (
        <div className="cart">
          <div className="title">My Room</div>
          {data.map((item) => (
            <div className="cartContainer" key={item._id}>
              <div className="photo">
                <img src={item.photo} alt="" />
              </div>
              <div className="rightContent">
                <div className="wrapInfo">
                  <div className="hotel cartInfo">{item.hotelName}</div>
                  <div className="typeRoom cartInfo">Type: {item.roomType}</div>
                  <div className="roomNumber cartInfo">
                    Room Number: {item.roomNumber}
                  </div>
                  <div className="viewBtn" onClick={() => linkToHotel(item)}>
                    View More
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="wrapDate">
                  <div className="checkIn">
                    Check In: {item.unavailableDates[0].split("T")[0]}
                  </div>
                  <div className="checkOut">
                    Check Out:{" "}
                    {
                      item.unavailableDates[
                        item.unavailableDates.length - 1
                      ].split("T")[0]
                    }
                  </div>
                  <div className="status">Approved</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Introduce />
      <MailList />
      <Footer />
    </div>
  );
};

export default Cart;
