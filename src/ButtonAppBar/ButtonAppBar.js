import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MainMenu from '../MainMenu/MainMenu.js'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#B5D565"
        },
        secondary: {
            main: "#FAEBD7"
        }
    }
});

class ButtonAppBar extends React.Component {
    render() {
        return (
          <div>
            <MuiThemeProvider theme={theme}>
            <AppBar position="static" color="primary">
              <Toolbar>
                <MainMenu/>
                <Typography variant="h6" color="secondary">
                  Sandy Creek Bible Camp
                </Typography>
              </Toolbar>
            </AppBar>
            </MuiThemeProvider>
          </div>
      );
            }
}

export default ButtonAppBar;