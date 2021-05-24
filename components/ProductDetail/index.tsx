import React from 'react'
// Styles
import styles from '@stylesComponents/ProductDetail.module.scss';
// Semantic
import { Item, Input, Button, Table } from 'semantic-ui-react'
// Model
import { TProduct } from '../../models/product.model';

type ProductDetailProps = {
  loading: boolean,
  product: TProduct | null
}

const ProductDetail = ({ loading, product }: ProductDetailProps) => {

  return (
    <article className={styles.ProductDetail}>
      <Item.Group>
        <Item>
          <Item.Image size='medium' src={product?.image}/>
          <Item.Content verticalAlign='middle'>
            <Item.Header>{product?.name}</Item.Header>
            <Item.Description>
              <p>{product?.description}</p>
              <p className={styles.ProductDetail__price}>{product?.price}</p>
              <p className={styles.ProductDetail__sku}>{product?.sku}</p>
              <Input action={
                { color: 'green',
                  content: 'Add to cart',
                  icon: 'cart',
                  onClick: () => console.log('Hola')
                }}
              />
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='2'>Attributes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell width='4'>Shape</Table.Cell>
            <Table.Cell>{product?.shape}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell >Hardiness</Table.Cell>
            <Table.Cell>{product?.hardiness}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Taste</Table.Cell>
            <Table.Cell>{product?.taste}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </article>
  )
}

export default ProductDetail
