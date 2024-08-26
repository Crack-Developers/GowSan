import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import BlogCard from "./BlogCard";
import img1 from "../../assets/BlogsImg/blog1.jpg"
import img2 from "../../../src/assets/BlogsImg/blog2.jpeg"
import img4 from "../../../src/assets/BlogsImg/blog4.jpeg"

const BlogData = [
    {
        id: 1,
        image: img1,
        title: "University of Hertfordshire",
        description: "Save up to £9,000 on your three-year undergraduate degree with the UH Tri-annual UG Scholarship, which offers £2,000 per year. Additionally, if you pay the full tuition fee before or at registration, you will receive an extra discount of £1,000 per year.",
    },
    {
        id: 2,
        image: img2,
        title: "Coventry University",
        description: "In July 2024, Students can benefit from up to £5,000 in scholarships and discounts. Postgraduate scholarships are worth £3,000, while undergraduate scholarships are valued at £1,000 per year. Additionally, there's an extra £2,000 Early Payment Discount available for Coventry University and Coventry University London if the tuition fee deposit is received by 17 June 2024, exclusive to priority visa holders.",
    },
    {
        id: 3,
        image: img4,
        title: "Eligibility for spouse open work at Canadian universities",
        description: "Canadian universities offer institutes with affordable engineering and applied science programs eligible for spouse open work permits.",
    },
]

const Blogs = () => {
    const navigate = useNavigate(); // Get the navigate function from useNavigate

    const handleViewMore = () => {
        // Redirect to the blog page when "View More" button is clicked
        navigate("/blog"); // Assuming "/blog" is the path to your blog page
    };

    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
                <div className="container">
                    <h1 className="my-8 bolder-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">Our Blogs</h1>
                    {/* Blogs Card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            BlogData.map((blog) => (
                                <BlogCard key={blog.id} {...blog} />
                            ))
                        }
                    </div>
                    <div className="text-center">
                        {/* Attach handleViewMore to the onClick event of the button */}
                        <button onClick={handleViewMore} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;
