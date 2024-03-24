import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Root/Home/Home';
import AppliedJobs from './components/Root/AppliedJobs/AppliedJobs';
import ErrorPage from './components/Root/ErrorPage/ErrorPage';
import JobDetails from './components/Root/JobDetails/JobDetails';
import FeaturedJobs from './components/Root/FeautureJobs/FeaturedJobs';
import Jobs from './Jobs/Jobs';
import Blog from './components/Root/Blog/Blog';
import StatisticsPage from './components/Root/StatisticsPage/StatisticsPage';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        
      },
      {
        path:"/applied",
        element:<AppliedJobs></AppliedJobs>,
        loader:() => fetch("../public/jobs.json")

       
      },

      {
       path:"/jobs",
      element:<Jobs></Jobs>,
      loader:() => fetch("../public/jobs.json")
      },

      
      {
        path:"job/:id",
        element:<JobDetails></JobDetails>,
        loader:() => fetch("..//public/jobs.json"),


      },
      {
        path:"/blogs",
        element:<Blog></Blog>,
        loader:() => fetch("../public/categories.json")
      },
    
      {
        path:"/statistics",
        element:<StatisticsPage></StatisticsPage>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
