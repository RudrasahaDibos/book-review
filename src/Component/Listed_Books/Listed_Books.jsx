
import Book from "../Book/Book";
import { useEffect, useState } from "react";



const Listed_Books = () => {
    const [books , setbooks] = useState([])
    useEffect(()=>{
        fetch('Book.json')
        .then(res=>res.json())
        .then(data =>setbooks(data))
    },[])
    
  console.log(books)
    return (
        <div className="grid md:grid-cols-3 gap-6 mt-10 grid-cols-1  max-w-7xl mx-auto" >
        {
            books.map((book ,idx)=> <Book key={idx} book={book} ></Book>)
        }
    </div>
    );
};

export default Listed_Books;