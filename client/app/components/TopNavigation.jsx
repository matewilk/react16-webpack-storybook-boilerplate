import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import shortid from 'shortid';

// react-flexbox-grid
import { Row, Col } from 'react-flexbox-grid';

// material-ui
import Avatar from 'material-ui/Avatar';
import { Card, CardText } from 'material-ui/Card';
import { cyan500 } from 'material-ui/styles/colors';
// material-ui icons
import ActionDone from 'material-ui/svg-icons/action/done';
import Image1 from 'material-ui/svg-icons/image/looks-one';
import Image2 from 'material-ui/svg-icons/image/looks-two';
import Image3 from 'material-ui/svg-icons/image/looks-3';
import Image4 from 'material-ui/svg-icons/image/looks-4';

const IconImages = {
  1: Image1,
  2: Image2,
  3: Image3,
  4: Image4
};

class NavigationButton extends React.Component {
  constructor (props) {
    super(props);

    this.renderIcon = this.renderIcon.bind(this);
  }

  renderIcon () {
    if (this.props.step <= this.props.steps) {
      return <ActionDone />
    } else {
      let Icon =  IconImages[this.props.step];
      return <Icon />;
    }
  }

  render () {
    let color = this.props.step - 1 === this.props.steps ? cyan500 : '';
    return (
      <Col xs={3}>
        <Row center='xs'>
          <Col xs={12}>
            <Link to={this.props.link} style={{textDecoration: 'none'}}>
              <Avatar
                backgroundColor={color}
                icon={this.renderIcon()}
              />
              <div>{this.props.text}</div>
            </Link>
          </Col>
        </Row>
      </Col>
    )
  }
}

function mapStateToProps (state) {
  return ({
    steps: state.steps
  })
}

NavigationButton =  connect(mapStateToProps)(NavigationButton);

let steps = [
  {link: '/welcome', text: "Choose a Toy", number: 1},
  {link: '/select', text: "Your Purchase", number: 2},
  {link: '/claim', text: "Address of Delivery", number: 3},
  {link: '/congratulations', text: "Confirm details",number: 4},
];

class TopNavigation extends React.Component {
  render () {
    return (
      <Card>
        <CardText>
          <Row>
            {
              steps.map((step) => {
                return <NavigationButton
                  link={step.link}
                  text={step.text}
                  step={step.number}
                  key={shortid.generate()}
                />
              })
            }
          </Row>
        </CardText>
      </Card>
    )
  }
}

export default TopNavigation;