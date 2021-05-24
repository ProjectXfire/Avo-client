import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
// Components
import ProductDetail from '@components/ProductDetail';
// Model
import { TProduct } from '../../models/product.model';



const ProductItem = () => {
  const [product, setProduct] = useState<TProduct | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const productId = router.query.id

  useEffect(() => {
    setLoading(true)
    if (productId) {
      axios.get(`https://young-bastion-51103.herokuapp.com/product/${productId}`)
      .then(({data}) => {
        setProduct(data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
    }
  }, [productId])
  return (
    <ProductDetail loading={loading} product={product}/>
  )
}

export default ProductItem
