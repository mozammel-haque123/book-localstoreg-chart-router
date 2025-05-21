import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function MainsBooks() {
  return (
    <div>
        <div className="">
  <Navbar></Navbar>
  <Outlet></Outlet>
        </div>
  <Footer></Footer>   
  
    </div>
  )
}
