import logo from './holberton_logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js'

function App() {
	return (
		<>
			<div className="App-header">
				<img src={logo} alt='Holberton Logo'></img>
				<p>School Dashboard</p>
			</div>
			<div className='App-body'>
				<p>Login to access the full dashboard</p>
				
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" required aria-required="true" aria-describedby="emailHelp"></input>

				<label htmlFor="password">Password:</label>
				<input type="password" id="password" required aria-required="true" aria-describedby="passwordHelp"></input>

				<button type="submit" aria-label="Login to your account">OK</button>
			</div>
			<div className='App-footer'>
				<p>Copyright {getFullYear()} - {getFooterCopy(1)}</p>
			</div>
		</>
	)
}

export default App;
