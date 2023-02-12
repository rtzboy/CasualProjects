import { memo, useEffect } from 'react';
import useTimer from '../lib/hooks/useTimer';

const Timer = memo(({ isEqual, greater }) => {
	const { setStartTimer, setStopTimer, timerValue } = useTimer();

	useEffect(() => {
		if (isEqual) setStopTimer();
	}, [isEqual, setStopTimer]);

	useEffect(() => {
		if (greater) setStartTimer();
	}, [greater, setStartTimer]);

	return (
		<>
			<p className='text-slate-900 text-lg'>{timerValue}</p>
		</>
	);
});

Timer.displayName = 'Timer';

export default Timer;
