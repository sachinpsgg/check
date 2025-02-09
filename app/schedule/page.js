"use client";

import React, { useState } from "react";
import { Back } from "@/components/Icon";
import Link from "next/link";
import CustomDropdown from "@/components/Dropdown";
import RadioInput from "@/components/Radio";
import Card from "@/components/ProfileCard";
import DateTimeInputs from "@/components/DateTimeInputs";

export default function Page() {
    const sessionModes = ["In-Person", "Online"];
    const [selectedMode, setSelectedMode] = useState("Online");

    const handleModeChange = (mode) => {
        setSelectedMode(mode);
    };

    return (
        <div className="pt-4 bg-gradient-to-b from-[#ede9fe] to-[#f5d0fe] min-h-screen">

            <div className="flex items-center mb-4 gap-4 px-4">
                <Link href="/" className="hover:opacity-80 transition">
                    <Back />
                </Link>
                <h1 className="text-lg font-semibold text-gray-800">
                    Schedule Session
                </h1>
            </div>

            <div className="w-full mx-auto p-4">
                <h2 className="text-gray-600 mb-2">Patient</h2>
                <Card name="Subham Naik" phone="+91 9876543210" image="/Shubham.png" />
                <h2 className="text-gray-600 mb-2 mt-4">Assign Practitioner</h2>
                <Card name="Saria Dilon" phone="+91 9876543210" image="/Saria.png" />

                <h2 className="text-gray-600 mb-2 mt-4">Session Type</h2>
                <div className="bg-white p-2 rounded-lg mb-4 shadow">
                    <CustomDropdown />
                </div>
                <RadioInput
                    options={sessionModes}
                    defaultSelected="Online"
                    onChange={handleModeChange}
                />

                {/* Date & Time Picker */}
                <h2 className="text-gray-600 mb-2 mt-4">Session Date & Time</h2>
                <DateTimeInputs
                    onDateChange={(date) => console.log("Selected Date:", date)}
                    onTimeChange={(time) => console.log("Selected Time:", time)}
                />

                {/* Online Session Link (conditional rendering) */}
                {selectedMode === "Online" && (
                    <div className="w-full mt-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">
                            Online Session Link
                        </label>
                        <input
                            type="text"
                            placeholder="Enter online session link"
                            className="w-full px-4 py-2 border rounded-lg text-gray-600 outline-none"
                        />
                    </div>
                )}

                {/* Session Details */}
                <h2 className="text-gray-600 mb-2 mt-4">Session Details (Optional)</h2>
                <div className="bg-white rounded-lg shadow mb-4">
          <textarea
              className="w-full p-2 rounded-lg outline-none resize-none"
              placeholder="Enter session details here"
              rows={4}
          ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between mt-4">
                    <button className="w-1/2 bg-transparent text-[#CC627B] p-2 border border-[#CC627B] rounded-lg mr-2 hover:bg-[#f8e0e6] transition">
                        Cancel
                    </button>
                    <button className="w-1/2 bg-pink-100 text-pink-500 p-2 rounded-lg hover:bg-pink-200 transition">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}
