import React from 'react';
import logo from './scbc_website_logo.png';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import ButtonAppBar from './ButtonAppBar/ButtonAppBar.js';
import AppBar from '@material-ui/core/AppBar';
import Tabs from './RegisterButtonSide/Tabs.js'

/*
function App() {
    return (
        <MuiThemeProvider>
    <div className="App">
      <header className="App-header">
        <ButtonAppBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          We will have SCBC ss_register up and running soon!
        </a>
      </header>
    </div>
          </MuiThemeProvider>
  );
}
*/

class App extends React.Component {
    render() {
        //return ;
        return (
        <div>
            <div>
                <ButtonAppBar/>
            </div>
            <div>
                <Tabs/>
            </div>
        </div>
            );
    }
}

export default App;
