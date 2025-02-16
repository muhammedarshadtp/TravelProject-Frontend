import { useState } from "react";
import { FaMoneyBillWave, FaWallet, FaCreditCard, FaUser, FaUsers, FaUserFriends, FaHeart } from "react-icons/fa";


const SearchPage = () => {
    const [selectedBudget, setSelectedBudget] = useState(null);
    const [selectedGroupType, setSelectedGroupType] = useState(null);
    const [selectedActivities, setSelectedActivities] = useState([]);
    const [travelDate, setTravelDate] = useState("");
    const [numPeople, setNumPeople] = useState(1);
    const [numDays, setNumDays] = useState(1)

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

    // Function to handle activity selection
    const handleActivityClick = (activity) => {
        if (selectedActivities.includes(activity)) {
            // If the activity is already selected, remove it
            setSelectedActivities(selectedActivities.filter((item) => item !== activity));
        } else {
            // If the activity is not selected, add it
            setSelectedActivities([...selectedActivities, activity]);
        }
    };
    return (
        <div className="h-auto flex flex-col justify-start items-center bg-cover bg-center bg-no-repeat min-h-screen"
            style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/logoimage.png')",
            }}
        >
            {/* Form Container */}
            <div className="w-full max-w-md p-10 rounded-lg shadow-2xl bg-gray-200 bg-opacity-20 backdrop-blur-lg mt-10 mb-10">
                {/* Form */}
                <form className="space-y-6">
                    {/* Destination */}
                    <div className="form-control">
                        <label className="label font-semibold text-white">Destination</label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-md" />
                    </div>

                    {/* Travel Date */}
                    <div className="form-control">
                        <label className="label font-semibold text-white">Travel Date</label>
                        <input
                            type="date"
                            value={travelDate}
                            onChange={(e) => setTravelDate(e.target.value)}
                            min={today} // Prevents selecting past dates
                            className="input input-bordered w-full max-w-md"
                        />
                    </div>

                    {/* Number of Days */}
                    <div className="form-control">
                        <label className="label ont-semibold text-white">Number of Days</label>
                        <input type="text"
                            value={numDays}
                            onChange={handleNumChange}
                            min="0"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-md" />
                    </div>

                    {/* Budget */}
                    <div className="form-control">
                        <label className="label font-semibold text-white">Budget</label>
                        <div className="flex flex-wrap gap-3">
                            {budgetOptions.map((budget) => (
                                <div
                                    key={budget.name}
                                    className={`p-4 w-28  flex flex-col items-center justify-center rounded-lg cursor-pointer transition-all duration-300
                                         ${selectedBudget === budget.name
                                            ? "bg-black text-white shadow-lg scale-105"
                                            : "bg-gray-200 text-gray-800"
                                        }`}
                                    onClick={() => setSelectedBudget(budget.name)}
                                >
                                    {budget.icon}
                                    <p className="font-semibold mt-2">{budget.name}</p>
                                    <p className="text-xs text-center">{budget.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Number of People */}
                    <div className="form-control">
                        <label className="label font-semibold text-white">Number of People</label>
                        <input
                            type="text"
                            value={numPeople}
                            onChange={handleChange}
                            min="0" // Prevents negative input
                            className="input input-bordered w-full max-w-md"
                        />
                    </div>

                    {/* Group Type */}
                    <div className="form-control">
                        <label className="label font-semibold text-white">Group Type</label>
                        <div className="flex justify-between gap-4">
                            {groupOptions.map((group) => (
                                <div
                                    key={group.name}
                                    className={`p-4 min-w-[85px] flex flex-col items-center justify-center rounded-lg cursor-pointer transition-all duration-300 ${selectedGroupType === group.name
                                            ? "bg-black text-white shadow-lg scale-105"
                                            : "bg-gray-200 text-gray-800"
                                        }`}
                                    onClick={() => setSelectedGroupType(group.name)}
                                >
                                    {group.icon}
                                    <p className="font-semibold mt-2">{group.name}</p>
                                    <p className="text-xs text-center">{group.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Interesting Activities */}
                    <div className="form-control">
                        <label className="label font-semibold text-white">Interesting Activities</label>
                        <div className="flex flex-wrap gap-2">
                            {["Beaches", "City Tours", "Hiking", "Shopping", "Food Tours"].map((activity) => (
                                <button
                                    key={activity}
                                    type="button"
                                    className={`btn btn-sm border ${selectedActivities.includes(activity)
                                        ? "bg-black text-white" // Selected style
                                        : "btn-outline border-black text-white" // Default style
                                        }`}
                                    onClick={() => handleActivityClick(activity)}
                                >
                                    {activity}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Additional Comments */}
                    <div className="form-control">
                        <label className="label font-semibold text-white">Additional Comments</label>
                        <textarea className="textarea textarea-bordered h-40 w-30" placeholder=" type here..."></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-6">
                        <button className="btn glass text-white">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchPage;
