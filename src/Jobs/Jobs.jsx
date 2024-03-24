import { useLoaderData } from "react-router-dom";
import Job from "../components/Root/Job/Job";


const Jobs = ({job}) => {
    

  
    const jobs = useLoaderData();
  
    return (
        <div className="">
           
            
            <div className="w-[90%] m-auto my-10 ">
            {

                               
                jobs.map(job => <Job key={job.id} job={job}></Job>)
            }
            </div>
        </div>
    );
};

export default Jobs;