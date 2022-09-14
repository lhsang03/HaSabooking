import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import Introduce from "../../components/introduce/Introduce";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="browseByCity homeTitle">Browse by City</h1>
        <PropertyList/>
        <h1 className="homesGuestsLove homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <Introduce/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
