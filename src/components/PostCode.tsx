import React, {useState} from "react";
import {motion} from "framer-motion";

// Simple Dialog replacement
const Dialog = ({open, onClose, children}) =>
    open ? (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <div onClick={onClose} className="absolute inset-0" />
            <div className="relative bg-white rounded-2xl p-6 shadow-xl max-w-md w-full">{children}</div>
        </div>
    ) : null;

export default function PostcodeStep() {
    const [formData, setFormData] = useState({
        postcode: "",
        addressLine1: "",
        addressLine2: "",
        townCity: "",
        county: "",
        flatOrUnit: "",
    });
    const [focusedField, setFocusedField] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({...formData, [e.target.name]: e.target.value});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const fields = [
        {name: "postcode", label: "Postcode", icon: "📍", required: true},
        {name: "flatOrUnit", label: "Flat or Unit", icon: "🏢", required: false},
        {name: "addressLine1", label: "Address Line 1", icon: "🏠", required: true},
        {name: "addressLine2", label: "Address Line 2", icon: "📍", required: false},
        {name: "townCity", label: "Town / City", icon: "🏙️", required: true},
        {name: "county", label: "County", icon: "🗺️", required: false},
    ];

    return (
        <div className=" flex items-center justify-center p-3">
            <motion.div
                key="form"
                initial={{opacity: 0, y: 40}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -40}}
                transition={{duration: 0.5}}
                className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full"
            >
                <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Shipping Address (UK)</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    {fields.map((f) => (
                        <motion.div
                            key={f.name}
                            initial={{opacity: 0, x: -30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{delay: 0.2 + fields.indexOf(f) * 0.05}}
                        >
                            <label className="flex items-center space-x-2 text-gray-700 font-medium">
                                <span>{f.icon}</span>
                                <span>{f.label}</span>
                                {f.required && <span className="text-orange-500">*</span>}
                            </label>
                            <input
                                type="text"
                                name={f.name}
                                value={formData[f.name]}
                                onChange={handleChange}
                                onFocus={() => setFocusedField(f.name)}
                                onBlur={() => setFocusedField("")}
                                placeholder={`e.g. ${f.label}`}
                                required={f.required}
                                className={`w-full p-3 rounded-xl border-2 bg-gray-50 transition duration-300 ${
                                    focusedField === f.name
                                        ? "border-orange-400 ring-1 ring-orange-200"
                                        : "border-gray-200 hover:border-gray-300"
                                }`}
                            />
                            {formData[f.name] && (
                                <motion.span
                                    initial={{scale: 0}}
                                    animate={{scale: 1}}
                                    className="inline-block ml-2 text-green-600 text-xl"
                                >
                                    ✓
                                </motion.span>
                            )}
                        </motion.div>
                    ))}
                    <motion.button
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.7}}
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg transition-transform hover:scale-[1.01]"
                    >
                        Continue
                    </motion.button>
                </form>

                <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <motion.div initial={{scale: 0.8}} animate={{scale: 1}}>
                        <h3 className="text-xl font-bold text-green-600 mb-4 text-center">Confirm Address</h3>
                        <div className="space-y-1 text-gray-800">
                            {["flatOrUnit", "addressLine1", "addressLine2", "townCity", "county", "postcode"]
                            .map((k) => formData[k]) // typecast indexing
                            .filter(Boolean)
                            .map((val, idx) => (
                                <p key={idx}>{val}</p>
                            ))}
                        </div>
                        <div className="mt-6 flex gap-4">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-xl"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    // proceed to next step...
                                }}
                                className="flex-1 py-2 bg-green-600 text-white rounded-xl"
                            >
                                Confirm
                            </button>
                        </div>
                    </motion.div>
                </Dialog>
            </motion.div>
        </div>
    );
}
