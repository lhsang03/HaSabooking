import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./blog.css";
import HALONG1 from "../../assets/ha-long-1.jpg";
import HALONG2 from "../../assets/ha-long-2.jpg";
import HALONG3 from "../../assets/ha-long-3.jpg";
import HOCHIMINH1 from "../../assets/ho-chi-minh.jpg";
import HOCHIMINH2 from "../../assets/ho-chi-minh-1.png";
import HANOI1 from "../../assets/ha-noi-1.png";
import HANOI2 from "../../assets/ha-noi-2.jpg";
import HAGIANG1 from "../../assets/ha-giang-1.jpg";
import HAGIANG2 from "../../assets/ha-giang-2.jpg";
import HAGIANG3 from "../../assets/ha-giang-3.jpg";
import MEKONG1 from "../../assets/mekong-1.jpg";
import MEKONG2 from "../../assets/mekong-2.jpg";

const Blog = () => {
  return (
    <div className="blog">
      <Navbar />
      <div className="container">
        <div className="blogTitle">5 Best Places to Visit in Vietnam</div>
        <div className="opening">
          Vietnam is an astonishing mix of natural highlights and cultural
          diversity.
          <br />
          <br />
          The scenery ranges from jagged peaks seen from winding mountain passes
          down to verdant paddy fields painted every shade of green in the
          palette, while Vietnam's long history and multicultural population
          &#40;with over 50 ethnic minority groups&#41; make a trip here rich in
          heritage.
          <br />
          <br />
          Outdoor lovers can get their teeth into the countryside within the
          numerous national parks, where hiking, biking, and kayaking are
          popular things to do, but Vietnam's most famous natural tourist
          attraction, the spectacular karst seascape of Halong Bay, is one
          natural sight that even the more slothful can experience up close on a
          cruise.
          <br />
          <br />
          While the rural areas brim with lush panoramas, the big cities buzz
          with contemporary life and provide ample opportunities to get stuck
          into Vietnam's tasty culinary highlights.
          <br />
          <br />
          This fascinating country is full of surprises and is one of Southeast
          Asia's most underrated destinations. Plan your sightseeing with our
          list of the best places to visit in Vietnam.
        </div>
        <div className="type1 type">
          <div className="wrapPicture">
            <div className="firstPic">
              <img
                src={HALONG1}
                alt=""
              />
            </div>
            <div className="secondPic">
              <img
                src={HALONG2}
                alt=""
              />
            </div>
            <div className="thirdPic">
              <img
                src={HALONG3}
                alt=""
              />
            </div>
          </div>
          <div className="wrapDesc">
            <div className="headline">Ha Long Bay</div>
            <span>
              The karst seascape of Halong Bay is one of the best places to
              visit in the world for spellbinding sea views and is a UNESCO
              World Heritage Site.
              <br />
              <br />
              Thousands of limestone islands sit within this bay in the Gulf of
              Tonkin, eroded into jagged pinnacles by wind and water action over
              millennia
              <br />
              <br />
              With the bay's scenery best seen by boat, this is prime cruising
              territory. Opt for at least an overnight tour to see Halong Bay's
              iconic views as a day trip doesn't do it justice.
              <br />
              <br />
              There are plenty of caves in the bay that can be entered including
              the Hang Sung Sot, with three mammoth caverns, and the Hang Dao
              Go, with superbly weird stalagmites and stalactites. For most
              people though, the highlight is simply cruising amid the karsts
              and soaking up the changing scenery of pinnacles as you pass by.
            </span>
          </div>
        </div>
        <div className="type2 type">
          <div className="wrapDesc">
            <div className="headline">Ho Chi Minh City</div>
            <span>
              For big city fans, no visit to Vietnam is really complete without
              a visit to Ho Chi Minh City, the buzzing commercial hub of the
              country.
              <br />
              <br />
              The streets are an insane clog of motorbikes and cars, the
              restaurant and café scene is incredibly cosmopolitan, and the
              shopping is the best in the country.
              <br />
              <br />
              At its center is Dong Khoi, a relatively small and easily
              navigable central district, which holds most of the city's sights.
              <br />
              <br />
              Here, you'll find the HCMC Museum, with a brilliant collection of
              artifacts that weaves together the story of the city, and the
              grand Notre Dame Cathedral, built in the late 19th century.
              <br />
              <br />
              Check out the old district of Da Kao nearby for some of the best
              surviving examples of the city's French colonial architecture and
              also to visit the Jade Emperor Pagoda with its dazzling array of
              Buddhist and Taoist religious iconography.
              <br />
              <br />
              Afterwards, the History Museum is a must-do for history fans with
              stacks of relics on display from various archaeological sites.
              <br />
              <br />
              For many visitors, the two big-hitter tourist attractions not to
              miss are just a little out of the center, along Nguyen Thi Minh
              Khai Street. The Reunification Palace, then known as Independence
              Palace, was the residence for South Vietnam's president. It's
              chiefly famous as the spot where North Vietnam's tanks stopped on
              30 April 1975, officially ending the war. It's a completely
              fascinating place to visit complete with 1960s furnishings still
              in situ.
            </span>
          </div>
          <div className="wrapPicture">
            <div className="firstPic">
              <img
                src={HOCHIMINH1}
                alt=""
              />
            </div>
            <div className="secondPic">
              <img
                src={HOCHIMINH2}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="type3 type">
          <div className="wrapPicture">
            <div className="firstPic">
              <img
                src={HANOI1}
                alt=""
              />
            </div>
            <div className="secondPic">
              <img
                src={HANOI2}
                alt=""
              />
            </div>
          </div>
          <div className="wrapDesc">
            <div className="headline">Ha Noi</div>
            <span>
              Vietnam's capital is the frenetic heartbeat of the nation and a
              place that befuddles travelers as much as it charms them.
              <br />
              <br />
              The motorbike frenzy, pollution, and constant clamor of street
              vendors can get too much for some travelers, but if you want to
              dive into Vietnamese city life, Hanoi is the place to do it.
              <br />
              <br />
              The old town quarter has plenty of dilapidated charm on offer,
              while history fans should make a beeline here simply to see the
              bundle of excellent museums.
              <br />
              <br />
              The Vietnam Museum of Ethnology and Vietnam Fine Art Museum are
              both brilliant introductions to the diverse artistry of the
              country, while the Ho Chi Minh Mausoleum is an important tribute
              to the founder of modern Vietnam.
            </span>
          </div>
        </div>
        <div className="type4 type">
          <div className="wrapDesc">
            <div className="headline">Ha Giang</div>
            <span>
              The emerald-green karst mountain landscapes along Ha Giang's
              mountain passes make this far-north province prime territory for
              scenic road-tripping by either motorbike or car.
              <br />
              <br />
              In particular, the twisty Quan Ba Pass between Ha Giang town and
              Tam Son provides panoramic vistas of the karst plateau and its
              jagged limestone outcrops, while the zigzagging Mai Pi Leng Pass
              between Dong Van and Meo Vac offers dizzying views of the lush
              mountain scenery and narrow valleys below.
              <br />
              <br />
              Time your visit to coincide with one of the area's market days,
              when traders from the surrounding mountain villages pile into
              town. Dong Van's Sunday market is one of the best.
            </span>
          </div>
          <div className="wrapPicture">
            <div className="firstPic">
              <img
                src={HAGIANG1}
                alt=""
              />
            </div>
            <div className="secondPic">
              <img
                src={HAGIANG2}
                alt=""
              />
            </div>
            <div className="thirdPic">
              <img
                src={HAGIANG3}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="type5 type">
          <div className="wrapPicture">
            <div className="firstPic">
              <img
                src={MEKONG1}
                alt=""
              />
            </div>
            <div className="secondPic">
              <img
                src={MEKONG2}
                alt=""
              />
            </div>
          </div>
          <div className="wrapDesc">
            <div className="headline">Mekong Delta</div>
            <span>
              The far south of Vietnam is where the mighty Mekong River finally
              finds its way to the sea in a maze of waterways that crisscross
              the floodplain.
              <br />
              <br />
              Incredibly lush, with paddy field vistas and mangroves, and full
              of local life, with chaotic floating markets to explore by boat,
              the delta is one of the most interesting regions for travelers to
              discover.
              <br />
              <br />
              Can Tho is the most popular town to use as a base, as it's close
              to the floating markets of Phong Dien and Cai Rang, while boat
              trips from Ca Mau allow you to explore the U Minh Mangrove Forest
              and Cau Mau Nature Reserve.
            </span>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default Blog;
