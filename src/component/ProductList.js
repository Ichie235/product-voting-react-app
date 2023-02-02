import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Product from "./Product"
import Seed from "../seed"




export class ProductList extends Component {
  constructor(props){
    super(props);
    this.state= {
      products:[]
    }
    this.handleProductUpVote = this.handleProductUpVote.bind(this)
    this.handleProductDownVote = this.handleProductDownVote.bind(this)
  }
  componentDidMount() {
    this.setState({products:Seed.products})
  }
  handleProductUpVote(productId){
    const productUp = this.state.products.map((product)=>{
      if(product.id===productId){
        return Object.assign({},product,{
          votes:product.votes + 1
        })
      }else{return product}
    })
    this.setState({products:productUp})
  }
  handleProductDownVote(productId){
    const productDown = this.state.products.map((product)=>{
      if(product.id===productId){
        return Object.assign({},product,{
          votes:product.votes - 1
        })
      }else{return product}
    })
    this.setState({products:productDown})
  }
  render() {
    const products = this.state.products.sort((a,b)=>{
     return b.votes - a.votes
    })
    const productComponent = products.map((product)=>{
     return <Product
      key={'product-' + product.id}
      id={product.id}
      title={product.title} 
      description={product.description} 
      url={product.url}
      votes={product.votes}
      submitterAvatarUrl={product.submitterAvatarUrl} 
      productImageUrl={product.productImageUrl} 
      onVote={this.handleProductUpVote}
      downVote={this.handleProductDownVote}
      />
    })
    return (
      <div> <Container>
       <h1 style={{textAlign: "center"}}>Popular products</h1> <hr></hr>
       {productComponent}
      
       </Container>
      </div>
    )
  }
}

export default ProductList



