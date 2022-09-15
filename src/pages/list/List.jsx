import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Introduce from "../../components/introduce/Introduce";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { typeObject } from "../../components/featured/Featured";
import {
  faAngleDown,
  faLocationDot,
  faCalendarDay,
  faUser,
  faCircleDollarToSlot,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "@material-ui/core/Slider";
import { SearchContext } from "../../context/SearchContext";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(1001);
  const [type, setType] = useState(typeObject);
  const [dropdownPrice, setDropdownPrice] = useState(false);
  const [dropdownPeople, setDropdownPeople] = useState(false);
  const [rotateDropdownBtn, setRotateDropdownBtn] = useState(false);
  const [opentFilter, setOpenFilter] = useState(false);
  const [inputPrice, setInputPrice] = useState([
    min - (min % 10),
    max - (max % 10),
  ]);

  const checkDestination = (destination) => {
    return destination ? `city=${destination}` : "";
  };

  const checkType = (type) => {
    return type ? `type=${type}` : "";
  };

  const { data, loading, error, reFetch } = useFetch(
    `/hotels?${checkType(type)}&${checkDestination(destination)}&min=${
      min || 0
    }&max=${max || 1001}`
  );
  const { dispatch } = useContext(SearchContext);

  const handleClick = () => {
    reFetch();
    dispatch({
      type: "NEW_SEARCH",
      payload: { type, destination, dates, options },
    });
  };

  const typeItems = document.getElementsByClassName("typeItem");
  const activeTypeItem = document.getElementsByClassName("activeType");

  for (let i = 0; i < typeItems.length; i++) {
    let type = typeObject;
    if (typeItems[i].id === type && activeTypeItem.length === 0) {
      typeItems[i].classList.add("activeType");
    }
  }

  const handleClickTypeItem = (e) => {
    for (let i = 0; i < typeItems.length; i++) {
      typeItems[i].classList.remove("activeType");
    }
    e.target.classList.add("activeType");
  };

  const handleDropdown = (e) => {
    if (rotateDropdownBtn) {
      e.target.classList.remove("activeDropdown");
      setRotateDropdownBtn(!rotateDropdownBtn);
    } else {
      e.target.classList.add("activeDropdown");
      setRotateDropdownBtn(!rotateDropdownBtn);
    }
    const label = e.target.parentElement.id;
    switch (label) {
      case "date":
        setOpenDate(!openDate);
        break;
      case "price":
        setDropdownPrice(!dropdownPrice);
        break;
      case "people":
        setDropdownPeople(!dropdownPeople);
        break;
      default:
        break;
    }
  };

  const handleOpenFilter = () => {
    if (!opentFilter) {
      document
        .getElementsByClassName("filterModal")[0]
        .classList.add("filterModalShow");
      document
        .getElementsByClassName("overlayFilter")[0]
        .classList.add("overlayFilterShow");
      setOpenFilter(!opentFilter);
    } else {
      document
        .getElementsByClassName("filterModal")[0]
        .classList.remove("filterModalShow");
      document
        .getElementsByClassName("overlayFilter")[0]
        .classList.remove("overlayFilterShow");
      setOpenFilter(!opentFilter);
    }
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleActive = (e) => {
    const types = document.getElementsByClassName("type");
    for (let i = 0; i < types.length; i++) {
      types[i].style.color = "#fff";
      types[i].style.backgroundColor = "#000";
      types[i].style.border = "none";
    }
    e.target.style.color = "#000";
    e.target.style.backgroundColor = "#fff";
    e.target.style.border = "1px solid #000000";
  };

  return (
    <div>
      <Navbar />
      <div className="headerInList">
        <Header />
      </div>
      <div className="listSearchRes">
        <div className="listSearchResWrap">
          <div className="infoDestination">
            {destination ? destination : "Destination"}
          </div>
          <div className="colInfoRight">
            <div className="inforDate">{`${format(
              dates[0].startDate,
              "MM/dd"
            )} - ${format(dates[0].endDate, "MM/dd")}`}</div>

            <div className="infoPeople">
              {options.adult} Adult - {options.children} Child - {options.room}{" "}
              Room
            </div>

            <div className="infoPrice">
              <div className="infoType">Type: {type ? type : "All"}</div>
              {min ? min - 1 : "0"} $ - {max ? max - 1 : "1000"} $
            </div>
          </div>
          <FontAwesomeIcon
            icon={faSliders}
            className="openFilter"
            onClick={handleOpenFilter}
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="stickyWrapper">
            <div className="listTypeItem">
              <div
                className="typeItem"
                id=""
                onClick={(e) => {
                  setType("");
                  handleClickTypeItem(e);
                }}
              >
                All
              </div>
              <div
                className="typeItem"
                id="hotel"
                onClick={(e) => {
                  setType("hotel");
                  handleClickTypeItem(e);
                }}
              >
                Hotel
              </div>
              <div
                className="typeItem"
                id="apartment"
                onClick={(e) => {
                  setType("apartment");
                  handleClickTypeItem(e);
                }}
              >
                Apartment
              </div>
              <div
                className="typeItem"
                id="resort"
                onClick={(e) => {
                  setType("resort");
                  handleClickTypeItem(e);
                }}
              >
                Resort
              </div>
              <div
                className="typeItem"
                id="villa"
                onClick={(e) => {
                  setType("villa");
                  handleClickTypeItem(e);
                }}
              >
                Villa
              </div>
            </div>
            <div className="listSearch">
              <div className="wrapListSearch">
                <div className="lsItem">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="labelSymbol"
                  />
                  <label>Destination</label>
                  <div className="wrapDropdownBtn" onClick={handleDropdown}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="dropdownButton"
                    />
                  </div>

                  <input
                    placeholder={
                      destination ? destination : "Enter your destination"
                    }
                    type="text"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>

                <div className="lsItem">
                  <FontAwesomeIcon
                    icon={faCalendarDay}
                    className="labelSymbol"
                  />
                  <label>Check-in Date</label>
                  <div
                    id="date"
                    className="wrapDropdownBtn"
                    onClick={handleDropdown}
                  >
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="dropdownButton"
                    />
                  </div>
                  <span onClick={() => setOpenDate(!openDate)}>{`${format(
                    dates[0].startDate,
                    "MM/dd/yyyy"
                  )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>

                  {openDate && (
                    <DateRange
                      className="dateSelector"
                      onChange={(item) => {
                        setDates([item.selection]);
                      }}
                      minDate={new Date()}
                      ranges={dates}
                    />
                  )}
                </div>

                <div className="lsItem">
                  <FontAwesomeIcon
                    icon={faCircleDollarToSlot}
                    className="labelSymbol"
                  />
                  <label>Price Spread</label>
                  <div
                    id="price"
                    className="wrapDropdownBtn"
                    onClick={handleDropdown}
                  >
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="dropdownButton"
                    />
                  </div>
                  <span
                    onClick={() => {
                      setDropdownPrice(!dropdownPrice);
                    }}
                  >
                    {dropdownPrice
                      ? `Your range price ${min - 1}$ to ${max - 1}$`
                      : "Your range price 1$ to 1000$"}
                  </span>
                  {dropdownPrice && (
                    <div className="price dropdown">
                      <div className="lsOptionItem">
                        <span className="lsOptionText">
                          Min price <small>per night</small>
                        </span>
                        <input
                          type="number"
                          onChange={(e) => setMin(e.target.value)}
                          className="lsOptionInput"
                        />
                      </div>
                      <div className="lsOptionItem">
                        <span className="lsOptionText">
                          Max price <small>per night</small>
                        </span>
                        <input
                          type="number"
                          onChange={(e) => setMax(e.target.value)}
                          className="lsOptionInput"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="lsItem">
                  <FontAwesomeIcon icon={faUser} className="labelSymbol" />
                  <label>Peoples</label>
                  <div
                    id="people"
                    className="wrapDropdownBtn"
                    onClick={handleDropdown}
                  >
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="dropdownButton"
                    />
                  </div>
                  <span
                    onClick={() => {
                      setDropdownPeople(!dropdownPeople);
                    }}
                  >{`${options.adult} Adult - ${options.children} Children - ${options.room} Room`}</span>
                  {dropdownPeople && (
                    <div className="searchOptions dropdown">
                      <div className="lsOptionItem">
                        <span className="lsOptionText">Adult</span>
                        <input
                          type="number"
                          min={1}
                          className="lsOptionInput"
                          placeholder={options.adult}
                        />
                      </div>
                      <div className="lsOptionItem">
                        <span className="lsOptionText">Children</span>
                        <input
                          type="number"
                          min={0}
                          className="lsOptionInput"
                          placeholder={options.children}
                        />
                      </div>
                      <div className="lsOptionItem">
                        <span className="lsOptionText">Room</span>
                        <input
                          type="number"
                          min={1}
                          className="lsOptionInput"
                          placeholder={options.room}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <button className="searchBtn" onClick={handleClick}>
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="overlayFilter" onClick={handleOpenFilter}></div>
          <div className="filterModal">
            <div className="filterContainer">
              <div
                className="closeBtn"
                onClick={() => {
                  handleClick();
                  handleOpenFilter();
                }}
              >
                &#10540;
              </div>
              <div className="filterHeader">Filter</div>
              <div className="wrapOption">
                <div className="filterOption">
                  <label htmlFor="">Destination</label>
                  <div className="value">
                    <input
                      id="inputDestination"
                      placeholder={
                        destination ? destination : "Enter your destination"
                      }
                      type="text"
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="wrapOption">
                <div className="filterOption">
                  <label htmlFor="">Check-in Date</label>
                  <div
                    className="value"
                    onClick={() => {
                      setOpenDate(!openDate);
                    }}
                  >
                    {`${format(dates[0].startDate, "MM/dd")} - ${format(
                      dates[0].endDate,
                      "MM/dd"
                    )}`}
                  </div>
                </div>
                <div className="typeOptions">
                  {openDate && (
                    <DateRange
                      className="dateSelector"
                      onChange={(item) => {
                        setDates([item.selection]);
                      }}
                      minDate={new Date()}
                      ranges={dates}
                    />
                  )}
                </div>
              </div>

              <div className="wrapOption">
                <div className="filterOption">
                  <label htmlFor="">Type</label>
                  <div className="value">
                    <div className="infoType">Type: {type ? type : "All"}</div>
                  </div>
                </div>
                <div className="typeOptions">
                  <div
                    className="type"
                    onClick={(e) => {
                      setType("");
                      handleActive(e);
                    }}
                  >
                    All
                  </div>
                  <div
                    className="type"
                    onClick={(e) => {
                      setType("hotel");
                      handleActive(e);
                    }}
                  >
                    Hotel
                  </div>
                  <div
                    className="type"
                    onClick={(e) => {
                      setType("apartment");
                      handleActive(e);
                    }}
                  >
                    Apartment
                  </div>
                  <div
                    className="type"
                    onClick={(e) => {
                      setType("resort");
                      handleActive(e);
                    }}
                  >
                    Resort
                  </div>
                  <div
                    className="type"
                    onClick={(e) => {
                      setType("villa");
                      handleActive(e);
                    }}
                  >
                    Villa
                  </div>
                </div>
              </div>

              <div className="wrapOption">
                <div className="filterOption">
                  <label htmlFor="">People</label>
                  <div
                    className="value"
                    onClick={() => {
                      setDropdownPeople(!dropdownPeople);
                    }}
                  >
                    {options.adult} Adult - {options.children} Child -{" "}
                    {options.room} Room
                  </div>
                </div>
                <div className="typeOptions">
                  {dropdownPeople && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.adult <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.children <= 0}
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="wrapOption">
                <div className="filterOption">
                  <label htmlFor="">Price Spread</label>
                  <div className="value">
                    {min ? min - 1 : "0"} $ - {max ? max - 1 : "1000"} $
                  </div>
                </div>
                <div className="typeOptions">
                  <Slider
                    value={inputPrice}
                    onChange={(event, newValue) => {
                      setMin(newValue[0] * 10 + 1);
                      setMax(newValue[1] * 10 + 1);
                      setInputPrice([newValue[0], newValue[1]]);
                    }}
                    valueLabelDisplay="auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <Introduce />
      <MailList />
      <Footer />
    </div>
  );
};

export default List;
