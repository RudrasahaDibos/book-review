
// import toast from "react-hot-toast"

import toast from "react-hot-toast"

// export const getBooks = () =>{
//     let bookss = []
//     const stroedBooks = localStorage.getItem('bookss')
//      if(stroedBooks){
//         bookss = JSON.parse(stroedBooks)
//      }
//      return bookss
//     }

    // save 
    // export const saveBook = (id)=>{
    //     let bookss = getBooks()
    //     const isexist = bookss.find(bId => bId.id === id)
    //     if(isexist){
    //          return toast.error('Already Book Read')
    //     }
    //     bookss.push(id)
    //     localStorage.setItem('bookss',JSON.stringify(bookss))
    //     toast.success('Book add Successfully')
    // }
    // delete 
    // export const deleteBook = (id)=>{
    //     let bookss = getBooks()
    //     const remaining = bookss.filter(b => b.id !== id)
    //     localStorage.setItem('books',JSON.stringify(remaining))
    //     toast.success('Book Removed from Read book')
    // }

     export const getStoredReadBook = ()=>{
        let Books = []
        const storedBooks =  localStorage.getItem('books')
        if(storedBooks){
            Books = JSON.parse(storedBooks)
        }
        return Books
     }




    export const SaveBookRead = (id)=>{
        const storedBooks = getStoredReadBook()
        const isExist = storedBooks.find(bookid => bookid === id)
        if(isExist){
           return toast.error('Already Read Book')
        }
        else{
            storedBooks.push(id)
            localStorage.setItem('books',JSON.stringify(storedBooks))
            toast.success('Read Book Succesfully')
        }

    }