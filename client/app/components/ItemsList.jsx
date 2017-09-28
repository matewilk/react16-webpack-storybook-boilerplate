// react
import React from 'react';
import shortid from 'shortid';

// react-flexbox-grid
import { Row, Col } from 'react-flexbox-grid';

// material-ui
import Avatar from 'material-ui/Avatar';

let toys = [
  {name: 'Beauty', icon: 'B'},
  {name: 'Beast', icon: 'B'},
  {name: 'Sergei', icon: 'S'},
  {name: 'Fred', icon: 'F'}
];

let products = [
  {name: 'Car insurance', icon: 'C'},
  {name: 'Energy', icon: 'E'},
  {name: 'Travel insurance', icon: 'T'},
  {name: 'Life insurance', icon: 'L'}
];

let lists = {toys, products};

class ItemsList extends React.Component {
  render () {
    return (
      <Row around='xs'>
        {
          lists[this.props.list].map((item) => {
            return (
              <Col xs={6} sm={3} key={shortid.generate()}>
                <Row center='xs'>
                  <Col xs={6} style={{margin: '10px', padding: '10px'}}>
                    <Avatar>
                      {item.icon}
                    </Avatar>
                    <div>{item.name}</div>
                  </Col>
                </Row>
              </Col>
            )
          })
        }
      </Row>
    )
  }
}

export default ItemsList;