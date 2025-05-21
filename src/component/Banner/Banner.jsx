import picHero from '../../assets/books.jpg'
export default function Banner() {
  return (
   <div className="hero bg-gray-100 lg:p-6 mt-12">
  <div className="hero-content lg:gap-[400px] flex-col lg:flex-row lg:justify-between lg:items-center">

    <div>
      <h1 className="text-5xl font-bold my-6">Books to freshen up <br /> your bookshelf</h1>
      <button className="btn btn-primary">Get Started</button>
    </div>

       <div>
    <img
      src={picHero}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    </div> 
  </div>
</div>
  )
}
