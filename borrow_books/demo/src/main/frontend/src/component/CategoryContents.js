import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
// import immg from "./image/un.png";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

function CategoryContents() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [books, setBooks] = useState();
    const [bookId, setBookId] = useState();

    const state = useSelector((state) => {
      return {
        currentUser: state.usersReducer.currentUser,
      };
    });
    console.log(state.currentUser)

    useEffect(() => {
      axios
        .get(`http://localhost:8080/books/department/${id}`)
        .then((res) => {
          setBooks(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    const update = (book)=>{
      const borroerId = state.currentUser.id;
      axios
      .put(`http://localhost:8080/books/update/${book.id}`,{
        state:"Borrowed"
    })
      .then((res) => {
        addBorrowing(book)
      })
      .catch((err) => {
        console.log(err);
      }); 
    }

    const addBorrowing = (book)=>{

      setBookId(book.id)
      const borroerId = state.currentUser.id;
      axios
      .post("http://localhost:8080/borrowings",{
        borrowing:{
          losnNumber :123,
          borrowingDate :"ee",
          redeliveryDate:"mm"

          },
          bookId:book.id,
          borrowerId:borroerId}
          )
      .then((res) => {
        updateUserNumberOfBorrowing();
      })
      .catch((err) => {
        console.log(err);
      }); 
    }

    const updateUserNumberOfBorrowing = ()=>{
      const borroerId = state.currentUser.id;
      axios
      .put(`http://localhost:8080/users/${borroerId}`
          )
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      }); 

      // navigate("/UserProfile");

    }

    

    
    // useEffect(() => {
    //   axios
    //     .get("http://localhost:8080/types")
    //     .then((res) => {
    //       console.log(res.data);
    //       setCategories(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, []);
    return (
        <>
        <Navbar/>
       

<div className="container">
  <div className="row justify-content-around">
    {books !== undefined
      ? books.map((book) => {
        if(book.state === "Available"){
          return (
            <div className=" my-5 py-4 Sh-card" style={{ width: "18rem" }}>
            {/* <div className=" my-5 py-4 Sh-card"> */}
              <div className="card-body text-center grid-five">
                <img src={""} alt="" width="250px" />
                <h4>
                   {book.title} 
                </h4>
                <p className="text-dep">des: {book.description}</p>
                <p className="text-dep">
                        <button type="button" className="btn-v" onClick={()=>{update(book)}} >
                          {book.state}
                        </button></p>
                {/* <button
                  type="button"
                  className="btn-b"
                  onClick={() => {
                    navigate(`/Doctor/${e.id}`);
                  }}
                >
                  View Available Appointments
                  <span className="fas fa-chevron-right"></span>
                </button> */}
              </div>
            </div>
          );}
        })
      : "Wait"}
  </div>
  {/* </div> */}
</div>
<Footer />
        
            
        </>
      
    );
  }
  
  export default CategoryContents;