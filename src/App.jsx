import Footer from './components/Footer';
import TypingTest from './components/typingTest/TypingTest';

const App = () => {
	return (
		<div className='flex min-h-screen flex-col'>
			<TypingTest />
			<Footer />
		</div>
	);
};

export default App;
