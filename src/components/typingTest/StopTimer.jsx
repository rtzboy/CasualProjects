const StopTimer = ({ timerValue }) => {
	return (
		<div className='flex gap-2 text-xl rounded-lg bg-white/70 px-2 py-1 cus-shadow w-[100px] overflow-hidden'>
			<div className='flex flex-col items-center'>
				<span className='text-slate-600'>
					{Math.floor(timerValue / 60) < 10
						? '0' + Math.floor(timerValue / 60)
						: Math.floor(timerValue / 60)}
				</span>
				<span className='text-slate-500 text-sm'>min</span>
			</div>
			<div className='flex flex-col items-center'>
				<span className='text-slate-600'>
					{Math.floor(timerValue - Math.floor(timerValue / 60) * 60) < 10
						? '0' + Math.floor(timerValue - Math.floor(timerValue / 60) * 60)
						: Math.floor(timerValue - Math.floor(timerValue / 60) * 60)}
				</span>
				<span className='text-slate-500 text-sm'>sec</span>
			</div>
			<div className='flex flex-col justify-center'>
				<span className='text-slate-600 text-sm'>
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
