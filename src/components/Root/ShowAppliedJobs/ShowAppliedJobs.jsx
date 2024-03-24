
import { CiLocationOn } from "react-icons/ci";
import { IoLogoUsd } from "react-icons/io";

const ShowAppliedJobs = ({job}) => {

    // const {logo,job_discription,job_title,job_type,location,sallary} = job;
    return (
        <div className="border  p-10 ">
           
           <div className="lg:flex items-center justify-center">
            <div className="lg:w-2/5 border p-10 m-5 bg-purple-200">
            <img src={job.logo} alt="" />
            </div>
            <div className=" p-10 flex flex-col gap-5 ">
            <h2 className="font-extrabold text-5xl">{job.company_name}</h2>
            <h3 className="font-semibold text-3xl">{job.job_title}</h3>
            <h2>{job.job}</h2>

            <div >
                <button className="border p-3 w-40 border-purple-900">{job.remote_or_onsite}</button>
                <button className="border p-3 w-40 border-purple-900">{job.job_type}</button>
            </div>
            <div className="flex">
                <h5 className="font-semibold my-2 flex items-center  gap-2"><CiLocationOn />{job.location}</h5>
                <h4 className="font-semibold my-2 flex items-center justify-center gap-2"> <IoLogoUsd />{job.salary}</h4>
            </div>
            </div>

            <div className=" justify-center items-center">
                <button className= " btn btn-primary">Show More</button>
            </div>
            

           </div>
        </div>
    );
};

export default ShowAppliedJobs;