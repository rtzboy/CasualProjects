const TextArea = ({ className, ...props }) => {
	return (
		<textarea
			{...props}
			className={`outline-none resize-none rounded-lg ${className || ''}`}
			wrap='true'
			rows='4'
		></textarea>
	);
};

export default TextArea;
