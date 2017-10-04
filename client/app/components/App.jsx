// react & redux
import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom'

// react-flexbox-grid
import { Row, Col } from 'react-flexbox-grid';

// material-ui
import { Card, CardText } from 'material-ui/Card';

// components
import TopBar from './TopBar';
import TopNavigation from './TopNavigation';
import ItemsList from './ItemsList';
import AddressForm from './AddressForm';
import Carousel from './Carousel';
import BottomNavigation from './BottomNavigation';


class Welcome extends React.Component {
  render () {
    return (
      <div>
        <ItemsList list='toys' />
        <BottomNavigation
          label="Continue"
          next="/select"
        />
      </div>
    )
  }
}

class Select extends React.Component {
  render () {
    return (
      <div>
        <ItemsList list='products' />
        <BottomNavigation
          label="Now choose a toy"
          prev="/welcome"
          next="/claim"
        />
      </div>
    )
  }
}

class Claim extends React.Component {
  render () {
    return (
      <div>
        <AddressForm />
        <BottomNavigation
          label="Claim your toy"
          prev="/select"
          next="/congratulations"
        />
      </div>
    )
  }
}

class Congratulations extends React.Component {
  render () {
    return (
      <div>
        <Carousel/>
        <BottomNavigation
          label="Complete Reward claim"
          prev="/claim"
        />
      </div>
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <Row>
        <Col xs={12}>
          <TopBar />
          <TopNavigation />
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
