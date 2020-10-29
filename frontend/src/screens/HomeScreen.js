import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'


const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword
    
    const pageNumber =  match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products, page, pages } = productList

    useEffect(() => {
      dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    return (
      <>
      <Meta />
      {!keyword ? <ProductCarousel /> : <Link to='/' className='btn btn-light'>
        Go Back
        </Link>}
        <br/>
          <h1 style={{'textAlign': 'center'}}>Fresh Flowers</h1>
          <p style={{'textAlign': 'center'}}>This online shop is built with MongoDB, Express, React and Node. 
          This app allows customers to place orders and create a profile. 
          It has a basic inventory system to keep orders organized 
          and can be connected to a payment gateway such as PayPal or any platform you choose. 
          This online store can be fully customized to accomodate retailers to sell 'B to B' or 'B to C'. </p>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
            <>
            <Row>
            {products.map((product) => (
                    <Col key={ product._id }sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
            ))}     
          </Row>
          <Paginate 
            pages={pages} 
            page={page} 
            keyword={keyword ? keyword : ''}/>
          </>
          )}  
      </>
    )
}

export default HomeScreen
