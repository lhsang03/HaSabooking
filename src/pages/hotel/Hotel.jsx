import "./hotel.css";
import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faHandSparkles,
  faHouse,
  faLocationDot,
  faPenToSquare,
  faStar,
  faTriangleExclamation,
  faWifi,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openDate, setOpenDate] = useState(false);

  const { data, loading, error, reFetch } = useFetch(`/hotels/find/${id}`);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { dates, options } = useContext(SearchContext);
  const { dispatch } = useContext(SearchContext);
  let initDate = dates;
  if (!dates[0]) {
    initDate = [
      {
        endDate: new Date(),
        key: "selection",
        startDate: new Date(),
      },
    ];
  }
  const [dateArray, setDateArray] = useState(initDate);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dateArray[0].endDate, dateArray[0].startDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleUpdateContext = () => {
    const type = data.type;
    const destination = data.city;

    //create new dates and dispatch
    const dates = dateArray;
    dispatch({
      type: "NEW_SEARCH",
      payload: { type, destination, dates, options },
    });
  };

  const handleClick = () => {
    if (user) {
      handleUpdateContext();
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Navbar />
      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelSlider">
            <Slider {...settings}>
              {data.photos?.map((photo, i) => (
                <div className="" key={i} style={{ position: "relative" }}>
                  <img src={photo} alt="" className="hotelImg" />
                  <div className="numberSlider">
                    {i + 1}/{data.photos?.length}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="hotelWrapper">
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location – {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
                <div className="someInfo">
                  <div className="infoItem">
                    <FontAwesomeIcon icon={faHouse} className="iconDesc" />
                    <div className="infoContainer">
                      <h3>Entire home</h3>
                      <span>
                        You'll have the comfortable house to yourself.
                      </span>
                    </div>
                  </div>
                  <div className="infoItem">
                    <FontAwesomeIcon
                      icon={faHandSparkles}
                      className="iconDesc"
                    />
                    <div className="infoContainer">
                      <h3>Enhanced clean</h3>
                      <span>
                        This host committed to Airbnb's 5-step enhanced cleaning
                        process.
                      </span>{" "}
                    </div>
                  </div>
                  <div className="infoItem">
                    <FontAwesomeIcon icon={faWifi} className="iconDesc" />
                    <div className="infoContainer">
                      <h3>Wifi</h3>
                      <span>
                        High-quality wifi is avaiable, ready for you to connect.
                      </span>{" "}
                    </div>
                  </div>
                  <div className="infoItem">
                    <FontAwesomeIcon
                      icon={faTriangleExclamation}
                      className="iconDesc"
                    />
                    <div className="infoContainer">
                      <h3>Home rules</h3>
                      <span>
                        This place isn't suitable for infants &#40;0 - 2&#41;
                        and the host doesn't allow pets or smoking.
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              {openDate && (
                <Fragment>
                  <DateRange
                    className="dateSelector"
                    onChange={(item) => {
                      setDateArray([item.selection]);
                    }}
                    minDate={new Date()}
                    ranges={dateArray}
                  />
                  <div
                    className="closeButton"
                    onClick={() => setOpenDate(!openDate)}
                  >
                    Close
                  </div>
                </Fragment>
              )}
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay!</h1>
                <div className="info">
                  <div className="pricePerNight">$100/night</div>
                  <div className="reviews">
                    <FontAwesomeIcon icon={faStar} className="ratingIcon" />{" "}
                    <div className="rating">
                      <h5>4.9</h5>
                      <span>{`(150 reviews)`}</span>
                    </div>
                  </div>
                </div>
                <div className="datesOption">
                  <div
                    className="startDate"
                    onClick={() => setOpenDate(!openDate)}
                  >
                    <h3>Check in</h3>
                    <span>{`${format(
                      dateArray[0].startDate,
                      "MM/dd/yyyy"
                    )}`}</span>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="editIcon"
                    />
                  </div>
                  <div
                    className="endDate"
                    onClick={() => setOpenDate(!openDate)}
                  >
                    <h3>Check out</h3>
                    <span>{`${format(
                      dateArray[0].endDate,
                      "MM/dd/yyyy"
                    )}`}</span>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="editIcon"
                    />
                  </div>
                </div>
                <h2>
                  <b>${days * data.cheapestPrice}</b> ({days} nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};

export default Hotel;
