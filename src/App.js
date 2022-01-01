// import { ThemeProvider } from '@material-ui/core';
// import Theme from './components/shared/MuiTheme';
import Header from './components/header/Header';
import Toolbar from './components/toolbar/Toolbar';
import Widgets from './components/widgets/Widgets';

import testFile from './components/challenges/testFile';

function App() {
	return (
		// <ThemeProvider theme={Theme}>
		<>
			<Header />
			<Toolbar />
			<Widgets />
		</>
		// </ThemeProvider>
	);
}

export default App;
