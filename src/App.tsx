// src/app.tsx
import React from 'react';
import CountdownTimer from './components/Countdown';
import VideoPlayer from './components/VideoPlayer';
import TimestampAction from './components/TimestampAction';
import { VideoProvider } from './contexts/VideoContext';

const App: React.FC = () => {
  return (
    <VideoProvider>
      <div className="min-h-screen flex flex-col justify-between bg-GRID text-white">
        {/* Top Section with Countdown Timer */}
        <div className="w-full bg-gradient-to-r from-blue-700 to-blue-500 py-4">
          <h1 className="text-center text-xl md:text-3xl font-bold text-white">
            Nossa oferta especial termina em
          </h1>
          <div className="flex justify-center mt-2">
            <CountdownTimer />
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full flex justify-center">
          {/* Ensuring max width for larger screens and full width for smaller */}
          <div className="w-full max-w-[1280px]">
            <VideoPlayer />
          </div>
        </div>

        {/* Action Section */}
        <div className="w-full max-w-[1280px] mx-auto my-10 px-4 text-center">
          <TimestampAction />
        </div>

        {/* Footer */}
        <footer className="w-full py-6 bg-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Your Company Name. All rights reserved.
          </p>
        </footer>
      </div>
    </VideoProvider>
  );
};

export default App;
