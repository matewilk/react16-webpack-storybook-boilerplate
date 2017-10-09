// react
import React from 'react';
import shortid from 'shortid';

// material-ui
import IconButton from 'material-ui/IconButton';
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';

// fake data
import data from '../../data/data.json';

// components
import Slide from './Slide';

// styles
import styles from './carousel.css';

class Carousel extends React.Component {
  constructor (props) {
    super(props);

    this.navigateBefore = this.navigateBefore.bind(this);

    this.state = {
      slideWidth: 0,
      numOfSlidesToScroll: 1,
      totalSlides: 7,
      currentSlide: 0
    }
  }

  onResize = () => {
    console.log('resizing');
    const { carouselViewport } = this.refs;
    carouselViewport.scrollLeft = carouselViewport.offsetWidth * this.state.currentSlide;
    this.setState({slideWidth: carouselViewport.offsetWidth});

  };

  componentDidMount () {
    window.addEventListener('resize', this.onResize);

    const { carouselViewport } = this.refs;
    this.setState({slideWidth: carouselViewport.offsetWidth});
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize);
  }

  navigateBefore (e) {
    console.log('nav before');
    const { carouselViewport } = this.refs;
    let numOfSlidesToScroll = this.state.numOfSlidesToScroll;
    let slideWidth = this.state.slideWidth;
    let newPos = carouselViewport.scrollLeft - (slideWidth * numOfSlidesToScroll);
    carouselViewport.scrollLeft = newPos;

    this.setState({currentSlide: this.state.currentSlide > 0 ? this.state.currentSlide - 1 : 0})
  }

  navigateNext = (e) => {
    console.log('nav next');
    const { carouselViewport } = this.refs;
    let numOfSlidesToScroll = this.state.numOfSlidesToScroll;
    let slideWidth = this.state.slideWidth;
    let newPos = carouselViewport.scrollLeft + (slideWidth * numOfSlidesToScroll);
    carouselViewport.scrollLeft = newPos;

    this.setState({currentSlide: this.state.currentSlide < this.state.totalSlides ? this.state.currentSlide + 1 : this.state.totalSlides})
  };

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
      <div className={ styles['carousel-container'] }>
        <IconButton onClick={this.navigateBefore}>
          <NavigateBefore/>
        </IconButton>
        <div className={ styles['carousel-viewport'] } ref='carouselViewport'>
          {this.renderSlides()}
        </div>
        <IconButton onClick={this.navigateNext}>
          <NavigateNext/>
        </IconButton>
      </div>
    )
  }
}

export default Carousel;