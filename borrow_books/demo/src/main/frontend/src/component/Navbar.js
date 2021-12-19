// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { logout } from "../reducers/Login/action";
// import { useDispatch } from "react-redux";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import { useNavigate } from "react-router-dom";


import "./Navbar.css";

function Navbar() {
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const state = useSelector((state) => {
//     return {
//       isLoggedIn: state.usersReducer.isLoggedIn,
//       UserType: state.usersReducer.UserType,
//     };
//   });

  return (
    <div className="header1">
      <div className="header">
        <div className="header-option"></div>
        <h5 className="text" >
        borrow<span>BOOKS</span>
        </h5>
        <div className="space"></div>

        </div>
        <div className="nav-2">
         
             
            
          
        </div>
        <div className="nav-2">
          
            </div>

        </div>

  );
}

export default Navbar;