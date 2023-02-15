import Eye from '../icons/Eye';
import EyeClosed from '../icons/EyeClosed';

const GuideMode = ({ infoTyping, valueText, mode, setMode }) => {
	if (!valueText) return null;
	return (
		<p className='py-2'>
			<button
				disabled={infoTyping.isZero && !infoTyping.isEqual}
				className='flex cursor-pointer select-none gap-2 rounded-md bg-slate-200 px-2 py-1 text-slate-800 shadow hover:opacity-90 disabled:opacity-60 hover:disabled:cursor-auto'
				onClick={() => setMode(!mode)}
			>
				<span>Guide</span>
				<span>{mode ? <Eye /> : <EyeClosed />}</span>
			</button>
		</p>
	);
};

export default GuideMode;
