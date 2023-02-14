const TextArea = ({ className, ...props }) => {
	return (
		<textarea
			{...props}
			className={`resize-none rounded-lg outline-none ${className || ''}`}
			wrap='true'
			rows='3'
		></textarea>
	);
};

export default TextArea;
