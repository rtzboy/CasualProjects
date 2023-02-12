import { memo, useEffect } from 'react';
import { useTypingContext } from '../../lib/contexts/typingContext';
import useTimer from '../../lib/hooks/useTimer';
import Button from '../buttons/Button';

const Timer = memo(({ resetTyping, isEqual, greater }) => {
	const { setTyping, setResetTextGener } = useTypingContext();
	const { setStartTimer, setStopTimer, timerValue, setResetTimer } = useTimer();

	useEffect(() => {
		if (isEqual) setStopTimer();
	}, [isEqual, setStopTimer]);

	useEffect(() => {
		if (greater) setStartTimer();
	}, [greater, setStartTimer]);

	return (
		<>
			<div className='flex justify-between'>
				<p className='text-slate-900 text-xl'>
					{timerValue} <span className='text-slate-700'>sec</span>
				</p>
				<div className='flex gap-4'>
					<Button kind='secondary' disabled>
						Try Again
					</Button>
					<Button kind='secondary' disabled>
						Save Score
					</Button>
					<Button
						onClick={() => {
							setTyping();
							setResetTimer();
							resetTyping();
							setResetTextGener();
						}}
					>
						New Typing...
					</Button>
				</div>
			</div>
		</>
	);
});

Timer.displayName = 'Timer';

export default Timer;
