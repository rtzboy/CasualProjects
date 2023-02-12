import { useCallback, useEffect, useRef, useState } from 'react';

const useTimer = () => {
	const [startTime, setStartTime] = useState(null);
	const [now, setNow] = useState(null);
	const [timerValue, setTimerValue] = useState(0);

	const intervalId = useRef(null);

	const setStartTimer = useCallback(() => {
		setStartTime(Date.now());
		setNow(Date.now());
		clearInterval(intervalId.current);

		intervalId.current = setInterval(() => {
			setNow(Date.now());
		}, 50);
	}, []);

	const setStopTimer = () => clearInterval(intervalId.current);

	const setResetTimer = () => {
		setStartTime(null);
		setNow(null);
		setTimerValue(0);
	};

	useEffect(() => {
		if (startTime && now) setTimerValue(((now - startTime) / 1000).toFixed(2));
	}, [startTime, now]);

	return { setStartTimer, setStopTimer, timerValue, setResetTimer };
};

export default useTimer;
