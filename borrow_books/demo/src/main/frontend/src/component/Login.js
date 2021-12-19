import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import CloseIcon from "@material-ui/icons/Close";
import "./Login.css";
import { login } from "../reducers/Login/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Login() {

  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      isLoggedIn: state.usersReducer.isLoggedIn
    };
  });

  const phoneNumberValue = (e) => {
    console.log(e.target.value)
    setUserPhoneNumber(e.target.value);
    console.log(userPhoneNumber)
  };
  const passwordValue = (e) => {
    console.log(e.target.value)
    setPassword(e.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const logIn = () => {
    const theuser = {
      userPhoneNumber: userPhoneNumber,
      password: password,
    };

    
      users.forEach((e) => {
        if ( e.phoneNumber === theuser.userPhoneNumber && e.password === theuser.password) {
          const action = login(e);
          dispatch(action);
          navigate("/");
        }
      })
      }



    return (
  
      <>
      <div className="background">
      <form>
        <div className="container-S">
          <div className="Icon-x-m">
            <Link to="/">
              <CloseIcon className="Icon-x" />
            </Link>
          </div>
          <PersonPinIcon className="icon-log" />
          <h2 className="title-b">Log In</h2>
          <div className="form-group">
            <label>
              <b>Phone number</b>
            </label>
            <input
              type="text"
              onChange={phoneNumberValue}
              className="form-control"
              placeholder="Enter Phone number"
            />
          </div>
          <div className="form-group">
            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              onChange={passwordValue}
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          
          <button
            type="button"
            onClick={() => {
              logIn();
            }}
            className="button-b"
          >
            Login
          </button>
          <br />
          <p className="forgot-password text-center">
            You don't have an account ?{" "}
            <a
              href
              className="navig"
              onClick={() => {
                // navigate("/SignUp");
              }}
            >
              {" "}
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>

  
      </>
    );
  }
  
  export default Login;