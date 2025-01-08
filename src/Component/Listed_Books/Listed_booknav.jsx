import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../Utlis/Localstrage";
import ReadstroedBook from "./ReadstroedBook";

const Listed_booknav = () => {
     const books =  useLoaderData()
    const [Readbooks , setReadsbooks] = useState([])
     useEffect(()=>{
          const storedBooks = getStoredReadBook()
          if(books.length > 0){
            const ReadBooked = []
             for (const id of storedBooks) {
                  const book =  books.find(book => book.id === id)
                  if(book){
                    ReadBooked.push(book)
                  }
             }
             setReadsbooks(ReadBooked)
             console.log(ReadBooked)
          }
     },[])

    
    return (
        <div>
               <div>

               </div>

            
              <div className="max-w-7xl mx-auto space-y-3 mt-36">
                {
                    Readbooks.map((Readbook,idx)=> <ReadstroedBook key={idx} Readbook={Readbook}></ReadstroedBook>)
                }
              </div>
        </div>
    );
};

export default Listed_booknav;