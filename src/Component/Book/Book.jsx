import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { author,
        bookId, bookName,
        category, image, publisher, rating,
        review, tags,
        totalPages, yearOfPublishing

    } = book
   
    return (
        <Link className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
        <div className="mt-6 mb-2">
            <div className="flex gap-4  ">
            <span className="block text-xs font-medium tracking-widest uppercase text-green-500 dark:text-violet-600">{tags[0]}</span>
            <span className="block text-xs font-medium tracking-widest uppercase  text-green-500 dark:text-violet-600">{tags[1  ]}</span>
            </div>
            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
        </div>
        <hr />
        <p className="dark:text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
    </Link>
    );
};
Book.protoType={
    book:PropTypes.object.isRequired
}

export default Book;