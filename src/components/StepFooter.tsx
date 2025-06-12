import React from "react";

interface StepperFooterProps {
    currentStep: number;
    totalSteps: number;
    onNext: () => void;
    onBack: () => void;
}

const StepperFooter: React.FC<StepperFooterProps> = ({currentStep, totalSteps, onNext, onBack}) => {
    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === totalSteps - 1;
    const isSecondLastStep = currentStep === totalSteps - 2;

    return (
        <div className="flex justify-between items-center mt-8">
            <button
                onClick={onBack}
                disabled={isFirstStep}
                className={`px-5 py-2 rounded font-medium transition ${
                    isFirstStep
                        ? "bg-gray-400 cursor-not-allowed text-white"
                        : "bg-green-600 hover:bg-green-700 text-white"
                }`}
            >
                Back
            </button>

            <button
                onClick={onNext}
                disabled={isLastStep}
                className={`px-5 py-2 rounded font-medium transition ${
                    isLastStep
                        ? "bg-gray-400 cursor-not-allowed text-white"
                        : "bg-orange-600 hover:bg-orange-700 text-white"
                }`}
            >
                {isSecondLastStep ? "Go to Payment" : "Next"}
            </button>
        </div>
    );
};

export default StepperFooter;
