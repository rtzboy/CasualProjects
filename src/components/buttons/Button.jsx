const KIND_BUTTON = {
	primary: 'bg-slate-900 text-white border-slate-900',
	secondary: 'bg-slate-100 text-slate-900 border-slate-500'
};

const Button = ({ kind = 'primary', className, ...props }) => {
	return (
		<button
			{...props}
			className={`px-3 py-[2px] rounded-md border-2 disabled:opacity-90 hover:cus-shadow-md disabled:cus-shadow-d disabled:text-gray-700 shadow-gray-600 shadow ${
				KIND_BUTTON[kind]
			} ${className || ''}`}
		></button>
	);
};

export default Button;
