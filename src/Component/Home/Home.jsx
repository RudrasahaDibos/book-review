
import Banner from "../Banner/Banner";
import Books from "../Book/Books";







const Home = () => {
     
    return (
        <div>
           <div className="max-w-7xl mx-auto ">
           <Banner></Banner>
           </div>
            <div>
             <Books></Books>
            </div>
        </div>
    );
};

export default Home;