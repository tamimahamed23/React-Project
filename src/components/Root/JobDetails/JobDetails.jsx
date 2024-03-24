import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoUsd } from "react-icons/io";
import { CiPhone } from "react-icons/ci";
import { TbAddressBook } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../../Utlity/LocalStorage";



const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast("You Have Applied Successfully")
    }
   

    return (
        <div>
            <h1 className="font-extrabold text-center my-10 text-4xl md:text-7xl" >Details About This Jobs</h1>

            <div className="md:flex gap-10 w-[90%] m-auto border my-10">
                 <div className=" p-10">
           <p className="font-extralight my-2 text-lg ">
                <b className="font-extrabold text-2xl ">About This Jobs</b> <br />{job.job_description}</p>
            <p className="font-extralight my-2 text-lg ">
                <b className="font-extrabold">Job Responsibility <br /></b>{job.job_responsibility}</p>
            <p className="font-extralight my-2 text-lg ">{job.educational_requirements}</p>
            <p className="font-extralight my-2   text-green-900 text-xl">
                <b className="font-semibold">Experiences <br /></b>{job.experiences}</p>
           </div>

      

            <div className=" p-10">
            <img src={job.logo} alt="" className="w-72  p-5" />   
            <h2 className="font-semibold text-4xl my-3">{job.job_title}</h2>
            <h3 className="font-extrabold text-6xl">{job.company_name}</h3>
            <div className="my-5 flex gap-5 items-center">
                
                <button className="border p-3 w-40 border-purple-900">{job.remote_or_onsite}</button>
                <button className="border p-3 w-40 border-purple-900">{job.job_type}</button>
            
            </div> 
           
           <div className="flex gap-5">
           <h5 className="font-semibold my-2 flex items-center justify-center gap-2"><CiLocationOn />{job.location}</h5>
            
            <h4 className="font-semibold my-2 flex items-center justify-center gap-2"> <IoLogoUsd />{job.salary}</h4>
           </div>

           <div>
           
           <h4 className=" my-2 flex items-center  gap-2">
           
            <CiPhone />
             {job.contact_information.phone}
           </h4>

           <h4 className=" my-2 flex items-center  gap-2">
           
           <IoIosMail />
            {job.contact_information.email}
          </h4>
          <h4 className=" my-2 flex items-center  gap-2">
           
          <TbAddressBook />
            {job.contact_information.address}
          </h4>
            
       
           
           </div>

          
          

          
           <button className="p-3 btn btn-primary w-40 my-5"  

            onClick={handleApplyJob}
          
           >Apply Now</button>
           
 
           
          
        </div>

          <ToastContainer />
            </div>
          
        </div>
    );
};

export default JobDetails;