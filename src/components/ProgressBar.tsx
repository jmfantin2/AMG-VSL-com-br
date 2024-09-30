import React from 'react';
import { useVideo } from '../hooks/useVideo';

interface ProgressBarProps {
  duration: number; // Define duration as a number prop
}

const ProgressBar: React.FC<ProgressBarProps> = ({ duration }) => {
  const { currentTime } = useVideo();

  // Ensure progress is based on current time and duration
  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full bg-gray-700 h-2 opacity-60 overflow-hidden">
      <div
        className="bg-[#D1A84E] h-2"
        style={{ width: `${progressPercentage * 2}%` }}
      />
    </div>
  );
};

export default ProgressBar;
