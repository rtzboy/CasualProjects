import { DataTimerContext } from '../../lib/contexts/dataTimerContext';
import useTimer from '../../lib/hooks/useTimer';

const DataTimerProvider = ({ children }) => {
	const { setStartTimer, setStopTimer, timerValue } = useTimer();

	return (
		<DataTimerContext.Provider
			value={(setStartTimer, setStopTimer, timerValue)}
		>
			{children}
		</DataTimerContext.Provider>
	);
};

export default DataTimerProvider;
