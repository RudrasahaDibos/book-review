import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ReadstroedBook = ({ Readbook }) => {
    const {
        author,
        id, bookName,
        category, image, publisher, rating,
        review, tags,
        totalPages, yearOfPublishing
    } = Readbook
    return (
        <div>

            <div className="p-6 sm:p-12 dark:bg-gray-50 dark:text-gray-800 border-2 rounded-2xl">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                    <img src={image} alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300" />
                    <div className="flex flex-col">
                        <h4 className="text-3xl  font-semibold text-center md:text-left">{bookName}</h4>
                        <h1 className="text-lg font-bold">By : {author}</h1>
                        <div className="flex  gap-4">
                            <h1 className="text-lg font-bold">Tag</h1>
                            <h1 className="text-lg font-bold"> #{tags[0]}</h1>
                            <h1 className="text-lg font-bold">#{tags[1]}</h1>
                            <div className="flex  justify-center items-center gap-2"><span><CiLocationOn /></span> <h1 className="text-lg font-bold">Year of Publishing : {yearOfPublishing}</h1></div>
                        </div>
                        <div className="flex  gap-4">
                            <div className="flex justify-start items-center gap-2"><span><GoPeople /></span>  <h1 className="text-lg font-bold">publisher : {publisher}</h1></div>
                            <div className="flex justify-start items-center gap-2" ><span><RiPagesLine /></span> <h1 className="text-lg font-bold"> Pages : {totalPages}</h1></div>
                        </div>
                    </div>

                </div>
                <hr className="mt-5" />

                <div className="flex justify-start ml-32 pt-4 space-x-4 align-center">
                    
                    <Link href="#_" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-blue-600 bg-blue-100 border border-transparent rounded-full md:w-auto hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-blue-100">
                    category : {category}
                    </Link>


                    <Link href="#_" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-orange-600 bg-orange-100 border border-transparent rounded-full md:w-auto hover:-orange-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:-orange-100">
                    Rating : {rating}
                    </Link>
                    <Link to={`/listed/${id}`} className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-green-500 border border-transparent rounded-full md:w-auto hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-green-500">
                    View Details
                    </Link>
                </div>
            </div>




        </div>
    );
};

ReadstroedBook.protoType = {
    Readbook: PropTypes.object.isRequired
}

export default ReadstroedBook;