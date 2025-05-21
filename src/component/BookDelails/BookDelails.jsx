import { useLoaderData, useParams } from "react-router-dom"
import { addToStoredReadList, addToStoredWishList } from "../utility/utility"

export default function BookDelails() {
    const {bookId} = useParams()
    const loder = useLoaderData()
    const inNumber = parseInt(bookId)
   

    const book = loder.find((ids)=>ids.bookId === inNumber)


    
    const handleMarkAsRead = (id) =>{

        addToStoredReadList(id);
    }


      const handleAddToWishList = (id) =>{
        addToStoredWishList(id);
    }

  return (
    <div className="w-11/12 mx-auto">
         <div className="w-11/12 mx-auto">
      {book && (
        <div className="mt-12">
          <div className="flex lg:gap-[400px] flex-col lg:flex-row lg:justify-between lg:items-center">
            <div className="p-[73px] bg-gray-200 rounded-xl">
              <img
                src={book.image}
                className="max-w-sm rounded-lg shadow-2xl h-[500px]"
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold my-6">{book.bookName}</h1>
              <p className="my-2 font-bold">{book.author}</p>
              <div className="border border-gray-300 my-3"></div>
              <h1 className="font-semibold">{book.category}</h1>
              <div className="border border-gray-300 my-3"></div>
              <p>Review : {book.review}</p>
              <div className="flex items-center gap-3 my-4">
                Tags:
                {book.tags.map((tag, index) => (
                  <button
                    key={index}
                    className="btn text-green-500 rounded-full bg-gray-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="border border-gray-300 my-3"></div>
              <div>
                <h1 className="font-bold">
                  <span className="text-gray-500">Number of Pages:</span>{" "}
                  {book.totalPages}
                </h1>
                <h1 className="font-bold my-1">
                  <span className="text-gray-500">Publisher:</span>{" "}
                  {book.publisher}
                </h1>
                <h1 className="font-bold">
                  <span className="text-gray-500">Year of Publishing:</span>{" "}
                  {book.yearOfPublishing}
                </h1>
                <h1 className="font-bold my-1">
                  <span className="text-gray-500">Rating:</span> {book.rating}
                </h1>
              </div>
              <div className="flex items-center gap-4 my-4">
                <button
                  className="btn"
                  onClick={() => handleMarkAsRead(book.bookId)}
                >
                  Read
                </button>
                <button
                  className="btn btn-accent"
                  onClick={() => handleAddToWishList(book.bookId)}
                >
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
        
    </div>
    
  )
}

