const StopTimer = ({ timerValue }) => {
	return (
		<div className='cus-shadow flex w-[100px] select-none gap-2 overflow-hidden rounded-lg bg-white/70 px-2 py-1 text-xl'>
			<div className='flex flex-col items-center'>
				<span className='text-slate-600'>
					{Math.floor(timerValue / 60) < 10
						? '0' + Math.floor(timerValue / 60)
						: Math.floor(timerValue / 60)}
				</span>
				<span className='text-sm text-slate-500'>min</span>
			</div>
			<div className='flex flex-col items-center'>
				<span className='text-slate-600'>
					{Math.floor(timerValue - Math.floor(timerValue / 60) * 60) < 10
						? '0' + Math.floor(timerValue - Math.floor(timerValue / 60) * 60)
						: Math.floor(timerValue - Math.floor(timerValue / 60) * 60)}
				</span>
				<span className='text-sm text-slate-500'>sec</span>
			</div>
			<div className='flex flex-col justify-center'>
				<span className='text-sm text-slate-600'>
					{timerValue === 0
						? '00'
						: (timerValue - Math.floor(timerValue / 60) * 60)
								.toFixed(2)
								.split('.')[1]}
				</span>
			</div>
		</div>
	);
};

export default StopTimer;
