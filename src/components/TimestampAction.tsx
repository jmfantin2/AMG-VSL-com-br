// components/TimestampAction.tsx
import { useVideo } from '../hooks/useVideo';

interface Action {
  time: number;
  type: 'button' | 'coupon';
  content: string;
}

const actions: Action[] = [
  { time: 15, type: 'button', content: 'Clique aqui para mais informações' },
  { time: 10, type: 'coupon', content: 'BEMVINDOAMG' },
];

const TimestampAction = () => {
  const { currentTime } = useVideo();

  return (
    <div className="mt-4">
      {actions.map((action, index) =>
        currentTime >= action.time ? (
          <div key={index} className="my-2">
            {action.type === 'button' ? (
              <button className="bg-transparent rounded-md border-2 border-[#D1A84E] text-white p-2">
                {action.content}
              </button>
            ) : (
              <div className="text-white p-2">
                Copie o cupom:{' '}
                <span className="font-bold">{action.content}</span>
              </div>
            )}
          </div>
        ) : null
      )}
    </div>
  );
};

export default TimestampAction;
