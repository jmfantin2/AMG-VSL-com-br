import Countdown, { CountdownRendererFn, zeroPad } from 'react-countdown';

const CountdownTimer = () => {
  // Set the countdown date to September 30th, 2024
  const countdownDate = new Date('2024-09-30T00:00:00');

  // Renderer function with proper typing for the props
  const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds }) => {
    // Calculate total hours by converting days to hours
    const totalHours = days * 24 + hours;

    return (
      <div className="text-center bg-clip-text text-transparent bg-gradient-to-br to-[#D1A84E] from-[#BC9858] text-4xl font-mono font-bold">
        <h1 className="text-center text-lg md:text-xl font-bold ">
          Nossa oferta especial termina em
        </h1>
        <h2 className="text-4xl md:text-6xl">
          {/* Show total hours (days converted to hours) */}
          {zeroPad(totalHours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </h2>
      </div>
    );
  };

  return <Countdown date={countdownDate} renderer={renderer} />;
};

export default CountdownTimer;
