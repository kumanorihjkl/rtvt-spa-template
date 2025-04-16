import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

const Home = () => {
  const [greeting, setGreeting] = useState("Hello World");
  const [colorIndex, setColorIndex] = useState(0);
  
  const colors = [
    'bg-gradient-to-r from-purple-500 to-pink-500',
    'bg-gradient-to-r from-cyan-500 to-blue-500',
    'bg-gradient-to-r from-emerald-500 to-teal-500',
    'bg-gradient-to-r from-amber-500 to-orange-500',
    'bg-gradient-to-r from-rose-500 to-red-500'
  ];
  
  const changeColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div className={`min-h-[calc(100vh-56px)] flex flex-col items-center justify-center p-4 ${colors[colorIndex]}`}>
      <div className="bg-white bg-opacity-60 backdrop-blur-sm p-8 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://vite.dev" target="_blank" className="transform transition hover:rotate-12">
            <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="transform transition hover:-rotate-12">
            <img src={reactLogo} className="h-16 w-16 animate-spin-slow" alt="React logo" />
          </a>
        </div>
        
        <h1 className="text-5xl font-bold mb-6 text-gray-800">
          {greeting}
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={changeColor}
            className="px-6 py-3 bg-gray-800 bg-opacity-80 rounded-lg text-white font-semibold hover:bg-opacity-90 transition-all"
          >
            Change Theme
          </button>
          
          <button 
            onClick={() => setGreeting(greeting === "Hello World" ? "こんにちは世界" : "Hello World")}
            className="px-6 py-3 bg-gray-800 bg-opacity-80 rounded-lg text-white font-semibold hover:bg-opacity-90 transition-all"
          >
            Toggle Language
          </button>
        </div>
        
        <p className="mt-8 text-gray-700 text-sm">
          Built with React + TypeScript + Vite + Tailwind CSS
        </p>
      </div>
    </div>
  );
};

export default Home;
