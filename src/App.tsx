// src/app.tsx
import React from 'react';
import CountdownTimer from './components/Countdown';
import VideoPlayer from './components/VideoPlayer';
import TimestampAction from './components/TimestampAction';
import { VideoProvider } from './contexts/VideoContext';
import { RingLoader } from './components/RingLoader';

const App: React.FC = () => {
  return (
    <VideoProvider>
      <RingLoader mode="fullpage" />
      <div className="min-h-screen flex flex-col bg-GRID text-white">
        {/* Top Section with Countdown Timer */}
        <div className="w-full py-4">
          <div className="flex justify-center mt-2">
            <CountdownTimer />
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full flex justify-center">
          {/* Ensuring max width for larger screens and full width for smaller */}
          <div className="w-full max-w-[900px]">
            <VideoPlayer />
          </div>
        </div>

        {/* Action Section */}
        <div className="w-full max-w-[1280px] mx-auto my-10 px-4 text-center mb-40">
          <TimestampAction />
        </div>

        {/* Footer */}
        <footer className="fixed bottom-0 w-full py-4 gap-2 bg-[#151716] text-center items-center justify-center md:justify-around md:px-20 flex flex-col md:flex-row ">
          <img
            src="/images/AMG-SITE-LOGO-BORDER-FIX.jpeg"
            alt=""
            className="max-w-56"
          />
          <p className="text-sm text-gray-400">
            © 2025 Arte das Milhas Gestão
            <br />
            Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </VideoProvider>
  );
};

export default App;
