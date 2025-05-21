import { Link } from "react-router-dom"

export default function BookData({booksD}) {
    const {bookName,author,image,totalPages,rating,category,tags,publishe,yearOfPublishing,bookId} = booksD
  return (
    <div>
  <Link to={`/bookDelails/${bookId}`}>
  <div className="card bg-base-100  h-[520px] p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
  <figure className=" py-[140px] bg-gray-200 rounded-lg">
    <img className="w-[120px]"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">

   <div className="flex gap-2 items-center">
     {
        tags.map((tag,index)=> <button key={index} className="btn text-green-500 rounded-full bg-gray-200">{tag}</button>)
    }
   </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>By: {author}</p>
    <div className="border border-dashed my-2 border-gray-300"></div>

    <div className="card-actions justify-between">
     <div>{category}</div>
     <div className="flex items-center gap-3">
        <span>{rating}</span>
        <span>
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" aria-label="1 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />

</div>
        </span>
     </div>
    </div>
  </div>
</div>
  </Link>
    </div>
  )
}
