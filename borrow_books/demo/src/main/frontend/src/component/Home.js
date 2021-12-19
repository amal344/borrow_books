// import "./Departments.css";
// import { useNavigate } from "react-router-dom";
import { useEffect ,useState} from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Header from "./Header";
import Section from "./Section";
import Categories from "./Categories";
import Footer from "./Footer";
// import { useSelector } from "react-redux";



function Home() {
    // const navigate = useNavigate();
    const [data, setData] = useState();
    useEffect(() => {
        console.log("in effect")
      axios
        .get("http://localhost:8080/types")
        .then((res) => {
            console.log("in axios")
          console.log(res.data);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    console.log(data)
    // const state = useSelector((state) => {
    //   return {
    //     isLoggedIn: state.usersReducer.isLoggedIn,
    //     UserType: state.usersReducer.UserType,
    //   };
    // });
  
    return (
        <>
        <Navbar/>
        <Header/>
        <Section/>
        <Categories/>
        <Footer/>
        </>
    //   <div>
    //     <div className="flex">
    //       <span>Hospital</span> Departments
    //     </div>
  
    //     <div className="container">
    //       <div className="row justify-content-around">
    //       {data !== undefined ? data.map((e)=>{
    //         return(<div className=" my-5 py-4 Sh-card" style={{ width: "21rem" }}>
    //                     <div className="card-body text-center grid-col">
    //                       <h4 className="card-title title-discription">{e.name}</h4>
    //                       <p className="text-dep">{e.description}</p>
    //                       {state.isLoggedIn && state.UserType === "Patient" && (<button type="button" className="btn-b" onClick={()=>{navigate(`/Department/${e.id}`);}}>
    //                         Book Now
    //                         <span className="fas fa-chevron-right"></span>
    //                       </button>)}
    //                     </div>
    //                   </div>)
    //         }) : "Wait"}
    //       </div>
    //     </div>
    //   </div>
    );
  }
  
  export default Home;