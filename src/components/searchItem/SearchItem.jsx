import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <Link to={`/hotels/${item._id}`}>
        <img
          src={
            item.photos[0]
              ? item.photos[0]
              : "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/234762091.jpg?k=e745af1aabdb7406ae7bafbed449825537435898a216e01a8d509c2a36d46b36&o="
          }
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">{item.name}</h1>
          <span className="siDistance">{item.distance}m from center</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
        </div>
        <div className="siDetails">
          {item.rating && (
            <div className="siRating">
              <span>Excellent</span>
              <button>{item.rating}</button>
            </div>
          )}
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}/ night</span>
        </div>
      </Link>
    </div>
  );
};

export default SearchItem;
