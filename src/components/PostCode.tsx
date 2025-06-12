import React, {useState} from "react";
import {motion} from "framer-motion";
import {Dialog} from "@headlessui/react";

export default function PostcodeStep() {
    const [formData, setFormData] = useState({
        postcode: "",
        addressLine1: "",
        addressLine2: "",
        townCity: "",
        county: "",
        flatOrUnit: "",
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(true); // Show confirmation modal
    };

    return (
        <>
            <motion.div
                key="postcode"
                initial={{opacity: 0, x: -50}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: 50}}
                className="space-y-6 bg-gradient-to-r from-orange-200 via-white to-green-200 p-6 rounded-2xl shadow-lg"
            >
                <h2 className="text-2xl font-bold text-green-700">Shipping Address (UK)</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                        {name: "postcode", label: "Postcode", required: true, placeholder: "e.g. SW1A 1AA"},
                        {name: "flatOrUnit", label: "Flat or Unit", required: false, placeholder: "e.g. Flat 2B"},
                        {
                            name: "addressLine1",
                            label: "Address Line 1",
                            required: true,
                            placeholder: "e.g. 10 Downing Street",
                        },
                        {
                            name: "addressLine2",
                            label: "Address Line 2 (Optional)",
                            required: false,
                            placeholder: "e.g. Westminster",
                        },
                        {name: "townCity", label: "Town / City", required: true, placeholder: "e.g. London"},
                        {
                            name: "county",
                            label: "County (Optional)",
                            required: false,
                            placeholder: "e.g. Greater London",
                        },
                    ].map(({name, label, required, placeholder}) => (
                        <div key={name}>
                            <label className="block mb-1 font-medium text-gray-700">{label}</label>
                            <input
                                type="text"
                                name={name}
                                value={(formData as any)[name]}
                                onChange={handleChange}
                                placeholder={placeholder}
                                required={required}
                                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition"
                    >
                        Continue
                    </button>
                </form>
            </motion.div>

            {/* Confirmation Modal */}
            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
                    <Dialog.Panel className="bg-white p-6 rounded-xl max-w-md w-full shadow-xl">
                        <Dialog.Title className="text-lg font-bold text-green-700 mb-2">Confirm Address</Dialog.Title>
                        <p className="text-gray-700 mb-4">
                            {formData.flatOrUnit && `${formData.flatOrUnit}, `}
                            {formData.addressLine1}, {formData.addressLine2 && `${formData.addressLine2}, `}
                            {formData.townCity}, {formData.county && `${formData.county}, `}
                            {formData.postcode}
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => {
                                    // You can call a parent onComplete here
                                    setIsModalOpen(false);
                                }}
                                className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold"
                            >
                                Confirm
                            </button>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
}
