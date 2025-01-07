import Book from "../Book/Book";
import { useEffect, useState } from "react";

const Books = () => {
    const [books, setbooks] = useState([])
    useEffect(() => {
        fetch('Book.json')
            .then(res => res.json())
            .then(data => setbooks(data))
    }, [])

    return (

        <div>
            <h1 className="text-4xl font-bold text-center mt-8">Books</h1>
            <div className="grid md:grid-cols-3 gap-6 mt-10 grid-cols-1  max-w-7xl mx-auto" >
                {
                    books.map((book, idx) => <Book key={idx} book={book} ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;