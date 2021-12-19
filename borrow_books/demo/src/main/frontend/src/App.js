import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Signup from './component/Signup';
import CategoryContents from './component/CategoryContents';
import UserProfile from './component/UserProfile';

function App() {
  return (

    <>
        <BrowserRouter>
    {/* <ScrollToTop> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category/:id" element={<CategoryContents/>} />
        <Route path="/UserProfile" element={<UserProfile />} />
        {/* <Route path="/Doctor/:id" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/DoctorProfile" element={<DoctorProfile />} />
        <Route path="/PatientProfile" element={<PatientProfile />} /> */}
      </Routes>
      {/* </ScrollToTop> */}
    </BrowserRouter>

    </>
  );
}

export default App;
