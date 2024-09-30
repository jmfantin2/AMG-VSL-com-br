import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useVideo } from '../hooks/useVideo';
import ProgressBar from './ProgressBar';
import { HiVolumeOff } from 'react-icons/hi';

const VideoPlayer = () => {
  const { setCurrentTime } = useVideo();
  const playerRef = useRef<ReactPlayer>(null);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  // Capture progress as the video plays
  const handleProgress = (state: { playedSeconds: number }) => {
    setCurrentTime(state.playedSeconds);
  };

  // Capture video duration when loaded
  const handleDuration = (dur: number) => {
    setDuration(dur);
  };

  // Toggle the mute state
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center bg-black">
      {/* ReactPlayer with full width and height*/}
      <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
        <ReactPlayer
          ref={playerRef}
          url="https://www.youtube.com/watch?v=dQ7MbDvbOW4"
          playing
          muted={isMuted}
          controls={false}
          onProgress={handleProgress}
          onDuration={handleDuration}
          width="100%"
          height="100%"
        />
        {/* Z-layer to block interaction <div className="absolute inset-0 z-10" />*/}
      </div>

      {/* Mute/Unmute Button with Icon */}
      {isMuted && (
        <button
          className="absolute bottom-4 right-4 z-20 p-2 bg-red-500 text-white flex items-center justify-center"
          onClick={toggleMute}
        >
          <HiVolumeOff size={34} color="white" />
          <p className="ml-2 text-xl">Toque para ativar o som</p>
        </button>
      )}

      {/* Progress Bar Positioned Directly Below the Video */}
      <div className="w-full max-w-6xl">
        <ProgressBar duration={duration} />
      </div>
    </div>
  );
};

export default VideoPlayer;
