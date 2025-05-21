import { useEffect, useState } from "react"
import BookData from "../BookData/BookData"

export default function BooksFetch() {
    const [book, setBook] = useState([])
    useEffect(()=>{
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBook(data))
    },[])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {
    book.map((books)=> <BookData key={books.bookId} booksD={books}></BookData>)
    }
    </div>
  )
}
