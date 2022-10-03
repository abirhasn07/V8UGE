import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar.jsx'
import { useStoreContext } from '../context/ShoppingCartContext.jsx'
import {products} from '../database/data.js'
import { formatCurrency } from '../utilities/CURRENCRYFORMATTER.js'
const SingleProductPage = () => {
  let { id } = useParams()
  const item = products.filter((product) => (product.id === Number(id)))
const {discount}=useStoreContext()
  return (
    <section>
      <Navbar/>
        <div className="container">
      <div className='single-product-page'>

      <div className="single-product-img">
        <img src={item[0].productImage} alt={item[0].productName} />
      </div>
      <div className="single-product-info">
        <h2 className="single-product-name">
          {item[0].productName}
        </h2>
            <div className="single-product-price">
              <h4>

          {
            formatCurrency(item[0].productPrice)
          }
          </h4>
              <span>{formatCurrency(item[0].productPrice - discount)}</span>
        </div>
        <button className='addToCartBtn'>Add to bag</button>
      </div>
        </div>
    </div>
    </section>
  )
}

export default SingleProductPage