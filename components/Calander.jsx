
// eslint-disable-next-line react/prop-types
const CalendarOverlay= ({ onSelect, onClose }) => {
    const handleSelectDate = (date) => {
        onSelect(date);
    };

    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-white shadow-lg rounded-lg p-4 transition-all duration-300 transform">
            <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">X</button>
            <div>
                <h3 className="text-gray-600 text-lg font-medium mb-4">Select Date</h3>
                {/* Add custom calendar UI here */}
                <div className="grid grid-cols-7 gap-2">
                    {/* Example Calendar (could be dynamically generated) */}
                    {["01", "02", "03", "04", "05", "06", "07"].map((date) => (
                        <button
                            key={date}
                            onClick={() => handleSelectDate(date)}
                            className="w-10 h-10 rounded-lg text-center text-gray-700 hover:bg-gray-200"
                        >
                            {date}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CalendarOverlay;
