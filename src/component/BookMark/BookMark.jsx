import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../utility/utility';
import { CiLocationOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdOutlineContactPage } from "react-icons/md";
import { GiCalendarHalfYear } from "react-icons/gi";


export default function BookMark() {
  const [book, setBook] = useState([])
  const allBook = useLoaderData()
  useEffect(()=>{
    const locastoregBookMark = getStoredReadList()
    const parsin = locastoregBookMark.map((p)=> parseInt(p))
    const bokkMarkData = allBook.filter((bok)=>parsin.includes(bok.bookId))

    setBook(bokkMarkData)
    // setBook(bokkMarkData)
  },[])


    const [wist, setWist] = useState([])
  useEffect(()=>{
    const getStoredWish = getStoredWishList()
    const parsinWist = getStoredWish.map((p)=> parseInt(p))
    const bokkMarkData = allBook.filter((bok)=>parsinWist.includes(bok.bookId))

    setWist(bokkMarkData)
    // setBook(bokkMarkData)
  },[])

  const handleRating = (R)=>{
  if(R === 'Rating'){
  const rating = [...book].sort((a, b) => b.rating - a.rating)
  setBook(rating)
  setWist(rating)
  }else{
  setBook('')
  setWist('')
  }
  }

  const handleNumberOfPages = (N)=>{
    if(N === 'numberOfpages'){
  const rating = [...book].sort((a, b) => a.totalPages - b.totalPages)
  setBook(rating)
  setWist(rating)
  }else{
  setBook('')
  setWist('')
  }
  }
  const handlePublisherYear = (N)=>{
    if(N === 'handlepublisheryear'){
  const rating = [...book].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing)
  setBook(rating)
  setWist(rating)
  }else{
  setBook('')
  setWist('')
  }
  }



  return (
    <div className='w-11/12 mx-auto'>
      <div className='my-8 text-center'>
        <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1 bg-emerald-400">Sort By</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>handleRating('Rating')}><a>Rating</a></li>
    <li onClick={()=>handleNumberOfPages('numberOfpages')}><a>Number of pages</a></li>
    <li onClick={()=>handlePublisherYear('handlepublisheryear')}><a>Publisher year</a></li>
  </ul>
</div>
      </div>
<Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
{/* এভাবেও করা যায় */}
      {/* <div>
        {
          book.map((data)=> <BookData booksD={data}></BookData>)
        }
      </div> */}
      <div>
        {
        book.map((data,idx)=> <div key={idx} className=" bg-base-200 my-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
  <div className="flex flex-col lg:flex-row items-center p-6 gap-[100px]">
    <img
      src={data.image}
      className=" rounded-lg shadow-2xl h-[300px]"
    />
    <div>
      <h1 className="text-5xl font-bold">{data.bookName}</h1>
      <p className="my-2">By: {data.author}</p>
    
    
     <div className="flex items-center gap-3 my-4">
                Tags:
                {data.tags.map((tag, index) => (
                  <button
                    key={index}
                    className="btn text-green-500 rounded-full bg-gray-200"
                  >
                    {tag}
                  </button>
                ))}
                <span className='flex items-center gap-1'> <span className='mx-2'>Year of Publishing:</span> <CiLocationOn className='font-bold'/>{data.publisher}</span>
              </div>
           <div>
            <span className='flex items-center gap-2'><CgProfile />Publisher: {data.publisher}</span>
            <span className='flex items-center gap-2 my-1'><MdOutlineContactPage />
             page: {data.totalPages}</span>
            <span className='flex items-center gap-2'><GiCalendarHalfYear />
             year: {data.yearOfPublishing}</span>
           </div>
          <div className="border border-gray-300 my-3"></div>
      <div className='flex items-center gap-4'>
        <button className="btn btn-soft btn-info">Category: {data.category}</button>
        <button className="btn btn-soft btn-warning">Rating: {data.rating}</button>
        <button className="btn btn-success">View Details</button>
      </div>
    </div>
  </div>
</div>)
        }
      </div>

    </TabPanel>
    <TabPanel>
      <div>
        {
        wist.map((data,idx)=> <div key={idx} className=" bg-base-200 my-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
  <div className="flex flex-col lg:flex-row items-center p-6 gap-[100px]">
    <img
      src={data.image}
      className=" rounded-lg shadow-2xl h-[300px]"
    />
    <div>
      <h1 className="text-5xl font-bold">{data.bookName}</h1>
      <p className="my-2">By: {data.author}</p>
    
    
     <div className="flex items-center gap-3 my-4">
                Tags:
                {data.tags.map((tag, index) => (
                  <button
                    key={index}
                    className="btn text-green-500 rounded-full bg-gray-200"
                  >
                    {tag}
                  </button>
                ))}
                <span className='flex items-center gap-1'> <span className='mx-2'>Year of Publishing:</span> <CiLocationOn className='font-bold'/>{data.publisher}</span>
              </div>
           <div>
            <span className='flex items-center gap-2'><CgProfile />Publisher: {data.publisher}</span>
            <span className='flex items-center gap-2'><MdOutlineContactPage />
             page: {data.totalPages}</span>
              <span className='flex items-center gap-2'><GiCalendarHalfYear />
             year: {data.yearOfPublishing}</span>
           </div>
          <div className="border border-gray-300 my-3"></div>
        <div className='flex items-center gap-4'>
        <button className="btn btn-soft btn-info">Category: {data.category}</button>
        <button className="btn btn-soft btn-warning">Rating: {data.rating}</button>
        <button className="btn btn-success">View Details</button>
      </div>
    </div>
  </div>
</div>)
        }
      </div>
    </TabPanel>
  </Tabs>
    </div>
  )
}

 
// bookName
// author
// image
// review
// totalPages
// rating
// category
// tags
// publisher
// yearOfPublishing