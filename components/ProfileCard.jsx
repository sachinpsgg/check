
// eslint-disable-next-line react/prop-types
const Card= ({ name, phone, image }) => {
    return (
        <div className="bg-white p-2 rounded-xl mb-4">
            <div className="flex items-center gap-4">
                <img src={image} alt="img" width={42} height={42} />
                <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-gray-500">{phone}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
