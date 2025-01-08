import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../Utlis/Localstrage";
import ReadstroedBook from "./ReadstroedBook";

const Listed_booknav = () => {
    const books = useLoaderData()
    const [Readbooks, setReadsbooks] = useState([])
    useEffect(() => {
        const storedBooks = getStoredReadBook()
        if (books.length > 0) {
            const ReadBooked = []
            for (const id of storedBooks) {
                const book = books.find(book => book.id === id)
                if (book) {
                    ReadBooked.push(book)
                }
            }
            setReadsbooks(ReadBooked)
            console.log(ReadBooked)
        }
    }, [])


    return (
        <div>
            <div className="max-w-7xl mx-auto bg-gray-400 mt-4 ">
                <div className="p-6 py-12 dark:bg-violet-600 dark:text-gray-50">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row justify-center items-center">
                            
                           
                            <h2 className="text-center text-green-600 text-6xl tracking-tighter font-bold">Book
                            
                            </h2>
                          
                         
                        </div>
                    </div>
                </div>
            </div>


            <div className="max-w-7xl mx-auto space-y-3 mt-36">
                {
                    Readbooks.map((Readbook, idx) => <ReadstroedBook key={idx} Readbook={Readbook}></ReadstroedBook>)
                }
            </div>
        </div>
    );
};

export default Listed_booknav;