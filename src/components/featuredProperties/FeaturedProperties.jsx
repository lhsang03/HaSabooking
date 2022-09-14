import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import SearchItem from "../searchItem/SearchItem";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    "/hotels?featured=true&rating>=4.5&limit=8"
  );

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <div className="fpContainer">
          {data.map((item) => (
            <SearchItem item={item} key={item._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedProperties;
