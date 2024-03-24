

const BlogDiv = ({blog}) => {
    return (
        
        <div className="w-[90%] m-auto">
            <div className="border rounded-md my-10 p-10   ">
           <div className="w-4/5 m-auto">
           <img src={blog.logo} alt="" />
           </div>
            <h2 className="font-extrabold my-5 text-5xl">{blog.availability}</h2>
         
            <h1 className="font-extrabold text-5xl my-10">{blog.category_name}</h1>

            <div>
      <h1>Welcome to [Your Job Website Name]</h1>
      <p>
        At [Your Job Website Name], we're dedicated to connecting talented individuals with exciting career opportunities. Whether you're a seasoned professional looking to take the next step in your career or a recent graduate eager to kick-start your journey, we have something for everyone.
      </p>
      <h2>Why Choose Us?</h2>
      <ul>
        <li><strong>Comprehensive Job Listings:</strong> Gain access to a vast array of job listings spanning various industries, sectors, and experience levels.</li>
        <li><strong>Advanced Search Filters:</strong> Our intuitive search filters allow you to narrow down your job search based on location, salary, job type, and more.</li>
        <li><strong>Personalized Job Recommendations:</strong> Receive personalized job recommendations based on your profile, skills, and interests.</li>
        <li><strong>Easy Application Process:</strong> Applying for jobs has never been easier. With just a few clicks, you can submit your application directly through our platform.</li>
        <li><strong>Career Resources:</strong> Access a wealth of resources, including resume writing tips, interview guidance, and career advice articles.</li>
        <li><strong>Employer Insights:</strong> Get valuable insights into companies and industries, including company profiles, employee reviews, and salary information.</li>
        <li><strong>Stay Updated:</strong> Stay informed about the latest job openings and industry trends with our regular updates and notifications.</li>
        <li><strong>Join Our Community:</strong> Connect with like-minded professionals, share insights, and network with industry peers through our vibrant community forums and networking events.</li>
      </ul>
      <p>
        At [Your Job Website Name], we're committed to empowering individuals to find fulfilling career opportunities and take their professional journey to new heights. Start your job search journey with us today and unlock endless possibilities for your future.
      </p>
    </div>
        </div>
        </div>
    );
};

export default BlogDiv;