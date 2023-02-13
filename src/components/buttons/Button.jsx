const KIND_BUTTON = {
	primary: 'bg-slate-900 text-white border-slate-900',
	secondary: 'bg-slate-100 text-slate-900 border-slate-500'
};

const Button = ({ kind = 'primary', className, ...props }) => {
	return (
		<button
			{...props}
			className={`hover:cus-shadow-md disabled:cus-shadow-d rounded-md border-2 px-3 py-[2px] shadow shadow-gray-600 disabled:text-gray-700 disabled:opacity-90 ${
				KIND_BUTTON[kind]
			} ${className || ''}`}
		></button>
	);
};

export default Button;
