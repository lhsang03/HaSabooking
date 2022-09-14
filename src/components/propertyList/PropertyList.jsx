import useFetch from "../../hooks/useFetch";
import "./propertyList.css";
import LONDON from "../../assets/lon-don.jpg";
import MADRID from "../../assets/madrid.jpg";
import TOKYO from "../../assets/tokyo.jpg";
import HANOI from "../../assets/ha-noi.jpg";
import SYDNEY from "../../assets/sydney.jpg";
import BERLIN from "../../assets/berlin.jpg";
import RIO from "../../assets/rio-de-janeiro.jpg";
import HOCHIMINH from "../../assets/ho-chi-minh.jpg";


const PropertyList = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=London,Madrid,Tokyo,Ha Noi,Sydney,Ho Chi Minh,Berlin,Rio de Janeiro"
  );

  const cities = [
    "Lodon", "Madrid", "Tokyo", "Ha Noi", "Sydney", "Ho Chi Minh", "Berlin", "Rio de Janeiro"
  ]

  const images = [LONDON, MADRID, TOKYO, HANOI, SYDNEY, HOCHIMINH, BERLIN, RIO];

  const handleClick = () => {
    console.log(123);
  }
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i} onClick={() => {handleClick()}}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{cities[i]}</h1>
                  <h2>{data[i]} properties</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
