import React, { useEffect, useState } from 'react'
import axios from 'axios';
// Model
import { TProduct } from '../models/product.model';
// Styles
import styles from '@stylesPages/Home.module.scss';
// Components
import Header from '@components/ProductHeader';
import ProductList from '@components/ProductList';

const Home = () => {
  const [products, setProducts] = useState<TProduct[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('https://young-bastion-51103.herokuapp.com/product')
      .then(({data}) => {
        setProducts(data.products)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className={styles.Home}>
      <Header />
      <ProductList products={products} loading={loading}/>
    </div>
  )
}

export default Home



