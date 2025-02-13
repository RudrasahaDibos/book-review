import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen rounded-3xl mt-8">
            <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co.com/vhYQRk7/old-books-with-dry-leaves.jpg"
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen <br /> up your bookshelf</h1>

                    <Link href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group mt-6">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">View the List</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;