// react
import React from 'react';
import shortid from 'shortid';

// material-ui
import IconButton from 'material-ui/IconButton';
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';

// fake data
import data from '../data/data.json';

// components
import Slide from './Slide';

class Carousel extends React.Component {
  renderSlides () {
    return data.map((item) => {
      return (
        <Slide
          color={item.color}
          value={item.value}
          key={shortid.generate()}
        />
      )
    })
  }

  render () {
    return (
      <div className='carousel-container'>
        <IconButton>
          <NavigateBefore/>
        </IconButton>
        <div className='carousel-viewport'>
          {this.renderSlides()}
        </div>
        <IconButton>
          <NavigateNext/>
        </IconButton>
      </div>
    )
  }
}

export default Carousel;