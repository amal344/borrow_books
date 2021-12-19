import "./section.css";
import { useEffect ,useState} from "react";
import axios from "axios";
import PeopleIcon from "@material-ui/icons/People";
import AirlineSeatIndividualSuiteIcon from "@material-ui/icons/AirlineSeatIndividualSuite";
import MenuBook from "@material-ui/icons/MenuBook";
import ApartmentIcon from "@material-ui/icons/Apartment";
function Section() {

    const [usersLength, setUsers] = useState();
    const [booksLength, setBooks] = useState();
    useEffect(() => {

         axios
        .get("http://localhost:8080/users")
        .then((res) => {
          setUsers(res.data.length);
        })
        .catch((err) => {
          console.log(err);
        });
   

    axios
    .get("http://localhost:8080/books")
    .then((res) => {

      setBooks(res.data.length);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

    // console.log(users.length)
    return (
  
      <>
      <section className="icons-container">
      <div className="icons">
        <PeopleIcon className="Icon-S" />
        <h3>{usersLength}+</h3>
        <p>Users</p>
      </div>
      <div className="icons">
        <MenuBook className="Icon-S" />
        <h3>{booksLength}+</h3>
        <p>Books</p>
      </div>
      {/* <div className="icons">
        <AirlineSeatIndividualSuiteIcon className="Icon-S" />
        <h3>250+</h3>
        <p>bed facility</p> */}
      {/* </div> */}
      <div className="icons">
        <ApartmentIcon className="Icon-S" />
        <h3>5+</h3>
        <p>Available Categories </p>
      </div>
    </section>
  
      </>
    );
  }
  
  export default Section;