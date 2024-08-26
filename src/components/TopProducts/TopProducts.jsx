import React from "react";
import Img1 from "../../assets/shirt/Australia1.png";
import Img2 from "../../assets/shirt/UK1.png";
import Img3 from "../../assets/shirt/Canada1.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Australia",
    url: "/australia",
    description:
      "Studying in Australia offers diverse benefits: world-class education, multicultural environment, research opportunities, post-study work options, and vibrant lifestyle experiences.",
  },
  {
    id: 2,
    img: Img2,
    title: "UK",
    url: "/uk",
    description:
      "Studying in the UK provides top-tier education, rich cultural experiences, global networking opportunities, prestigious qualifications, and access to world-renowned research institutions.",
  },
  {
    id: 3,
    img: Img3,
    title: "Canada",
    url: "/canada",
    description:
      "Studying in Canada offers high-quality education, diverse cultural experiences, safe and welcoming environment, opportunities for post-graduation work, and pathways to permanent residency.",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
           
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Top Countries to Study Abrod
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Empowering Your Career Journey with GowSan
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-secondary dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  href={data.url}
                >
                  View more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
