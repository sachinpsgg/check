import { useState } from "react";

export default function CustomDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select session type");

    const options = [
        "Intro ",
        "Counselling ",
        "Renewal of Prescription",
    ];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full">
            <div
                className="w-full p-1 outline-none rounded-xl cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption}
            </div>
            {isOpen && (
                <ul className="absolute flex flex-col w-full max-w-screen-lg px-2 py-4 gap-4 shadow-[0px_4px_20px_#0000004D] backdrop-blur-[20px]  rounded-2xl mt-1 z-10 bg-gradient-to-b from-[#DFDAFB] to-[#F9CCC5]" >
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="p-2 py-2 flex flex-row justify-between cursor-pointer bg-gray-100 rounded-xl text-black font-semibold"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                            {option !== "Renewal of Prescription" && (<span>(15 mins - Free Session)</span>)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

}
