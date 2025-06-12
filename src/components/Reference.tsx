import React, {useState} from "react";

const skips = [
    {size: "4 Yard Skip", duration: "14 day hire period", price: 278, yards: 4},
    {size: "6 Yard Skip", duration: "14 day hire period", price: 305, yards: 6},
    {size: "8 Yard Skip", duration: "14 day hire period", price: 375, yards: 8},
    {size: "10 Yard Skip", duration: "14 day hire period", price: 400, yards: 10, road: false},
    {size: "12 Yard Skip", duration: "14 day hire period", price: 439, yards: 12, road: false},
    {size: "14 Yard Skip", duration: "14 day hire period", price: 470, yards: 14, road: false},
    {size: "16 Yard Skip", duration: "14 day hire period", price: 496, yards: 16, road: false},
    {size: "20 Yard Skip", duration: "14 day hire period", price: 992, yards: 20, road: false},
    {size: "40 Yard Skip", duration: "14 day hire period", price: 992, yards: 40, road: false},
];

const Reference = () => {
    const [selected, setSelected] = useState(null);

    return (
        <div className="bg-gradient-to-r from-orange-200 via-white to-green-200 min-h-screen p-10 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center text-orange-400">Choose Your Skip Size</h2>
            <p className="text-center text-green-400 mb-10">Select the skip size that best suits your needs</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skips.map((skip, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl border-2 p-5 transition-all shadow-lg ${
                            selected === index ? "border-orange-500 bg-orange-100/10" : "border-green-500"
                        }`}
                    >
                        <div className="text-center">
                            <div className="text-2xl font-bold mb-2 text-orange-300">{skip.size}</div>
                            <div className="text-green-300 mb-4">{skip.duration}</div>
                            <div className="text-2xl text-white font-semibold">£{skip.price}</div>
                            {!skip.road && (
                                <div className="mt-3 text-sm text-red-400 font-medium">🚫 Not Allowed On The Road</div>
                            )}
                        </div>
                        <button
                            onClick={() => setSelected(index)}
                            className={`mt-5 w-full py-2 rounded-xl font-semibold transition-all text-white ${
                                selected === index ? "bg-orange-500" : "bg-green-500 hover:bg-green-600"
                            }`}
                        >
                            {selected === index ? "Selected" : "Select This Skip"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reference;
