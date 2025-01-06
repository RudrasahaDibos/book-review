import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Listed_Books from './Component/Listed_Books/Listed_Books';
import Pagestoread from './Component/Pages_to_Read/Pagestoread';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<h1>Error</h1>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },{
        path:'/listed',
        element:<Listed_Books></Listed_Books>,

      },
      {
        path:'/read',
        element:<Pagestoread></Pagestoread>
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
