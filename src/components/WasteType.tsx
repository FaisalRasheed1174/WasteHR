import React, {useState} from "react";
import {motion} from "framer-motion";
import {FaHammer, FaHome, FaTree, FaBuilding} from "react-icons/fa";

interface WasteType {
    value: string;
    label: string;
    icon: React.ReactNode;
    description: string;
}

const wasteTypes: WasteType[] = [
    {
        value: "construction",
        label: "Construction Waste",
        icon: <FaHammer size={24} />,
        description: "Debris from building, renovation, or demolition work.",
    },
    {
        value: "household",
        label: "Household Waste",
        icon: <FaHome size={24} />,
        description: "General waste from your house or apartment.",
    },
    {
        value: "garden",
        label: "Garden Waste",
        icon: <FaTree size={24} />,
        description: "Leaves, branches, grass, and other garden debris.",
    },
    {
        value: "commercial",
        label: "Commercial Waste",
        icon: <FaBuilding size={24} />,
        description: "Waste from offices, shops, restaurants, and businesses.",
    },
];

export default function WasteTypeStep() {
    const [selected, setSelected] = useState<string>("");

    return (
        <motion.div
            key="waste-type"
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 50}}
            className="space-y-6  p-6 rounded-lg shadow-md"
        >
            <h2 className="text-2xl font-bold text-green-800">Select Waste Type</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {wasteTypes.map((type) => (
                    <div
                        key={type.value}
                        onClick={() => setSelected(type.value)}
                        className={`cursor-pointer p-4 rounded-lg border-2 transition duration-200 ${
                            selected === type.value
                                ? "border-orange-600 bg-orange-600 text-white"
                                : "border-green-600 bg-white text-green-900 hover:bg-orange-100 hover:border-orange-400"
                        }`}
                    >
                        <div className="flex items-center space-x-3 mb-2">
                            <div className="text-green-700">{type.icon}</div>
                            <span className="text-lg font-semibold">{type.label}</span>
                        </div>
                        <p className="text-sm">{type.description}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
