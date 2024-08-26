import React from "react";
import BlogCard from "./BlogCard";
import img1 from "../../assets/BlogsImg/blog1.jpg"
import img2 from "../../../src/assets/BlogsImg/blog2.jpeg"
import img3 from "../../assets/BlogsImg/blog3.jpg"
import img4 from "../../../src/assets/BlogsImg/blog4.jpeg"
import img5 from "../../../src/assets/BlogsImg/blog5.jpeg"
import img6 from "../../../src/assets/BlogsImg/blog6.jpeg"
import img7 from "../../../src/assets/BlogsImg/blog7.jpeg"
import img8 from "../../../src/assets/BlogsImg/blog8.jpeg"
import img9 from "../../../src/assets/BlogsImg/blog9.jpeg"
import img10 from "../../../src/assets/BlogsImg/blog10.jpeg"
import img11 from "../../../src/assets/BlogsImg/blog11.jpeg"
import img12 from "../../../src/assets/BlogsImg/blog12.jpeg"

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
        image: img3,
        title: "Yaroslav-The-Wise Novgorod State University",
        description: "Yaroslav-the-Wise Novgorod State University, also known as NovSU, founded in 1993, merged two oldest institutions in Veliky Novgorod. It excels in MBBS education with coaching from the first year, Indian food options in hostels, and collaborations with over 20 international universities.",
    },
    {
        id: 4,
        image: img4,
        title: "Eligibility for spouse open work at Canadian universities",
        description: "Canadian universities offer institutes with affordable engineering and applied science programs eligible for spouse open work permits.",
    },
    {
        id: 5,
        image: img5,
        title: "Study at Ontario Institution",
        description: "Study at Ontario institutions, located in Canada's financial hub, provides unparalleled opportunities for employment due to its robust economy and proximity to major industries.",
    },
    {
        id: 6,
        image: img6,
        title: "University of Sunderland",
        description: "The University of Sunderland in London offers the most popular program for nurses, the MSc Nursing, with entry requirements including a one-year course duration, IELTS scores of 6.5/5.5, eligibility for 10th/12th Bachelor's holders with over 60% marks, and upcoming intakes in August and September 2024.",
    },
    {
        id: 7,
        image: img7,
        title: "Study in Manitoba, Canada",
        description: "Study in Manitoba, Canada, and explore renowned institutions in Winnipeg, the capital, known for its top educational facilities. Winnipeg offers vast employment opportunities, particularly in industries such as Healthcare, Retail, Education, Public Administration, and Construction.",
    },
    {
        id: 8,
        image: img8,
        title: "University of Prince Edward Island",
        description: "Study in Prince Edward Island, Canada, known for its agriculture and fishing sectors. Charlottetown provides job opportunities in various fields including administration, education, healthcare, finance, IT, tourism, agriculture, and fisheries, while Summerside focuses on administration, finance, transportation, and aerospace industries.",
    },
    {
        id: 9,
        image: img9,
        title: "Study in Nova Scotia, Canada",
        description:"Study in Nova Scotia, Canada, which hosts over 12,000 international students from 140+ countries and offers abundant job opportunities. Halifax, the capital, serves as the region's primary economic center, while Cape Breton thrives in industries like agri-food, aquaculture, tourism, energy, transportation, and arts. Major job sectors include sales, trades, business, education, and management.",
    },
    {
        id: 10,
        image: img10,
        title: "Study in Alberta, Canada",
        description:"Consider Alberta, Canada, for your study abroad destination. Calgary, the largest city, along with notable cities like Red Deer, Lethbridge, and Fort McMurray, offers diverse opportunities. Edmonton, the capital known as the Oil Capital of Canada, reflects Alberta's significant oil industry. Enjoy Alberta's high quality of life, characterized by low taxes, high median income, and affordable housing.",
    },
    {
        id: 11,
        image: img11,
        title: "Study in New Brunswick, Canada",
        description:"Consider studying in New Brunswick, Canada, where the locals are known for their welcoming nature. Immerse yourself in a new culture through music, cuisine, languages, festivals, architecture, and history. Explore renowned educational hubs like Fredericton, Saint John, Moncton, and Dieppe.",
    },
    {
        id: 12,
        image: img12,
        title: "Study in Saskatchewan, Canada",
        description:"Consider studying in Saskatchewan, Canada, with its lower cost of living and a focus on agricultural innovation. Institutions like Saskatchewan Polytechnic and University of Regina offer nationally and internationally recognized education, while University of Saskatchewan leads in research on water, food security, and infectious diseases.",
    },
]

const Blogs = () => {
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
            </div>
        </div>
        </>
    );
};

export default Blogs;