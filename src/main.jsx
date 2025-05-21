import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainsBooks from './component/MainsBook/MainsBooks.jsx';
import Homes from './component/Homes/Homes.jsx';
import BookMark from './component/BookMark/BookMark.jsx';
import Pagess from './component/Pagess/Pagess.jsx';
import BookDelails from './component/BookDelails/BookDelails.jsx';
  import { ToastContainer } from 'react-toastify';
import Errors from './component/Errors/Errors.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainsBooks,
    errorElement:<Errors></Errors>,
    children:[
    {
      index:true,
      Component:Homes,
    },
    {
      path:'/bookmark',
      Component:BookMark,
     loader: async () => {
  const res = await fetch('/booksData.json');
  const data = await res.json();
  return data;
}

    },
    {
      path:'/pagess',
      Component:Pagess,
       loader: ()=> fetch('booksData.json')
    },
    {
  path:'/bookDelails/:bookId',
  Component:BookDelails,
  loader: ()=> fetch('booksData.json')
    }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
       <ToastContainer />
  </StrictMode>,
)
