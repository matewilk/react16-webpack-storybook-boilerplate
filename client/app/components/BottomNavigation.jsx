// react & redux
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux';

// react-flexbox-grid
import { Row, Col } from 'react-flexbox-grid';

// material-ui
import RaisedButton from 'material-ui/RaisedButton';

import { nextStep, prevStep } from "../actions/steps";

class BottomNavigation extends React.Component {
  constructor (props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handlePrev () {
    this.props.dispatch(prevStep());
    if (this.props.prev) {
      this.props.dispatch(push(this.props.prev));
    }
  }

  handleNext () {
    this.props.dispatch(nextStep());
    if (this.props.next) {
      this.props.dispatch(push(this.props.next));
    }
  }

  render () {
    return (
      <Row between='xs'>
        <Col xs={6}>
          <RaisedButton
            fullWidth={true}
            label="Previous"
            onClick={this.handlePrev}
          />
        </Col>
        <Col xs={6}>
          <RaisedButton
            fullWidth={true}
            label={this.props.label}
            onClick={this.handleNext}
          />
        </Col>
      </Row>
    )
  }
}

function mapStateToProps (state) {
  return ({
    steps: state.steps
  })
}

export default withRouter(connect(mapStateToProps)(BottomNavigation));