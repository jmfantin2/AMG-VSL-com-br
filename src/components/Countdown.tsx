import Countdown, { CountdownRendererFn, zeroPad } from 'react-countdown';

const CountdownTimer = () => {
  // Set the countdown date to Oct 5, 2024
  const countdownDate = new Date('2024-12-03T00:00:00');

  // Renderer function with proper typing for the props
  const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds }) => {
    // Calculate total hours by converting days to hours

    return (
      <div className="text-center bg-clip-text text-transparent bg-gradient-to-br from-[#E1D48F] to-[#D1A84E] text-4xl font-mono font-bold">
        <h1 className="text-center text-xl font-bold ">
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
