import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaGratipay } from "react-icons/fa6";

const Book = ({ book }) => {
    const { author,
        id, bookName,
        category, image, publisher, rating,
        review, tags,
        totalPages, yearOfPublishing

    } = book
   
    return (
        <Link to={`/listed/${id}`} className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 hover:scale-105 transition hover:border-secondary">
        <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
        <div className="mt-6 mb-2 space-y-2">
            <div className="flex gap-4  ">
            <span className="block text-xs font-medium tracking-widest uppercase text-green-500 dark:text-violet-600">{tags[0]}</span>
            <span className="block text-xs font-medium tracking-widest uppercase  text-green-500 dark:text-violet-600">{tags[1]}</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-wide">{bookName}</h2>
            <p className="text-xl ">By : {author}</p>
        </div>
        <hr className="border-dashed" />
       <div className="flex justify-between items-center">
        <p className="text-xl">{category}</p>
        <div className="flex justify-center items-center gap-4">
            <p className="text-xl">{rating}</p>
            <p className="text-xl"><FaGratipay /></p>
        </div>
       </div>
    </Link>
    );
};
Book.protoType={
    book:PropTypes.object.isRequired
}

export default Book;