import { useRef } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import './Menu.css';
import Render from "./MenuK";


function About(){
    const title = useRef();
    const handle = ()=>{
     title.className.add("show")
    }
    return(
        <>
        <Header />
        <div className="about">
          <div className="about-box">
          {Render.map((element)=>{
              return(
                  <ul className="about-list">
                      <li><img src={element.img} alt="" /></li>
                      <li><p className="about-text">{element.name}</p></li>
                      <li><p className="about-text">{element.price}$</p></li>
                  </ul>
              )
          })}
          </div>
        </div>
        <Footer />
        </>
    )
}
export default About;