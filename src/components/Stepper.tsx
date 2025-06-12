import React from "react";
import {BiCheck} from "react-icons/bi";

interface Step {
    label: string;
    icon: React.ReactNode;
}

interface StepperProps {
    steps: Step[];
    currentStep: number;
}

export default function Stepper({steps, currentStep}: StepperProps) {
    return (
        <div className="relative flex items-center mb-6">
            {steps.map((step, index) => (
                <div key={index} className="relative flex-1 flex items-center justify-center">
                    {/* Line to the next step */}
                    {index < steps.length - 1 && (
                        <div className="absolute top-5 left-1/2 w-full h-1">
                            <div className="w-full h-full bg-gray-300">
                                <div
                                    className="h-full bg-gradient-to-r from-green-500 to-orange-400 transition-all duration-500"
                                    style={{
                                        width: currentStep > index ? "100%" : "0%",
                                    }}
                                ></div>
                            </div>
                        </div>
                    )}

                    {/* Step circle and label */}
                    <div className="flex flex-col items-center z-10">
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-lg mb-1 transition-all duration-300
                                ${
                                    index < currentStep
                                        ? "bg-green-600 text-white"
                                        : index === currentStep
                                        ? "bg-orange-500 text-white scale-110 shadow-md"
                                        : "bg-gray-300 text-gray-700"
                                }`}
                        >
                            {index < currentStep ? <BiCheck size={24} /> : step.icon}
                        </div>
                        <span
                            className={`text-xs sm:text-sm text-center mt-1 font-medium transition-colors duration-300 ${
                                index <= currentStep ? "text-green-700" : "text-gray-500"
                            }`}
                        >
                            {step.label}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
