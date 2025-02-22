import React, { useRef, useState } from "react";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import { FaCreditCard, FaHeart, FaMoneyBillWave, FaSearch, FaUser, FaUserFriends, FaUsers, FaWallet } from "react-icons/fa"
const Input = ({ onSubmit }) => {

  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedGroupType, setSelectedGroupType] = useState(null);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [travelDate, setTravelDate] = useState("");
  const [numPeople, setNumPeople] = useState();
  const [numDays, setNumDays] = useState();

  const groupOptions = [
      { name: "Single", icon: <FaUser size={24} />, description: "Solo traveler" },
      { name: "Family", icon: <FaUsers size={24} />, description: "Family-friendly" },
      { name: "Friends", icon: <FaUserFriends size={24} />, description: "Group of friends" },
      { name: "Couple", icon: <FaHeart size={24} />, description: "Romantic getaway" }
  ];

  const budgetOptions = [
      { name: "Low", icon: <FaMoneyBillWave size={24} />, description: "Budget-friendly options" },
      { name: "Medium", icon: <FaWallet size={24} />, description: "Balanced comfort & cost" },
      { name: "High", icon: <FaCreditCard size={24} />, description: "Luxury & premium experience" }
  ];


  const handleNumChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumDays(value >= 1 ? value : 0);
};

const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumPeople(value >= 1 ? value : 0);
};

const today = new Date().toISOString().split("T")[0];

const handleActivityClick = (activity) => {
    setSelectedActivities((prev) =>
        prev.includes(activity) ? prev.filter((item) => item !== activity) : [...prev, activity]
    );
};



  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center ">

        {/* Left Side (7 Columns) - Welcome Text & Image */}
        <div className="md:col-span-7 flex flex-col items-center text-left  relative">
          <div className="absolute md:mt-16 lg:mt-32 ">
            <h2
              data-aos="fade-up"
              className="text-[40px] md:text-[30px] leading-[1.3] font-bold text-black aos-init aos-animate text-center"
            >
              Search Your Next <br />
              <span className="text-blue-500 items-start">Holiday</span>
            </h2>

            <div className="shadow-lg rounded-3xl p-4 space-y-4 w-full bg-gray-100">
            {/* Inputs in a Single Line */}
            <div className="flex flex-wrap gap-3 ml-10">
                < input  type="text" placeholder= "Destination"  className="w-1/5 p-3 border rounded-md bg-slate-200 text-black focus:outline-none" />
                <input type="date" placeholder="set date" value={travelDate} onChange={(e) => setTravelDate(e.target.value)} min={today} className="w-1/5 p-3 border rounded-md bg-slate-200 focus:outline-none" />
                <input type="text" placeholder="Number of People" value={numPeople} onChange={handleChange} className="w-1/5 p-3 border rounded-md bg-slate-200 focus:outline-none" />
                <input type="text" placeholder="Number of Days" value={numDays} onChange={handleNumChange} className="w-1/5 p-3 border rounded-md bg-slate-200 focus:outline-none" />
            </div>

            {/* Budget Section */}
            <div className="form-control">
                <div className="flex flex-wrap gap-6 ml-20">
                    {budgetOptions.map((budget) => (
                        <div
                            key={budget.name}
                            className={`p-2 w-28 flex flex-col items-center justify-center rounded-lg cursor-pointer transition-all duration-300
                                ${selectedBudget === budget.name ? "bg-black text-white shadow-lg scale-105" : "bg-gray-200 text-gray-800"}`}
                            onClick={() => setSelectedBudget(budget.name)}
                        >
                            {budget.icon}
                            <p className="font-semibold mt-2">{budget.name}</p>
                            <p className="text-xs text-center">{budget.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Group Type Section */}
            <div className="form-control mt-4">
                <div className="flex flex-wrap gap-6 ml-12">
                    {groupOptions.map((group) => (
                        <div
                            key={group.name}
                            className={`p-2 w-28 flex flex-col items-center justify-center rounded-lg cursor-pointer transition-all duration-300 
                                ${selectedGroupType === group.name ? "bg-black text-white shadow-lg scale-105" : "bg-gray-200 text-gray-800"}`}
                            onClick={() => setSelectedGroupType(group.name)}
                        >
                            {group.icon}
                            <p className="font-semibold mt-2">{group.name}</p>
                            <p className="text-xs text-center">{group.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Activities */}
            <div className="form-control">
                <div className="flex flex-wrap gap-6 ml-8">
                    {["Beaches", "City Tours", "Hiking", "Shopping", "Food Tours"].map((activity) => (
                        <button
                            key={activity}
                            type="button"
                            className={`btn btn-sm border ${selectedActivities.includes(activity)
                                ? "bg-black text-white"
                                : "btn-outline border-black text-black"
                            }`}
                            onClick={() => handleActivityClick(activity)}
                        >
                            {activity}
                        </button>
                    ))}
                </div>
            </div>

            {/* Comments */}
            <div className="form-control ml-6">
                <textarea className="textarea text-black textarea-bordered h-32 w-1/2 bg-slate-200" placeholder="Additional Comments..."></textarea>
            </div>

            {/* Submit */}
            <div className="form-control w-80 items-center p-4 justify-center ml-72 ">
                <button className="btn glass w-32 text-white bg-gray-700">Submit<FaSearch className="fill-white" /></button>
            </div>
        </div>
          </div>
          <img src={home2} alt="home1" className="w-screen h-screen object-cover shadow-md mb-28" />

        </div>



        {/* Right Side (5 Columns) - Home Image */}
        <div className="col-span-5 flex justify-center">
          <img src={home3} alt="home" className="w-screen h-screen  object-cover rounded-br-[105px] shadow-md mb-28"

          />
        </div>

      </div>
    </div>

  );
};

export default Input;
