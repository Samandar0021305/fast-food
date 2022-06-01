import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import './Contacts.css';
import Img from "../../assets/contacts.jpg";

function Contacts(){
    return(
        <>
        <Header />
        <div className="contacts">
         <div className="contacts-box" style={{backgroundImage: `url(${Img})`}}>
             
         </div>
         <div className="contacts-box rec ">
             <h2>contacts-box</h2>
             <form action="index.php" className="form">
                 <label htmlFor="">
                     Full name : <input type="text" className="form-input" placeholder="enter name" />
                     </label>
                     <label htmlFor="">
                     email : <input type="email" className="form-input" placeholder="enter email" />
                     </label>
                     <label htmlFor="">
                     message : <input type="text" placeholder="enter message" />
                     </label>
             </form>
         </div>
        </div>
        <Footer />
        </>
    )
}
export default Contacts;