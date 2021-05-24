import React from 'react'
// Styles
import styles from '@stylesComponents/ProductHeader.module.scss';
// Semantic Components
import { Header } from 'semantic-ui-react';

const ProductHeader = () => {
  return (
    <>
      <Header className={styles.ProductHeader__title} as='h1' dividing>Avo Store</Header>
    </>
  )
}

export default ProductHeader
