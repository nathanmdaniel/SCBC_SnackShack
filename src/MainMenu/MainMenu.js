import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class MainMenu extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

        render() {
            const { anchorEl } = this.state;

            return (
              <div>
              <IconButton className="iconButton" color="secondary" aria-label="Menu" 
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}>
                  <MenuIcon />
                </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Register</MenuItem>
          <MenuItem onClick={this.handleClose}>Add Account</MenuItem>
        </Menu>
      </div>
      );
    }
}

export default MainMenu;