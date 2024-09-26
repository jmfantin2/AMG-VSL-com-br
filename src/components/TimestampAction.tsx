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
    timeIn: 15,
    timeOut: 60,
    type: 'button',
    content: 'Esse botão entra em 15 e sai em 60',
  },
  { timeIn: 15, timeOut: 45, type: 'coupon', content: 'BEMVINDOAMG' },
  {
    timeIn: 3,
    timeOut: 15,
    type: 'notice',
    content: 'Esse aviso entra em 3 e sai em 15.',
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
              <button className="bg-gradient-to-br from-[#E1D48F] to-[#D1A84E] rounded-md w-full text-black p-2">
                <a
                  href="https://artedasmilhas.com.br"
                  target="_blank"
                  className="w-full"
                >
                  {action.content}
                </a>
              </button>
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
