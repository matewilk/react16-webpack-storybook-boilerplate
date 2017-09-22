// react & redux
import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom'
import { push } from 'react-router-redux';

// react-flexbox-grid
import { Row, Col } from 'react-flexbox-grid';
import { Card, CardText } from 'material-ui/Card';

// material-ui
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Avatar from 'material-ui/Avatar';

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

import { nextStep, prevStep } from "../actions/steps";


class Navigation extends React.Component {
  constructor (props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);
  }

  handleNext () {
    this.props.dispatch(nextStep());
    if (this.props.path) {
      this.props.dispatch(push(this.props.path));
    }
  }

  render () {
    return (
      <RaisedButton
        fullWidth={true}
        label={this.props.label}
        onClick={this.handleNext}
      />
    )
  }
}

function mapStateToProps (state) {
  return ({
    steps: state.steps
  })
}

Navigation = withRouter(connect(mapStateToProps)(Navigation));

class Welcome extends React.Component {
  render () {
    return (
      <div>
        <div>Welcome to Rewards</div>
        <Navigation label="Continue" path="/select"/>
      </div>
    )
  }
}

class Select extends React.Component {
  render () {
    return (
      <div>
        <div>Select product</div>
        <Navigation label="Now choose a toy" path="/claim"/>
      </div>
    )
  }
}

class Claim extends React.Component {
  render () {
    return (
      <div>
        <div>Claim a toy</div>
        <Navigation label="Claim your toy" path="/congratulations"/>
      </div>
    )
  }
}

class Congratulations extends React.Component {
  render () {
    return (
      <div>
        <div>Congratulations</div>
        <Navigation label="Complete Reward claim" />
      </div>
    )
  }
}

class Step extends React.Component {
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
    return (
      <Col xs={3}>
        <Row center='xs'>
          <Col xs={12}>
            <Link to={this.props.link}>
              <Avatar
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

Step = connect(mapStateToProps)(Step);

class App extends React.Component {
  render () {
    return (
      <Row>
        <Col xs={12}>
          <AppBar
            title="comparethemarket.com"
            showMenuIconButton={false}
            iconElementRight={<IconButton><NavigationMenu /></IconButton>}
          />
          <Card>
            <Row>
              <Step link="/welcome" text="Your purchase" step={1} />
              <Step link="/select" text="Meerkat Movies" step={2} />
              <Step link="/claim" text="Choose your toy" step={3} />
              <Step link="/congratulations" text="Confirm details" step={4} />
            </Row>
          </Card>
          <Card>
            <CardText>
              <Route path="/welcome" component={Welcome}/>
              <Route path="/select" component={Select}/>
              <Route path="/claim" component={Claim}/>
              <Route path="/congratulations" component={Congratulations}/>
            </CardText>
          </Card>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps (state) {
  return ({
    steps: state.steps,
    router: state.router
  })
}

export default withRouter(connect(mapStateToProps)(App));
