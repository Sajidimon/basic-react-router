import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Users from './Components/Users/Users.jsx';
import Userdetails from './Components/UserDetails/Userdetails.jsx';
import Photos from './Components/Photos/Photos.jsx';
import BigPhoto from './Components/BigPhoto/BigPhoto.jsx';
import Error from './Components/Errorpage/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <Userdetails></Userdetails>
      },
      {
        path: '/photos',
        loader: () => fetch('https://jsonplaceholder.typicode.com/photos'),
        element: <Photos></Photos>
      },
      {
        path: '/photo/:photoId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/photos/${params.photoId}`),
        element: <BigPhoto></BigPhoto>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
