import { CiLocationOn } from "react-icons/ci";
import { IoLogoUsd } from "react-icons/io";
import { Link } from "react-router-dom";

const Job = ({job}) => {

    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information}= job;
    return (
        <div className="border p-10 my-10">
            <img src={logo} alt="" className="w-72  p-5" />
            <h2 className="font-semibold text-4xl my-3">{job_title}</h2>
            <h3 className="font-extrabold text-6xl">{company_name}</h3>
            <div className="my-5 flex gap-5 items-center">
                
                <button className="border p-3 w-40 border-purple-900">{remote_or_onsite}</button>
                <button className="border p-3 w-40 border-purple-900">{job_type}</button>
            
            </div> 
           
           <div className="flex gap-5">
           <h5 className="font-semibold my-2 flex items-center justify-center gap-2"><CiLocationOn />{location}</h5>
            
            <h4 className="font-semibold my-2 flex items-center justify-center gap-2"> <IoLogoUsd />{salary}</h4>
           </div>
           
          

          <Link to={`./job/${id}`}>
           <button className="p-3 btn btn-primary w-40 my-5" >Show Details</button>
           </Link>

           
          
        </div>
    );
};

export default Job;