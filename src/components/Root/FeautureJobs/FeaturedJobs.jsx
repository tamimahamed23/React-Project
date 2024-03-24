import { useEffect, useState } from "react";
import Job from "../Job/Job";
import "./FeaturedJobs.css"


const FeaturedJobs = () => {

    const [jobs,setJobs]=useState([]);
    const [loading,setLoading]=useState(4);

    useEffect(() => {


        fetch("jobs.json")
        .then(res => res.json())
        .then(data => setJobs(data));


    },[])
    return (
        <div className="my-10 p-10">
           <div className="my-10 p-10">
           <h2 className="md:text-7xl text-5xl my-5 text-center font-extrabold">Feature Jobs </h2>
           <p className="w-4/5 m-auto  text-center font-extralight text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ea eligendi rerum eius assumenda explicabo beatae ad, vel nobis, excepturi, non voluptatem!</p>
           </div>

           <div className="w-[90%] m-auto f-job-container">
            {
                jobs.slice(0,loading).map(job => <Job key={job.id} job={job} jobs={job}></Job>)
            }
           </div>

          <div className="py-10  w-full text-center items-center">
                       <button className="btn btn-primary" onClick={(e) => {


                             setLoading(jobs.length);
                             e.target.classList.add("hidden");

                       }}>Show All Jobs</button>
          </div>
        </div>
    );
};

export default FeaturedJobs;