import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card, CardText } from 'material-ui/Card';

class App extends React.Component {
  render () {
    return (
      <Grid fluid>
        <Row center="xs">
          <Col xs={6}>
            <Card>
              <CardText>
                Hello World from react material-ui and flexbox!
              </CardText>
            </Card>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
