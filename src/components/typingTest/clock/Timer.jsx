import { memo, useEffect, useState } from 'react';
import { useTypingContext } from '../../../lib/contexts/typingContext';
import useTimer from '../../../lib/hooks/useTimer';
import Button from '../../buttons/Button';
import Modal from '../../portals/Modal';
import ResultTest from '../ResultTest';
import StopTimer from './StopTimer';

const Timer = memo(({ correctLetter, resetTyping, isEqual, isZero }) => {
	const { btnGenState, setBtnGenState, setResetTextGener } = useTypingContext();
	const { setStartTimer, setStopTimer, timerValue, setResetTimer } = useTimer();

	// const [toggleResult, setToggleResult] = useState(false);
	const [viewResult, setViewResult] = useState();

	useEffect(() => {
		if (isEqual) setStopTimer();
	}, [isEqual, setStopTimer]);

	useEffect(() => {
		if (isZero) setStartTimer();
	}, [isZero, setStartTimer]);

	const handleResults = correctLetter => {
		const countResult = correctLetter.reduce((acc, curr) => {
			acc[curr] = (acc[curr] || 0) + 1;
			return acc;
		}, {});

		const objMapper = countResult;
		const resultsMapper = {
			correct: objMapper.true || 0,
			incorrect: objMapper.false || 0
		};
		setViewResult({ ...resultsMapper, timerValue });
	};
	return (
		<>
			<div
				className='flex items-center justify-between'
				onClick={() => console.log(' - Click timer div')}
			>
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
					<Button
						disabled={!isEqual}
						kind='secondary'
						onClick={() => handleResults(correctLetter)}
					>
						See Results
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
				{viewResult && (
					<Modal close={() => setViewResult()}>
						<ResultTest {...viewResult} />
					</Modal>
				)}
			</div>
		</>
	);
});

Timer.displayName = 'Timer';

export default Timer;
