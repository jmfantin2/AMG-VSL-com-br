// components/TimestampAction.tsx
import { useVideo } from '../hooks/useVideo';

interface Action {
  time: number;
  type: 'button' | 'coupon';
  content: string;
}

const actions: Action[] = [
  { time: 5, type: 'button', content: 'Clique aqui para mais informações' },
  { time: 30, type: 'coupon', content: 'CUPOM50' },
];

const TimestampAction = () => {
  const { currentTime } = useVideo();

  return (
    <div className="mt-4">
      {actions.map((action, index) =>
        currentTime >= action.time ? (
          <div key={index} className="my-2">
            {action.type === 'button' ? (
              <button className="bg-blue-500 text-white p-2 rounded">
                {action.content}
              </button>
            ) : (
              <div className="text-white">
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
