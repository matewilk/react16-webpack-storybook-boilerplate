// react
import React from 'react';

// material-ui
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

class TopBar extends React.Component {
  render () {
    return (
      <AppBar
        title="comparethemarket.com"
        showMenuIconButton={false}
        iconElementRight={<IconButton><NavigationMenu /></IconButton>}
      />
    )
  }
}

export default TopBar;