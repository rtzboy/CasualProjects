import { memo, useEffect } from 'react';
import { useTypingContext } from '../../lib/contexts/typingContext';
import useTimer from '../../lib/hooks/useTimer';
import Button from '../buttons/Button';
import StopTimer from './StopTimer';

const Timer = memo(({ resetTyping, isEqual, isZero }) => {
	const { btnGenState, setBtnGenState, setResetTextGener } = useTypingContext();
	const { setStartTimer, setStopTimer, timerValue, setResetTimer } = useTimer();

	useEffect(() => {
		if (isEqual) setStopTimer();
	}, [isEqual, setStopTimer]);

	useEffect(() => {
		if (isZero) setStartTimer();
	}, [isZero, setStartTimer]);

	return (
		<>
			<div className='flex items-center justify-between'>
				<StopTimer timerValue={timerValue} />
				<div className='flex gap-4'>
					<Button
						disabled={!isEqual}
						kind='secondary'
						onClick={() => {
							resetTyping();
							setResetTimer();
							setBtnGenState(false);
						}}
					>
						Try Again
					</Button>
					<Button disabled={!isEqual} kind='secondary'>
						Save Score
					</Button>
					<Button
						disabled={!btnGenState || !isEqual}
						onClick={() => {
							setBtnGenState();
							setResetTimer();
							resetTyping();
							setResetTextGener();
						}}
					>
						Clear
					</Button>
				</div>
			</div>
		</>
	);
});

Timer.displayName = 'Timer';

export default Timer;
