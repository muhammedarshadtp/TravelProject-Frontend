import React from "react";
import home from "../assets/home.png";
import home1 from "../assets/home1.png";

const Home = ({ onButtonClick }) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <div className="grid grid-cols-12 items-center">

        {/* Left Side (7 Columns) - Welcome Text & Image */}
        <div className="col-span-7 flex flex-col items-center text-center relative">
          <div className="absolute  mt-56  ">
            <h2
              data-aos="fade-up"
              className="text-[40px] md:text-[30px] leading-[1.3] font-bold text-black aos-init aos-animate"
            >
              RIHLA <span className="text-accent-2">: AI Powered</span>
              <br className="lg:hidden" />
              Passport to Arabia
            </h2>
            <br />



            <button className="flex items-center gap-2 font-medium bg-gray-600 text-white rounded-lg px-6 py-3 text-lg hover:bg-gray-700" onClick={onButtonClick}>
              Plan a trip
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
              >
                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
              </svg>
            </button>
          </div>
          <img src={home1} alt="home1" className="w-screen h-screen object-cover rounded-lg shadow-md " />

        </div>

        {/* Right Side (5 Columns) - Home Image */}
        <div className="col-span-5 flex justify-center">
          <img src={home} alt="home" className="w-screen h-screen object-cover rounded-lg shadow-md" />
        </div>

      </div>
    </div>
  );
};

export default Home;
