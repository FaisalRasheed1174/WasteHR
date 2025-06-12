import React from "react";
import {motion} from "framer-motion";

interface SelectSkipStepProps {
    onSelect: (value: "private" | "public") => void;
    selected: "private" | "public" | "";
}

export default function SelectSkipStep({onSelect, selected}: SelectSkipStepProps) {
    return (
        <motion.div
            key="select-skip"
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 50}}
            className="space-y-4"
        >
            <h2 className="text-xl font-semibold text-white">
                <span className="text-green-400">Where will the</span>{" "}
                <span className="text-orange-400">skip be placed?</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-4">
                <button
                    className={`flex-1 p-4 rounded-lg transition border-2 shadow-md ${
                        selected === "private"
                            ? "bg-green-600 border-green-400 text-white"
                            : "bg-green-100 border-gray-600 text-gray-900 hover:bg-green-700"
                    }`}
                    onClick={() => onSelect("private")}
                >
                    <h3 className="font-semibold text-lg">Private Property</h3>
                    <p className="text-sm">Driveway or private land</p>
                </button>

                <button
                    className={`flex-1 p-4 rounded-lg transition border-2 shadow-md ${
                        selected === "public"
                            ? "bg-orange-600 border-orange-400 text-white"
                            : "bg-orange-100 border-gray-600 text-gray-800 hover:bg-orange-700"
                    }`}
                    onClick={() => onSelect("public")}
                >
                    <h3 className="font-semibold text-lg">Public Road</h3>
                    <p className="text-sm">Skip will be placed on public property</p>
                </button>
            </div>
        </motion.div>
    );
}
