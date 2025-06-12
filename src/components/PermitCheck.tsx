// PermitCheckStep.tsx

import React, {useState} from "react";
import {motion} from "framer-motion";
import SkipPlacement from "./SelectSkipStep";
import FileUploader from "./FileUploader";

export default function PermitCheckStep() {
    const [placement, setPlacement] = useState<"private" | "public" | "">("");
    const [permitDetails, setPermitDetails] = useState({
        authority: "",
        permitNumber: "",
        expiryDate: "",
    });

    const handlePlacementSelect = (value: "private" | "public") => {
        setPlacement(value);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPermitDetails({...permitDetails, [e.target.name]: e.target.value});
    };

    const handleUploadComplete = () => {
        console.log("Upload complete");
    };

    return (
        <motion.div
            key="permit-check"
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 50}}
            className="space-y-6"
        >
            <h2 className="text-3xl font-bold text-red-600">Permit Requirement</h2>
            <p className="text-sm text-gray-400">
                Depending on where your skip will be placed, a permit might be required.
            </p>

            <SkipPlacement onSelect={handlePlacementSelect} selected={placement} />

            {placement === "private" && (
                <motion.div
                    initial={{opacity: 0, scale: 0.95}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.3}}
                    className="bg-green-600 text-white p-4 rounded-md shadow-lg"
                >
                    <strong>No permit required.</strong> You’ve selected a private placement.
                </motion.div>
            )}

            {placement === "public" && (
                <motion.div
                    initial={{opacity: 0, scale: 0.95}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.3}}
                    className="space-y-4"
                >
                    <div className="bg-orange-600 text-white p-4 rounded-md shadow-lg">
                        <strong>Permit required.</strong> Please upload the permit and provide the required details
                        below.
                    </div>

                    <FileUploader onUpload={handleUploadComplete} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-white mb-1">Authority Name</label>
                            <input
                                type="text"
                                name="authority"
                                value={permitDetails.authority}
                                onChange={handleChange}
                                className="w-full p-2 rounded bg-green-600 border border-gray-500 text-white"
                                placeholder="e.g. City Council"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white mb-1">Permit Number</label>
                            <input
                                type="text"
                                name="permitNumber"
                                value={permitDetails.permitNumber}
                                onChange={handleChange}
                                className="w-full p-2 rounded bg-green-600 border border-gray-500 text-white"
                                placeholder="e.g. 123-456"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black mb-1">Expiry Date</label>
                            <input
                                type="date"
                                name="expiryDate"
                                value={permitDetails.expiryDate}
                                onChange={handleChange}
                                className="w-full p-2 rounded bg-green-600 border border-gray-500 text-white"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}
