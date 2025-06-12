import React, {useState} from "react";
import {motion} from "framer-motion";

export default function Payment() {
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [formData, setFormData] = useState({
        cardNumber: "",
        expiryDate: "",
        cvc: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Payment processed successfully!");
    };

    return (
        <motion.div
            key="payment"
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 50}}
            className=" p-8 rounded-lg shadow-md max-w-lg mx-auto space-y-6"
        >
            <h2 className="text-2xl font-bold text-green-400">Payment Details</h2>

            {/* Payment Method Selector */}
            <div className="space-y-2">
                <label className="block text-green-400 font-medium">Select Payment Method:</label>
                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={() => setPaymentMethod("card")}
                        className={`px-4 py-2 rounded border-2 transition ${
                            paymentMethod === "card"
                                ? "bg-orange-600 text-white border-orange-600"
                                : "bg-white text-green-400 border-green-600 hover:bg-orange-100"
                        }`}
                    >
                        Credit/Debit Card
                    </button>
                    <button
                        type="button"
                        onClick={() => setPaymentMethod("paypal")}
                        className={`px-4 py-2 rounded border-2 transition ${
                            paymentMethod === "paypal"
                                ? "bg-orange-600 text-white border-orange-600"
                                : "bg-white text-green-900 border-green-600 hover:bg-orange-100"
                        }`}
                    >
                        PayPal
                    </button>
                </div>
            </div>

            {/* Card Payment Form */}
            {paymentMethod === "card" && (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-green-900 mb-1">Card Number</label>
                        <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9012 3456"
                            className="w-full p-2 rounded border border-green-600 bg-white text-green-900"
                            required
                        />
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-green-900 mb-1">Expiry Date</label>
                            <input
                                type="text"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleChange}
                                placeholder="MM/YY"
                                className="w-full p-2 rounded border border-green-600 bg-white text-green-900"
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-green-900 mb-1">CVC</label>
                            <input
                                type="text"
                                name="cvc"
                                value={formData.cvc}
                                onChange={handleChange}
                                placeholder="123"
                                className="w-full p-2 rounded border border-green-600 bg-white text-green-900"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700">
                        Confirm Payment
                    </button>
                </form>
            )}

            {/* PayPal Note */}
            {paymentMethod === "paypal" && (
                <div className="bg-white p-4 rounded border border-green-600 text-green-900">
                    <p className="text-sm">You will be redirected to PayPal to complete your payment securely.</p>
                </div>
            )}
        </motion.div>
    );
}
