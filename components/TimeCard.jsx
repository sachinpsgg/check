import {DownIcon, UpIcon} from "./Icon";


// eslint-disable-next-line react/prop-types
const TimeCard = ({ expanded, onToggle, timeData }) => {
    return (
        <div className="bg-white rounded-lg shadow-md mb-4">
            <div className="flex items-center justify-between p-4">
                <div className="text-gray-800 font-medium">{timeData.session}</div>
                <button
                    onClick={onToggle}
                    className="text-gray-500 hover:text-gray-700 transition"
                    aria-label="Toggle Time Card"
                >
                    {expanded ? <UpIcon /> : <DownIcon />}
                </button>
            </div>
            {expanded && (
                <div className="p-4">
                    <div className="flex flex-wrap gap-4">
                        {timeData.time.map((time, i) => (
                            <button
                                key={i}
                                className="border-2 border-pink-500 rounded-md px-4 py-2 hover:bg-pink-500 hover:text-white transition"
                                aria-label={`Select time ${time}`}
                            >
                                <span className="text-pink-500 font-medium">{time}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TimeCard;
