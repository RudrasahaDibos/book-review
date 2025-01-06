
import Banner from "../Banner/Banner";
import Listed_Books from "../Listed_Books/Listed_Books";






const Home = () => {
     
    return (
        <div>
           <div className="max-w-7xl mx-auto ">
           <Banner></Banner>
           </div>
            <div>
            <Listed_Books></Listed_Books>
            </div>
        </div>
    );
};

export default Home;