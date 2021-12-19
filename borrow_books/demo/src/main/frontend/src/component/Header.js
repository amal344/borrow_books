
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    // const state = useSelector((state) => {
    //   return {
    //     isLoggedIn: state.usersReducer.isLoggedIn,
    //   };
    // });
  
    return (
      <div className="header1">
        <div className="div center container">
          <h1 className="h-header">A book is a friend that stays forever </h1>
          <p className="p-header">We're Always Ready To Help You.</p>
          <div className="hero-btns">
             <Link to="/login">
                <button type="button" className="btn-trans">
                  LOG IN
                </button>
              </Link>
              <Link to="/Signup">
                <button type="button" className="btn-white">
                  SIGIN UP
                </button>
              </Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  