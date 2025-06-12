import React, {useState} from "react";
import {FaRecycle, FaPhone, FaEnvelope} from "react-icons/fa";
import {HiMenu, HiX} from "react-icons/hi";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        {label: "Home", href: "#"},
        {label: "Services", href: "#"},
        {label: "How It Works", href: "#"},
        {label: "About Us", href: "#"},
        {label: "Contact", href: "#"},
    ];

    return (
        <nav className="bg-white shadow-lg border-b-4 border-green-500 mb-3">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo with "Thingg" flair */}
                    <div className="flex items-center space-x-3 group">
                        <div className="relative">
                            <FaRecycle className="h-10 w-10 text-green-600 transform group-hover:rotate-180 transition-transform duration-500" />
                            <div className="absolute -top-1 -right-1 h-4 w-4 bg-orange-500 rounded-full animate-pulse"></div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">
                                <span className="text-green-600">Eco</span>
                                <span className="text-orange-500">Collect</span>
                            </h1>
                            <p className="text-xs text-gray-500 -mt-1">Smart Waste Solutions</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group py-2"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}

                        {/* Contact Info */}
                        <div className="flex items-center space-x-4 text-sm text-gray-600 border-l border-gray-200 pl-6">
                            <div className="flex items-center space-x-1">
                                <FaPhone className="h-4 w-4" />
                                <span>0800 123 4567</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <FaEnvelope className="h-4 w-4" />
                                <span>hello@ecocollect.uk</span>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-green-600 focus:outline-none"
                        >
                            {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 py-4">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="text-gray-700 hover:text-green-600 font-medium px-2 py-1 transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="border-t border-gray-100 pt-4 mt-4">
                                <div className="flex flex-col space-y-2 text-sm text-gray-600">
                                    <div className="flex items-center space-x-2">
                                        <FaPhone className="h-4 w-4" />
                                        <span>0800 123 4567</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <FaEnvelope className="h-4 w-4" />
                                        <span>hello@ecocollect.uk</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
