import img from "../../../assets/images/user.png"

const Banner = () => {
    return (
        <div className=" w-[90%] m-auto  p-10">



           <div className=" lg:flex  justify-center items-center  ">
           <div className=" p-5">
                <h1 className="font-extrabold text-2xl my-5 lg:text-6xl">Hi There I am From Freelencer</h1>
                <p className="my-5 font-extralight text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni aperiam doloribus sapiente, nesciunt nam eligendi accusamus suscipit ullam quae.</p>
             
             <button className="btn btn-primary w-40">See</button>
            </div>
            <div>
            <img src={img} alt="user" />
            </div>
           </div>
           
        </div>
    );
};

export default Banner;