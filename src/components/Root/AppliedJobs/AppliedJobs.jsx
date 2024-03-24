import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../../Utlity/LocalStorage";
import ShowAppliedJobs from "../ShowAppliedJobs/ShowAppliedJobs";


const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs,setAppliedJobs]= useState([]);
    const [displayJobs,setDisplayJobs] = useState([]);
    const handleJobsFilter = filter => {
        if(filter === "all"){
            setDisplayJobs(appliedJobs)
        }
        else if (filter === "remote"){
             const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
             setDisplayJobs(remoteJobs)
        }
        else if(filter === "onsite"){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJobs(onsiteJobs)
        }

    }
    
     useEffect(() => {
        const storedJobIds = getStoredJobApplication();

        if(jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            const jobsApplied = [];
            for (const id  of storedJobIds){
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobsApplied.push(job);
                }
            }
            // console.log(jobs, storedJobIds,jobsApplied);
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            console.log(jobsApplied)
        

        }
    },[jobs])
    return (
        <div className="border">

            
            <div className="w-[90%] m-auto p-10">
            <details className="dropdown">
  <summary className="m-1 border p-5">Filter Jobs</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100  w-52">
    <li onClick={() => handleJobsFilter("all")}><a>All</a></li>
    <li onClick={() => handleJobsFilter("remote")}><a>Remote</a></li>
    <li onClick={() => handleJobsFilter("onsite")}><a>Onsite</a></li>
  </ul>
</details>
            </div>
         

          <div className="flex flex-col gap-10 my-10 p-10 w-[90%] m-auto">
          {
            displayJobs.map(job => <ShowAppliedJobs key={job.id} job={job}></ShowAppliedJobs>)
          }
          </div>

        </div>
    );
};

export default AppliedJobs;