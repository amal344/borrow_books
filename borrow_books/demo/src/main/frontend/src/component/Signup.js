
import CloseIcon from "@material-ui/icons/Close";
import "./Login.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {


  const navigate = useNavigate();
    const [users, setUsers] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();

    const changeFirstName = (e) => {
        setFirstName(e.target.value);
        console.log(firstName)
      };
      const changeLastName = (e) => {
        setLastName( e.target.value);
        console.log(lastName)
      };
      const changePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
        console.log(phoneNumber)
      };

      const changeAge = (e) => {
        setAge(e.target.value)
      };
      const changePassword = (e) => {
         setPassword( e.target.value)
        console.log(password)
      };

      const genderChange = (e) => {
        setGender(e.target.value)
        console.log(gender)
    
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


  const addUser = () => {

    const theuser = {
      phonenumber: phoneNumber,
      password: password,
      
    };
    let flag=0;
    console.log("the user  want add ")
    console.log(theuser)

      users.forEach((e) => {
        if (e.phoneNumber === theuser.phonenumber) {
           flag=1
           console.log("i am in if i geted match")
        }
      });
      if(flag===0){
        axios
        .post("http://localhost:8080/users",{
        firstName :""+firstName+"",
        lasttName :""+lastName+"",
        phoneNumber:""+phoneNumber+"",
        password:""+password+"" ,
        age:age,
        gender:gender})
        .then((res) => {
          console.log(res.data);
                  alert("You have been successfully registered, you can log in now")
        navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });

      }
    }
     
  
    return (
  
      
      <div className="background">
      <form>
        <div className="container-S">
          <div className="Icon-x-m">
            <Link to="/">
              <CloseIcon className="Icon-x" />
            </Link>
          </div>
          <h2 className="title-b">Sign Up</h2>
          <div className="form-group two-input">
            <label>First Name
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={changeFirstName}
            /></label>
            <label>Last Name
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={changeLastName}
            /></label>
          </div>
          <div className="form-group two-input">
          <label>Phone Number 
            <input
              type="text"
              className="form-control"
              placeholder="000-000-0000"
              onChange={changePhoneNumber}
            /></label>
            <label>Age  
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={changeAge}
            /></label>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={changePassword}
            />
          </div>

          <div className="form-group">
          <label>Gender: </label>
          <label>
            <input
              type="radio"
              onChange={genderChange}
              name="gender"
              value="Fmale"
            />
            Fmale
          </label>
          <label>
            <input
              type="radio"
              onChange={genderChange}
              name="gender"
              value="Male"
            />
            Male
          </label>
          </div>
                    <br />
          <button type="button"  className="button-b" onClick={addUser}>
            Sign Up
          </button>
          <p className="forgot-password text-center">
            Already registered ?<Link to="/login"> Log in</Link>
          </p>
        </div>
      </form>
    </div>
    
    );
  }
  
  export default Signup;