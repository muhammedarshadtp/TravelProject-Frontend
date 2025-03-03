import React, { useState } from "react";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import {
    FaCreditCard, FaHeart, FaMoneyBillWave, FaSearch, FaUser, FaUserFriends, FaUsers, FaWallet
} from "react-icons/fa";
import axios from "axios";
import ItineraryRenderer from "./ItineraryRender";

const Input = () => {
    const [destination, setDestination] = useState("");
    const [selectedBudget, setSelectedBudget] = useState("");
    const [selectedGroupType, setSelectedGroupType] = useState("");
    const [selectedActivities, setSelectedActivities] = useState([]);
    const [travelDate, setTravelDate] = useState("");
    const [numPeople, setNumPeople] = useState("");
    const [numDays, setNumDays] = useState("");
    const [additionalComments, setAddtionalComments] = useState("");
    const [resData, setResData] = useState(null);

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
            prev.includes(activity)
                ? prev.filter((item) => item !== activity)
                : [...prev, activity]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/search`, {
                destination,
                travel_date: travelDate,
                num_days: numDays,
                budget: selectedBudget,
                num_people: numPeople,
                travel_group: selectedGroupType,
                activities: selectedActivities,
                additional_comments: additionalComments,
            });
            // Assuming the API returns the itinerary data in res.data
            setResData(res.data);
        } catch (error) {
            console.error("Error generating itinerary:", error);
        }
    };

    return (
        <div className="h-screen w-screen bg-white overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-2 h-full">
                {/* Left Side - Query Form (Increased Width) */}
                <div className="md:col-span-5 flex flex-col p-6 relative">
                    <h2 className="text-[40px] md:text-[30px] leading-[1.3] font-bold text-black text-center mb-8">
                        Search Your Next <br />
                        <span className="text-blue-500">Holiday</span>
                    </h2>
                    <div className="shadow-lg rounded-3xl p-4 space-y-4 bg-[#21212]">
                        {/* Inputs Row */}
                        <div className="flex flex-wrap gap-3">
                            <input
                                type="text"
                                placeholder="Destination"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                className="w-1/2 p-3 border rounded-md bg-slate-200 text-black focus:outline-none"
                            />
                            <input
                                type="date"
                                placeholder="Set Date"
                                value={travelDate}
                                onChange={(e) => setTravelDate(e.target.value)}
                                min={today}
                                className="w-1/2 p-3 border rounded-md bg-slate-200 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Number of People"
                                value={numPeople}
                                onChange={handleChange}
                                className="w-1/2 p-3 border rounded-md bg-slate-200 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Number of Days"
                                value={numDays}
                                onChange={handleNumChange}
                                className="w-1/2 p-3 border rounded-md bg-slate-200 focus:outline-none"
                            />
                        </div>
                        {/* Budget Section */}
                        <div className="flex flex-wrap gap-6">
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
                        {/* Group Type Section */}
                        <div className="flex flex-wrap gap-6 mt-4">
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
                        {/* Activities */}
                        <div className="flex flex-wrap gap-6 mt-4">
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
                        {/* Additional Comments */}
                        <div className="mt-4">
                            <textarea
                                className="textarea text-black textarea-bordered h-32 w-full bg-slate-200"
                                placeholder="Additional Comments..."
                                value={additionalComments}
                                onChange={(e) => setAddtionalComments(e.target.value)}
                            ></textarea>
                        </div>
                        {/* Submit Button */}
                        <div className="flex justify-center mt-4">
                            <button className="btn glass w-32 text-white bg-gray-700" onClick={handleSubmit}>
                                Submit <FaSearch className="ml-2 fill-white" />
                            </button>
                        </div>
                    </div>
                    {/* Home Image on the Left Side */}
                    <div className="mt-8">
                        <img src={home2} alt="home2" className="w-full object-cover shadow-md" />
                    </div>
                </div>
                {/* Right Side - Itinerary or Placeholder Image (Scrollable) */}
                <div className="md:col-span-7 justify-center bg-gray-100 p-4 overflow-y-auto max-h-screen">
                    {resData ? (
                        <ItineraryRenderer responseData={resData} />
                    ) : (
                        <img src={home3} alt="home" className="w-full h-full object-cover rounded-br-[105px] shadow-md" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Input;
