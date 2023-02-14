import Clock from '../icons/Clock';
import Pencil from '../icons/Pencil';
import XMark from '../icons/XMark';

const ResultTest = ({ correct, incorrect, timerValue }) => {
	return (
		<div className='rounded-xl bg-slate-100 p-6 text-xl'>
			<table className='border-collapse'>
				<tbody>
					<tr>
						<td className='p-2 text-red-500'>
							<XMark />
						</td>
						<td className='p-2'>Errors: </td>
						<td className='p-2 tracking-wider'>{incorrect}</td>
					</tr>
					<tr>
						<td className='p-2 text-red-500'>
							<XMark />
						</td>
						<td className='p-2'>Error rate: </td>
						<td className='p-2 tracking-wider'>
							{((incorrect / (correct + incorrect)) * 100).toFixed(2)}%
						</td>
					</tr>
					<tr>
						<td className='p-2 text-green-700'>
							<Pencil />
						</td>
						<td className='p-2'>Total: </td>
						<td className='p-2 tracking-wider'>{correct + incorrect}</td>
					</tr>
					<tr>
						<td className='p-2 text-blue-600'>
							<Clock />
						</td>
						<td className='p-2'>Time: </td>
						<td className='p-2 tracking-wider'>
							{Math.floor(timerValue / 60) < 10
								? '0' + Math.floor(timerValue / 60)
								: Math.floor(timerValue / 60)}
							:
							{Math.floor(timerValue - Math.floor(timerValue / 60) * 60) < 10
								? '0' +
								  Math.floor(timerValue - Math.floor(timerValue / 60) * 60)
								: Math.floor(timerValue - Math.floor(timerValue / 60) * 60)}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ResultTest;
