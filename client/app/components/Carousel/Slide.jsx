// react
import React from 'react';

// material-ui
import IconButton from 'material-ui/IconButton';

// styles
import styles from './slide.css';

class Slide extends React.Component {
  render () {
    const {
      color,
      value
    } = this.props;
    return (
      <div className={ styles['slide'] } style={{backgroundColor: value}}>{color}</div>
    )
  }
}

export default Slide;