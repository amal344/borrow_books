import "./Login.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// import AccountBoxIcon from "@material-ui/icons/AccountBox";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PersonIcon from "@material-ui/icons/Person";

import CancelIcon from "@material-ui/icons/Cancel";

function UserProfile() {

    const navigate = useNavigate();
  const [lendBooksData, setLendBooksData] = useState();
  const [borrowedBooks, setBorrowedBooks] = useState(false);
  const [UpdatedDate, setUpdatedDate] = useState();

  const state = useSelector((state) => {
    return {
      currentUser: state.usersReducer.currentUser,
    };
  });

  useEffect(() => {

    axios
    .get(`http://localhost:8080/books/booklender/${state.currentUser.id}`)
    .then((res) => {
      console.log("Lend")
      console.log(res.data);
      setLendBooksData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

    axios
    .get(`http://localhost:8080/borrowings/borrwoer/${state.currentUser.id}`)
    .then((res) => {
      console.log("borrwoer")
      console.log(res.data);
      setBorrowedBooks(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
   
  
    return (
    
     <div className="page-content page-container" id="page-content">
      <div
        className="row d-flex justify-content-center"
        style={{ padding: "30px 0 30px 0" }}
      >
        <div className="col-xl-60 col-md-9">
          <div className="card user-card-full">
            <div className="row m-l-0 m-r-0">
              <div className="col-sm-4 bg-c-lite-green user-profile">
                <div className="card-block text-center text-white">
                  <div>
                    <Link to="/">
                      <ArrowBackIcon className="icon-xx" />
                    </Link>
                  </div>
                  {/* <div className="m-b-25">
                    <AccountBoxIcon className="icon-z" />
                  </div> */}
                  {/* <h6 className="f-w">
                    Dr. {state.currentUser.firstName}{" "}
                    {state.currentUser.lasttName}
                  </h6> */}

                  <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                </div>
              </div>
              <div className="col-sm-8">
                <div className="card-block">
                  <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                    <PersonIcon />
                    Personal Information
                  </h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Name:</p>
                      <h6 className="text-muted f-w-400">
                        Mr. {state.currentUser.firstName}{" "}
                        {state.currentUser.lasttName}
                      </h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Phone Number:</p>
                      <h6 className="text-muted f-w-400">
                        {state.currentUser.phoneNumber}
                      </h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Gender:</p>
                      <h6 className="text-muted f-w-400">
                        {state.currentUser.gender}
                      </h6>
                    </div>
                  </div>
                  <br />
                  {/* <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                    Description:
                  </h6>
                  <div className="row">
                    <div>
                      <p className="m-b-5 f-w-400">
                        {state.currentUser.department.description}
                      </p>
                    </div>
                  </div> */}
                  <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                    <EventNoteIcon />
                    Opration
                  </h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Lend books</p>
                      {lendBooksData!== undefined
                        ? lendBooksData.map((e) => {
                            // if (e. !== null) {
                              return (
                                <div className="b-b-default">
                                  <div className="row">
                                    <div className="col-8">
                                      <h4 className="card-appo">
                                        Title: {e.title}{" "}
                                      </h4>
                                    </div>
                                    <div className="col">
                                      <CheckCircleIcon
                                        className="icon-m"
                                      />{" "}
                                      <CancelIcon
                                        className="icon-n"
                                      />
                                    </div>
                                  </div>
                                  <h4 className="card-appo">
                                    State: {e.state}
                                  </h4>
                                  <h4 className="card-appo">
                                    Descraption: {e.description}{" "}
                                    
                                  </h4>
                                  {/* <h4 className="card-appo">
                                    Age: {e.patient.age}, Blood Type:{" "}
                                    {e.patient.bloodType}
                                  </h4> */}
                                </div>
                              );
                            // }
                          })
                        : "Wait"}
                    </div>

                    <div className="col-sm-6">
                      <div className="row">
                        <div className="col-4">
                          <p className="m-b-10 f-w-600">
                            Borrower books{" "}
                            {/* <AddCircleIcon
                              className="icon-m"
                            
                            /> */}
                          </p>
                        </div>
                        {/* <div className="col-8">
                          {borrowedBooks ? (
                            <label className="lable-date">
                              title:{" "}
                              <input
                                type="text"
                                className="date-input"
                                placeholder="Date : YYYY-MM-DD"
                                onChange={DateValue}
                              />{" "}
                              <CheckCircleIcon
                                className="icon-m"
                                onClick={() => {
                                  CreateAppointment();
                                }}
                              />
                            </label>
                          ) : (
                            ""
                          )}
                        </div> */}
                      </div>
                      {/* <div className="col-8">
                      {borrowedBooks !== undefined
                        ? borrowedBooks.map((e) => {

                              return (
                                <div className="b-b-default">
                                  <h4 className="card-appo">Title: {e.book.title}</h4>
                                  <h4 className="card-appo">
                                  Borrowing date: {e.borrowingDate}
                                  </h4>
                                  <h4 className="card-appo">
                                  Redelivery date: {e.redeliveryDate}
                                  </h4>
                                </div>
                              );
                            // }
                          })
                        : "Wait"}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
    

    );
  }
  
  export default UserProfile;
  