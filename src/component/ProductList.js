import React from 'react'
import Container from 'react-bootstrap/Container';
import Product from "./Product"
import seed from "../seed"




function ProductList(props) {
  const productComponent = seed.products.map((product)=>{
   return <Product
    key = {'Product-'+product.id}
      id = {product.id}
      title={product.title} 
      description={product.description} 
      url={product.url}
      votes={product.votes}
    />
  })
  return (
    <div>
      <Container>
      <h1 style={{textAlign: "center"}}>Popular products</h1> <hr></hr>
    {productComponent}
    </Container>
    </div>
  )
}

export default ProductList


