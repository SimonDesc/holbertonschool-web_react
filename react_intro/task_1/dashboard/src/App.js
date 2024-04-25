import logo from './holberton_logo.jpg';
import './App.css';
import * as Utils from './utils.js'

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt='Holberton Logo'></img>
        <p>School Dashboard</p>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <div className='App-footer'>
			  <p>Copyright {Utils.getFullYear()} - {Utils.getFooterCopy(1)}</p> 
      </div>
    </>
  )
}

export default App;
