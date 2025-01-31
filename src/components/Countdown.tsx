import React, { useEffect, useState } from 'react';
import Countdown, { CountdownRendererFn, zeroPad } from 'react-countdown';

const CountdownTimer = () => {
  const rangeInMilliseconds = 5 * 24 * 60 * 60 * 1000; // 5 days in milliseconds
  const [countdownDate, setCountdownDate] = useState<Date | null>(null);

  useEffect(() => {
    // Seed date to initialize the countdown cycle
    const seedDate = new Date('2025-01-26T00:00:00');
    const now = new Date();
    const diff = now.getTime() - seedDate.getTime();
    const cyclesSinceSeed = Math.floor(diff / rangeInMilliseconds); // Number of cycles passed since seedDate
    const nextCycleStart =
      seedDate.getTime() + (cyclesSinceSeed + 1) * rangeInMilliseconds;

    setCountdownDate(new Date(nextCycleStart));
  }, [rangeInMilliseconds]);

  if (!countdownDate) {
    return <div>Carregando...</div>; // Render a loading state while the date is being calculated
  }

  // Renderer function for the countdown timer
  const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="text-center bg-clip-text text-transparent bg-gradient-to-br from-[#E1D48F] to-[#D1A84E] text-4xl font-mono font-bold">
        <h1 className="text-center text-xl font-bold">
          Cupom de desconto termina em
        </h1>
        <h2 className="text-4xl">
          {/* If there are days, display them as "X dias", otherwise just show hours */}
          {days > 0 && (
            <span>
              {days} {days === 1 ? 'dia' : 'dias'},{' '}
            </span>
          )}
          {/* Show remaining hours, minutes, and seconds */}
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </h2>
      </div>
    );
  };

  return <Countdown date={countdownDate} renderer={renderer} />;
};

export default CountdownTimer;
