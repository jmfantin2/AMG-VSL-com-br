import React, { createContext, useState, ReactNode } from 'react';

interface VideoContextProps {
  currentTime: number;
  setCurrentTime: (time: number) => void;
}

interface VideoProviderProps {
  children: ReactNode;
}

const VideoContext = createContext<VideoContextProps | undefined>(undefined);

export const VideoProvider: React.FC<VideoProviderProps> = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <VideoContext.Provider value={{ currentTime, setCurrentTime }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContext;
