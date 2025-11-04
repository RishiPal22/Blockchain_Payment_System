import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-gradient-to-r from-gray-900 via-purple-900 to-violet-700 text-white shadow-lg">

            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Left: Logo */}
                <div className="text-2xl font-bold cursor-pointer">Payment</div>

                {/* Middle: Links (hidden on small screens) */}
                <div className="hidden md:flex space-x-8 text-lg">
                    <a href="#" className="hover:text-gray-200 transition">
                        Home
                    </a>
                    <a href="#" className="hover:text-gray-200 transition">
                        Market Place
                    </a>
                    <a href="#" className="hover:text-gray-200 transition">
                        Wallet
                    </a>
                </div>

                {/* Right: Sign In button (hidden on small screens) */}
                <div className="hidden md:block">
                    <button className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
                        Sign In
                    </button>
                </div>

                {/* Hamburger menu (visible only on small screens) */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Dropdown menu for mobile */}
            {menuOpen && (
                <div className="md:hidden bg-gradient-to-r from-gray-900 via-purple-900 to-violet-700 text-white px-4 py-3 space-y-3">
                    <a href="#" className="block hover:text-gray-200">
                        Home
                    </a>
                    <a href="#" className="block hover:text-gray-200">
                        Market Place
                    </a>
                    <a href="#" className="block hover:text-gray-200">
                        Wallet
                    </a>
                    <button className="w-full bg-white text-indigo-600 font-semibold py-2 rounded-full shadow-md hover:bg-gray-100 transition">
                        Sign In
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
