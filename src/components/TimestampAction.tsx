// components/TimestampAction.tsx
import { useState } from 'react';
import { useVideo } from '../hooks/useVideo';
import shapeshifter from 'classnames';

interface Action {
  time: number;
  type: 'button' | 'coupon';
  content: string;
}

const actions: Action[] = [
  { time: 4, type: 'button', content: 'Clique aqui para mais informações' },
  { time: 2, type: 'coupon', content: 'BEMVINDOAMG' },
];

const TimestampAction = () => {
  const { currentTime } = useVideo();
  const [couponButtonClicked, setCouponButtonClicked] = useState(false);

  return (
    <div className="items-center justify-center flex flex-col md:flex-row gap-4">
      {actions.map((action, index) =>
        currentTime >= action.time ? (
          <div key={index} className="w-full md:w-auto">
            {action.type === 'button' ? (
              <button className="bg-[#D1A84E] rounded-md w-full text-black p-2">
                <a
                  href="https://artedasmilhas.com.br"
                  target="_blank"
                  className="w-full"
                >
                  {action.content}
                </a>
              </button>
            ) : (
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
            )}
          </div>
        ) : null
      )}
    </div>
  );
};

export default TimestampAction;
