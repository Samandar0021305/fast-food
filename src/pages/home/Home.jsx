import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import './home.css';
import Back from "../../assets/home.jpg"
import {Link} from "react-router-dom";

function Home(){
  
    return(
        <>
        <Header />
        <div className="home" style={{backgroundImage: `url(${Back})`}}>
          <ul className="header-list">
              <li>
                  <p className="heade-text">Food Corner</p>
              </li>
              <li>
                  <p className="heade-text">UZB FOOD AT A CLIKC.</p>
              </li>
              <li>
                  <Link to='/contacts'>
                      <button>Ro'yxatsdan o'tish</button>
                  </Link>
              </li>
          </ul>
        </div>
        <Footer />
        </>
    )
}

export default Home;