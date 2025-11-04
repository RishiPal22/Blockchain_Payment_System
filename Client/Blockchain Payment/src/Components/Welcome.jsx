import React from "react";

const Welcome = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-violet-800 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 text-white">
      
      {/* Left Text Section */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Fast, Secure & Decentralized <br /> Blockchain Payments
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-md">
          Experience the next generation of seamless crypto transactions.  
          Send Ethereum instantly and securely anywhere in the world.
        </p>
      </div>

      {/* Right Section: Image + Form */}
      <div className="flex-1 mt-10 md:mt-0 flex flex-col items-center space-y-6">
        {/* Ethereum Image */}
        <img
          src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
          alt="Ethereum Logo"
          className="w-32 md:w-48 drop-shadow-lg"
        />

        {/* Transaction Form */}
        <form className="w-full max-w-sm bg-gray-800 bg-opacity-60 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Address To
            </label>
            <input
              type="text"
              placeholder="0x1234...abcd"
              className="w-full px-4 py-2 rounded-md bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Amount (ETH)
            </label>
            <input
              type="number"
              placeholder="0.01"
              className="w-full px-4 py-2 rounded-md bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              placeholder="Enter a message..."
              className="w-full px-4 py-2 rounded-md bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-violet-700 hover:from-violet-700 hover:to-purple-800 transition-all py-2 rounded-full font-semibold shadow-md"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Welcome;
