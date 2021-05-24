import React from 'react'
import styles from '@stylesComponents/ProductList.module.scss';
import Link from 'next/link';
// Model
import { TProduct } from '../../models/product.model';
// Components
import Loading from '../Loading';

type ProductListProps = {
  products: TProduct[],
  loading: boolean
}

const ProductList = ({ products, loading }: ProductListProps) => {
  return (
    <>
      {
        loading ? <Loading /> :
        <section className={styles.ProductList__items}>
        {
          products.map((product) => {
          return (
            <Link key={product._id} href={`/product/${product._id}`}>
              <article className={styles.ProductList__item}>
                <img src={product.image} alt={product.name} />
                <div>
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
              </article>
            </Link>
          )
        })}
        </section>
      }
    </>
  )
}

export default ProductList
