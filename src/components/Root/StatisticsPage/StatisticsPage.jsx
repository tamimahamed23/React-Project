
import './StatisticsPage.css'; // Import your CSS file for styling

const StatisticsPage = () => {
 
  return (
    <div className="blog-container lg:flex gap-10">
      <div className="blog-post">
        <h2 className="blog-title">10 Tips for Crafting a Standout Resume</h2>
        <p className="blog-content">
          Offer advice on how job seekers can optimize their resumes to catch the attention of employers, including formatting tips, relevant skills showcase, and tailored content.
        </p>
      </div>

      {/* Repeat the structure for each blog post */}
      {/* Example: */}
      <div className="blog-post">
        <h2 className="blog-title">Navigating the Job Search: Effective Strategies for Finding Opportunities</h2>
        <p className="blog-content">
          Provide guidance on how job seekers can efficiently search for job openings, including utilizing online job boards, networking techniques, and leveraging social media.
        </p>
      </div>

      {/* Repeat for each blog post */}

    </div>
  );
  }
export default StatisticsPage;
