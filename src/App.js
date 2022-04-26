import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// components
import MainHeader from './components/Layout/MainHeader/MainHeader';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import CrewPage from './pages/CrewPage';
import TechnologyPage from './pages/TechnologyPage';

// styled
import { GlobalStyle } from './Global';

const theme = {
	colors: {
		black: '#0b0d17',
		white: '#fff',
		paleBlue: '#d0d6f9',
		hoverGray: '#979797',
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<MainHeader />
			<Routes>
				<Route path="/home" element={<HomePage />} />
				<Route path="/destination" element={<DestinationPage />} />
				<Route path="/crew" element={<CrewPage />} />
				<Route path="/technology" element={<TechnologyPage />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
