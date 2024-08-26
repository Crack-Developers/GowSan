import React from "react";
import Img1 from "../../assets/women/img1.jpg";
import Img2 from "../../assets/women/img2.jpg";
import Img3 from "../../assets/women/img3.jpg";
import Img4 from "../../assets/women/img4.jpg";
import Img5 from "../../assets/women/img5.jpg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Personalized Approach",
  },
  {
    id: 2,
    img: Img2,
    title: "Expertise and Experience",
  },
  {
    id: 3,
    img: Img3,
    title: "Innovative solutions",
  },
  {
    id: 4,
    img: Img4,
    title: "Comprehensive Services",
  },
  {
    id: 5,
    img: Img5,
    title: "Global Network",
  },
  
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Why GowSan?
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Gowsan stands out for its personalized guidance, unwavering integrity, and 
          comprehensive support tailored to each student's unique aspirations, ensuring 
          success and fulfillment abroad.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
