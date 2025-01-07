
import { useLoaderData, useParams } from "react-router-dom";





const Listed_Books = () => {
  const books = useLoaderData()
  const { bookId } = useParams()
  const intid = parseInt(bookId)
  console.log(books)
  const book = books.find((book) => book.bookId === intid)
  console.log("he", book)
  const { author,
    bookName,
    category, image, publisher, rating,
    review, tags,
    totalPages, yearOfPublishing

  } = book

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl max-w-7xl mx-auto mt-6">
      <figure className="w-2/4">
        <img
          src={image}
          alt="Album" />
      </figure>
      <div className="card-body w-2/4">
        <h2 className="card-title  text-4xl font-bold">{bookName}</h2>
        <h1 className="text-2xl ">By : {author}</h1>
        <hr />
        <h1 className="text-xl ">{category}</h1>

        <hr />

        <p> <span className="text-xl font-bold mt-2">Review :</span>{review}</p>

        <div className="flex gap-4">
          <h1><span className="mr-4"> tags </span><span className="text-green-500"># {tags[0]}</span></h1>
          <h1><span className="text-green-500"># {tags[1]}</span></h1>
        </div>

        <hr className="mt-4" />


        <div>
          <div className="flex gap-10">
            <h1 className="text-xl">Number of Pages :</h1>
            <h1 className="text-xl font-bold">{totalPages}</h1>
          </div>
          <div className="flex gap-28">
            <h1 className="text-xl">publisher :</h1>
            <h1 className="text-xl font-bold">{publisher}</h1>
          </div>
          <div className="flex gap-12">
            <h1 className="text-xl">yearOfPublishing:</h1>
            <h1 className="text-xl font-bold">{yearOfPublishing}</h1>
          </div>
          <div className="flex gap-36">
            <h1 className="text-xl">Rating:</h1>
            <h1 className="text-xl font-bold text-center">{rating}</h1>
          </div>


        </div>


        <div className="card-actions ">
          <button className="btn btn-primary">Read</button>
          <button className="btn btn-secondary">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Listed_Books;