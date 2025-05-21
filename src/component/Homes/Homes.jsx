import Banner from "../Banner/Banner";
import BooksFetch from "../BooksFetch/BooksFetch";

export default function Homes() {
  return (
    <div className="text-black w-11/12 mx-auto">
        <Banner></Banner>

        <h1 className="text-center text-4xl font-bold my-6">Books</h1>
        <BooksFetch></BooksFetch>
    </div>
  )
}
