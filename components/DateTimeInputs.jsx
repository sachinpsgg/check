
import {useState} from "react";

import Drawer from '@mui/material/Drawer';
import {CalanderIcon, CloseIcon, TimerIcon} from "@/components/Icon";
import TimeCard from "@/components/TimeCard";


const DateTimeInputs= () => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [selectedDate, setSelectedDate] =useState(null)
    const [selectedTime, setSelectedTime] =useState(null)
    const [openBottom, setOpenBottom] = useState(false);
    const [expandedCard, setExpandedCard] = useState(null)

    const TimeData = [
        {
            session: "Morning",
            time: ["8:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"],
        },
        {
            session: "Afternoon",
            time: ["12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM"],
        },
        {
            session: "Evening",
            time: ["04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"],
        },
        {
            session: "Night",
            time: ["08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"],
        },
    ];

    const openDrawerBottom = () => setOpenBottom(true);
    const closeDrawerBottom = () => setOpenBottom(false);

    const handleDateClick = () => {
        setIsCalendarOpen(true);
    };



    return (
        <div className="flex space-x-4">
            {/* Date Input */}
            <div className="w-1/2">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                    Session Date
                </label>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="11/12/2024"
                        className="w-full px-4 py-2 border rounded-lg text-gray-600 outline-none"
                        value={selectedDate || ""}
                        onClick={handleDateClick}
                        readOnly
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <CalanderIcon />
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                    Session Time Slot
                </label>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="HH:MM"
                        className="w-full px-4 py-2 border rounded-lg text-gray-600 outline-none"
                        onClick={openDrawerBottom}
                        value={selectedTime || ""}
                        readOnly
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <TimerIcon />
                    </div>
                </div>
                {openBottom && (
                    <Drawer
                        anchor="bottom"
                        placeholder="HH : MM"
                        open={openBottom}
                        onClose={closeDrawerBottom}
                        className="fixed bottom-0 left-0 w-full max-h-[90vh] p-4 rounded-t-2xl bg-white shadow-lg overflow-y-auto" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-lg font-bold text-gray-800">
                                Select Session Time
                            </h2>
                            <button
                                className="outline-none text-gray-600 hover:text-gray-800"
                                onClick={closeDrawerBottom}
                            >
                                <CloseIcon />
                            </button>
                        </div>
                        {TimeData.map((d, i) => (
                            <TimeCard
                                key={i}
                                expanded={expandedCard === i}
                                onToggle={() => setExpandedCard(expandedCard === i ? null : i)}
                                timeData={d}
                            />
                        ))}
                    </Drawer>
                )}
            </div>
        </div>
    );
};

export default DateTimeInputs;
