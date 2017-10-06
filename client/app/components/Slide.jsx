// react
import React from 'react';

// material-ui
import IconButton from 'material-ui/IconButton';

class Slide extends React.Component {
  render () {
    const {
      color,
      value
    } = this.props;
    return (
      <div className='slide' style={{backgroundColor: value}}>{color}</div>
    )
  }
}

export default Slide;