import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Button from '../buttons/Button';

const Modal = ({ children, close }) => {
	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		return () => document.body.classList.remove('overflow-hidden');
	}, []);

	return createPortal(
		<div className='fixed inset-0 z-[999] flex items-center justify-center bg-slate-800/75'>
			<div className='relative pb-12'>
				<Button
					kind='secondary'
					className='absolute bottom-2 right-2'
					onClick={close}
				>
					Close
				</Button>
				{children}
			</div>
		</div>,
		document.getElementById('modal_portal')
	);
};

export default Modal;
