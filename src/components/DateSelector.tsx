import {useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateSelectorProps {
    label: string;
    onSelect: (value: Date | null) => void;
    minDate?: Date;
    maxDate?: Date;
}

function DateSelector({label, onSelect, minDate, maxDate}: DateSelectorProps) {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [error, setError] = useState<string>("");
    const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
    const [dateFormat, setDateFormat] = useState<string>("yyyy-MM-dd");

    const validateDate = (date: Date | null) => {
        if (!date) {
            setError("Please select a valid date.");
            return false;
        }
        if (minDate && date < minDate) {
            setError(`Date cannot be before ${minDate.toLocaleDateString()}`);
            return false;
        }
        if (maxDate && date > maxDate) {
            setError(`Date cannot be after ${maxDate.toLocaleDateString()}`);
            return false;
        }
        setError("");
        return true;
    };

    const handleSelect = (date: Date | null) => {
        setSelectedDate(date);
        setIsConfirmed(false);
        if (date && validateDate(date)) {
            onSelect(date);
        } else {
            onSelect(null);
        }
    };

    const handleConfirm = () => {
        if (selectedDate && validateDate(selectedDate)) {
            setIsConfirmed(true);
        }
    };

    const handleReset = () => {
        setSelectedDate(null);
        setIsConfirmed(false);
        setError("");
        onSelect(null);
    };

    const handleFormatChange = (format: string) => {
        setDateFormat(format);
    };

    useEffect(() => {
        if (selectedDate) {
            validateDate(selectedDate);
        }
    }, [minDate, maxDate, selectedDate]);

    return (
        <div className="mb-6 p-6 bg-gradient-to-r from-orange-200 via-white to-green-200 rounded-xl shadow-xl border border-green-500">
            <label className="block text-orange-600 text-xl font-bold mb-4">{label}</label>

            {/* Date Format Selector */}
            <div className="mb-4">
                <label className="block text-green-800 text-sm mb-1">Date Format</label>
                <select
                    value={dateFormat}
                    onChange={(e) => handleFormatChange(e.target.value)}
                    className="w-full bg-green-200 text-green-900 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                    <option value="yyyy-MM-dd">YYYY-MM-DD</option>
                    <option value="MM/dd/yyyy">MM/DD/YYYY</option>
                    <option value="dd-MM-yyyy">DD-MM-YYYY</option>
                </select>
            </div>

            {/* Date Picker */}
            <DatePicker
                selected={selectedDate}
                onChange={handleSelect}
                dateFormat={dateFormat}
                minDate={minDate}
                maxDate={maxDate}
                className="w-full bg-green-200 text-green-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                placeholderText="Select a date"
                showPopperArrow={false}
                popperClassName="!z-50"
                calendarClassName="!bg-green-100 !text-black !border !border-green-500 p-3 rounded-lg shadow-xl"
                dayClassName={(date) => {
                    const isSelected = selectedDate?.toDateString() === date.toDateString();
                    return `
            text-sm rounded-md w-10 h-10 flex items-center justify-center 
            ${isSelected ? "bg-green-500 text-white font-bold shadow" : "hover:bg-orange-300 hover:text-black"}
            transition duration-200 ease-in-out
          `;
                }}
                weekDayClassName={() => "text-green-800 font-semibold"}
                renderCustomHeader={({monthDate, decreaseMonth, increaseMonth}) => (
                    <div className="flex justify-between items-center px-3 py-2 bg-green-300 text-green-900 rounded-t-md mb-2 font-semibold">
                        <button onClick={decreaseMonth} className="hover:text-orange-500">
                            ‹
                        </button>
                        <span>
                            {monthDate.toLocaleString("default", {
                                month: "long",
                                year: "numeric",
                            })}
                        </span>
                        <button onClick={increaseMonth} className="hover:text-orange-500">
                            ›
                        </button>
                    </div>
                )}
            />

            {/* Error Message */}
            {error && <p className="text-orange-600 text-sm mt-2 animate-pulse">{error}</p>}

            {/* Buttons */}
            <div className="mt-4 flex justify-between items-center">
                <button
                    onClick={handleReset}
                    className="bg-yellow-600 hover:bg-red-800 text-white px-4 py-2 rounded-lg transition-colors"
                >
                    Reset
                </button>
                <div>
                    {!isConfirmed && selectedDate && (
                        <button
                            onClick={handleConfirm}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                            Confirm
                        </button>
                    )}
                    {isConfirmed && (
                        <div className="text-green-400 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Date Confirmed: {selectedDate?.toLocaleDateString()}
                        </div>
                    )}
                </div>
            </div>

            {/* Step Indicator */}
            <div className="mt-4 flex items-center justify-center space-x-2">
                <div className={`h-2 w-2 rounded-full ${selectedDate ? "bg-green-400" : "bg-gray-600"}`} />
                <div className={`h-2 w-2 rounded-full ${isConfirmed ? "bg-green-400" : "bg-gray-600"}`} />
            </div>
        </div>
    );
}

export default DateSelector;
