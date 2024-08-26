import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "UK",
    text: "Studying in the UK offers prestigious education, diverse cultural experiences, global networking opportunities, and access to top-notch research institutions. With recognized qualifications and post-graduation work options, it's a pathway to success in a dynamic global landscape.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_28RasKGFlfL9k2q2cTRVBl6sIEn8SXUGqB4U8J2bg&s",
  },
  {
    id: 2,
    name: "Canada",
    text: "Studying in Canada provides high-quality education, a safe and welcoming environment, diverse cultural experiences, opportunities for post-graduation work, and pathways to permanent residency, making it an ideal choice for international students seeking academic and personal growth.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/640px-Flag_of_Canada_%28Pantone%29.svg.png",
  },
  {
    id: 3,
    name: "Australia",
    text: "Studying in Australia offers world-class education, multicultural experiences, vibrant lifestyle, research opportunities, and post-graduation work options. With its welcoming environment and quality education, it's a pathway to diverse career opportunities and personal growth.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-W0zsm09aMUcjdp_hO4ixDvqzLjztHRFDo7UxGg1DZg&s",
  },
  {
    id: 4,
    name: "New Zealand",
    text: "Studying in New Zealand provides top-tier education, stunning natural landscapes, a welcoming multicultural society, and ample opportunities for post-graduation work and residency. It offers a unique blend of academic excellence and adventure for international students.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1200px-Flag_of_New_Zealand.svg.png",
  },
  {
    id: 5,
    name: "Spain",
    text: "Studying in Spain offers a vibrant cultural experience, renowned academic institutions, and a warm Mediterranean climate. With diverse programs, affordable tuition fees, and opportunities for language immersion, it provides a unique blend of academic excellence and cultural enrichment.",
    img: "data:image/png;base64,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",
  },
  {
    id: 6,
    name: "USA",
    text: "Studying in the USA provides access to top-ranked universities, diverse academic programs, cultural diversity, and unparalleled research opportunities. With a focus on innovation and entrepreneurship, it offers a pathway to global success and leadership.",
    img: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg",
  },
  {
    id: 7,
    name: "Germany",
    text: "Studying in Germany offers world-class education, tuition-free or low-cost programs, vibrant cultural experiences, and a strong emphasis on research and innovation. With excellent career prospects and a welcoming environment, it's an ideal destination for international students seeking academic excellence and personal development.",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
  },
  {
    id: 8,
    name: "France",
    text: "Studying in France offers prestigious education, rich cultural experiences, and opportunities for personal and professional growth. With renowned universities, diverse programs, and a vibrant lifestyle, it's a gateway to academic excellence and an enriching international experience.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcLYKejMYg2j8HVnCPUp-xNKN0Nq2xcyokCmNSdsFBgg&s",
  },
  {
    id: 9,
    name: "Singapore",
    text: "Studying in Singapore offers top-tier education, multicultural experiences, and a dynamic business environment. With world-renowned universities, innovative research opportunities, and strategic location, it provides a pathway to global success and leadership in various fields.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1200px-Flag_of_Singapore.svg.png",
  },
  {
    id: 10,
    name: "Malayasia",
    text: "Studying in Malaysia offers a multicultural environment, affordable tuition fees, and high-quality education. With diverse programs, English-taught courses, and a thriving economy, it provides an excellent opportunity for academic advancement and cultural immersion.",
    img: "data:image/png;base64,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",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
           
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Countries We Provide
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Start your transformative educational journey abroad. Immerse in diverse cultures, unlock new perspectives, and forge lifelong connections. Expand horizons, pursue passions, and seize boundless opportunities for growth. Your adventure begins with studying abroad.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
