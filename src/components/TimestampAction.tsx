import { useState } from 'react';
import { useVideo } from '../hooks/useVideo';
import shapeshifter from 'classnames';

interface Action {
  timeIn: number; // When the action should appear
  timeOut: number; // When the action should disappear
  type: 'button' | 'coupon' | 'notice'; // Added 'notice' type
  content: string;
}

const actions: Action[] = [
  {
    timeIn: 150,
    timeOut: 600,
    type: 'button',
    content: 'Confira nossos planos!',
  },
  { timeIn: 150, timeOut: 600, type: 'coupon', content: 'BEMVINDOAMG' },
  {
    timeIn: 75,
    timeOut: 150,
    type: 'notice',
    content: 'O cupom aparecerá em 1 minuto.',
  },
  {
    timeIn: 0,
    timeOut: 75,
    type: 'notice',
    content: 'O cupom aparecerá em 2 minutos.',
  },
];

const TimestampAction = () => {
  const { currentTime } = useVideo();
  const [couponButtonClicked, setCouponButtonClicked] = useState(false);

  return (
    <div className="items-center justify-center flex flex-col md:flex-row gap-4">
      {actions.map((action, index) =>
        currentTime >= action.timeIn && currentTime <= action.timeOut ? (
          <div key={index} className="w-full md:w-auto">
            {action.type === 'button' ? (
              <a
                href="https://artedasmilhas.com.br/#planos"
                target="_blank"
                className="w-full"
              >
                <button className="bg-gradient-to-br from-[#E1D48F] to-[#D1A84E] rounded-md w-full text-black p-2">
                  {action.content}
                </button>
              </a>
            ) : action.type === 'coupon' ? (
              <button
                onClick={() => {
                  setCouponButtonClicked(true);
                  navigator.clipboard.writeText(action.content);
                }}
                className={shapeshifter(
                  'bg-transparent rounded-md w-full border-2 border-[#D1A84E] text-white p-2',
                  {
                    'border-green-500 cursor-default hover:border-green-500':
                      couponButtonClicked,
                  }
                )}
              >
                {couponButtonClicked ? (
                  `Cupom ${action.content} copiado!`
                ) : (
                  <>
                    Copie o cupom:{' '}
                    <span className="font-bold">{action.content}</span>
                  </>
                )}
              </button>
            ) : (
              // Render for "notice" type
              <div className="text-[#E1D48F] p-2 text-xl rounded-md">
                {action.content}
              </div>
            )}
          </div>
        ) : null
      )}
    </div>
  );
};

export default TimestampAction;
