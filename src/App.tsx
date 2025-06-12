import React, {useState} from "react";
import {AnimatePresence} from "framer-motion";
import Navbar from "./components/Navbar";
import Stepper from "./components/Stepper";
import PostcodeStep from "./components/PostCode";
import WasteTypeStep from "./components/WasteType";
import PermitCheckStep from "./components/PermitCheck";
import DateSelector from "./components/DateSelector";
import PaymentStep from "./components/Payment";
import StepperFooter from "./components/StepFooter";
import Reference from "./components/Reference";
import {FaMapMarkerAlt, FaRecycle, FaTruck, FaClipboardCheck, FaCalendarAlt, FaCreditCard} from "react-icons/fa";

type Step = {
    label: string;
    icon: React.ReactNode;
};

function App() {
    const steps: Step[] = [
        {label: "Postcode", icon: <FaMapMarkerAlt />},
        {label: "Waste Type", icon: <FaRecycle />},
        {label: "Reference", icon: <FaClipboardCheck />},

        {label: "Permit Check", icon: <FaClipboardCheck />},
        {label: "Choose Date", icon: <FaCalendarAlt />},
        {label: "Payment", icon: <FaCreditCard />},
    ];

    const [currentStep, setCurrentStep] = useState<number>(0);

    const handleNext = () => {
        setCurrentStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setCurrentStep((prev) => prev - 1);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto p-4">
                <Navbar />
                <Stepper currentStep={currentStep} steps={steps} />
                <div className="mt-8">
                    <AnimatePresence mode="wait">
                        {currentStep === 0 && <PostcodeStep />}
                        {currentStep === 1 && <WasteTypeStep />}
                        {currentStep === 2 && <Reference />}
                        {currentStep === 3 && <PermitCheckStep />}
                        {currentStep === 4 && <DateSelector onSelect={() => {}} label="Select a date" />}
                        {currentStep === 5 && <PaymentStep />}
                    </AnimatePresence>

                    {currentStep < steps.length && (
                        <StepperFooter
                            currentStep={currentStep}
                            totalSteps={steps.length}
                            onNext={handleNext}
                            onBack={handleBack}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
