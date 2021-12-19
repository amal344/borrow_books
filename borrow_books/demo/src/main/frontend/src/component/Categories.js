import { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Categories.css";

function Categories() {
  const navigate = useNavigate();
    const [categories, setCategories] = useState();
    useEffect(() => {
      axios
        .get("http://localhost:8080/types")
        .then((res) => {
          console.log(res.data);
          setCategories(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    return (
  
      <>
      
      <div className="flex">
        <span style={{color: "black"}}>Books</span> Categories
      </div>


      
      <div className="container">
        <div className="row justify-content-around">
        {categories !== undefined ? categories.map((e)=>{
          return(<div className=" my-5 py-4 Sh-card" style={{ width: "21rem" }}>
                      <div className="card-body text-center grid-col">
                        <h4 className="card-title title-discription">{e.name}</h4>
                        <p className="text-dep">{e.description}</p>
                        <button type="button" className="btn-b" onClick={()=>{navigate(`/category/${e.id}`);}} >
                          Book Now
                          <span className="fas fa-chevron-right"></span>
                        </button>
                      </div>
                    </div>)
          }) : "Wait"}
        </div>
      </div>
    
 
  
      </>
    );
  }
  
  export default Categories;