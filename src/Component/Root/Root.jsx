import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";



const Root = () => {
    return (
        <div>
           <div>
           <Header></Header>
           </div>
          <div className="min-h-[calc(100vh-246px)]">
          <Outlet></Outlet>
          </div>
            <div className="mt-8">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;