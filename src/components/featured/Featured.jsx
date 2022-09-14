import useFetch from "../../hooks/useFetch";
import "./featured.css";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { NavbarContext } from "../../context/NavbarContext";
import { useContext } from "react";
import { object } from "../header/Header";
import RESORT from "../../assets/resort.png";
import VILLA from "../../assets/villa.png";
import HOTEL from "../../assets/hotel.jpg";
import APARTMENT from "../../assets/apartment.jpg";


let typeObject = undefined;

const Featured = () => {
  const { data, loading } = useFetch(
    "/hotels/countByType"
  );

  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext);

  const destination = object.destination;
  const dates = object.dates;
  const options = object.options;

  const handleClick = (typeOfItem) => {
    const type = typeOfItem;
    typeObject = typeOfItem;
    dispatch({
      type: "NEW_SEARCH",
      payload: { type, destination, dates, options },
    });
    navigate("/hotels", { state: { type, destination, dates, options } });
  };

  return (
    <div className="featured">
      <div
        className="featuredItem"
        onClick={() => {
          handleClick("hotel");
        }}
      >
        <div className="overlay"></div>
        <img
          src={HOTEL}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          {loading ? (
            "Loading please wait"
          ) : (
            <>
              {" "}
              <h1>{data[0]?.type}</h1>
              <h2>
                {data[0]?.count} {data[0]?.type}
              </h2>
            </>
          )}
        </div>
      </div>

      <div
        className="responsiveItem featuredItem"
        onClick={() => {
          handleClick("apartment");
        }}
      >
        <div className="overlay"></div>
        <img
          src={APARTMENT}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          {loading ? (
            "Loading please wait"
          ) : (
            <>
              {" "}
              <h1>{data[1]?.type}</h1>
              <h2>
                {data[1]?.count} {data[1]?.type}
              </h2>
            </>
          )}
        </div>
      </div>

      <div
        className="responsiveItem featuredItem"
        onClick={() => {
          handleClick("resort");
        }}
      >
        <div className="overlay"></div>
        <img
          src={RESORT}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          {loading ? (
            "Loading please wait"
          ) : (
            <>
              {" "}
              <h1>{data[2]?.type}</h1>
              <h2>
                {data[2]?.count} {data[2]?.type}
              </h2>
            </>
          )}
        </div>
      </div>

      <div className="mediumFeatureItem">
        <div
          className="featuredItem"
          onClick={() => {
            handleClick("apartment");
          }}
        >
          <div className="overlay"></div>
          <img
            src={APARTMENT}
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            {loading ? (
              "Loading please wait"
            ) : (
              <>
                {" "}
                <h1>{data[1]?.type}</h1>
                <h2>
                  {data[1]?.count} {data[1]?.type}
                </h2>
              </>
            )}
          </div>
        </div>
        <div
          className="featuredItem"
          onClick={() => {
            handleClick("resort");
          }}
        >
          <div className="overlay"></div>
          <img
            src={RESORT}
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            {loading ? (
              "Loading please wait"
            ) : (
              <>
                {" "}
                <h1>{data[2]?.type}</h1>
                <h2>
                  {data[2]?.count} {data[2]?.type}
                </h2>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className="featuredItem"
        onClick={() => {
          handleClick("villa");
        }}
      >
        <div className="overlay"></div>
        <img
          src={VILLA}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          {loading ? (
            "Loading please wait"
          ) : (
            <>
              {" "}
              <h1>{data[3]?.type}</h1>
              <h2>
                {data[3]?.count} {data[3]?.type}
              </h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { typeObject };
export default Featured;
