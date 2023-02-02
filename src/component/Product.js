import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export class Product extends Component {
 constructor(props){
   super(props);
   this.handleUpVote= this.handleUpVote.bind(this)
   this.handleDownVote= this.handleDownVote.bind(this)
 }
  handleUpVote(){
    this.props.onVote(this.props.id)
  }

  handleDownVote(){
    this.props.downVote(this.props.id)
  }
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
      
     <FontAwesomeIcon icon={faSortUp} className="text-success fa-3x " onClick={this.handleUpVote}/>
     <div className='h5 m-0 p-0'>
        {this.props.votes}
     </div>
     <FontAwesomeIcon icon={faSortDown} className="text-danger fa-3x" onClick={this.handleDownVote} />
       
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