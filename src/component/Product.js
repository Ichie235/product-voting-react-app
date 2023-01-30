import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export class Product extends Component {
  render() {
    return (
      <div className='mb-2 mt-3'>
        <Row>
        <Col md={2} sm={2}> 
        <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
        </Card>
    </Col>
        <Col md={10} sm={10}> <Card>
      <Card.Body>
     <FontAwesomeIcon icon={faSortUp} className="text-success fa-2x" /><div className='h4'>{this.props.votes}</div>
        <Card.Title>
            <Card.Link href={this.props.url}>{this.props.title}</Card.Link>
            </Card.Title>
        <Card.Text>
       <div> {this.props.description}</div>
         <div className='mt-3'> Submitted by:</div>
        </Card.Text>
       
      </Card.Body>
    </Card></Col>
      </Row>
      </div>
    )
  }
}

export default Product