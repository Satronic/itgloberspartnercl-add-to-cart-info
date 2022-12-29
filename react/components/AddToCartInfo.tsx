/* eslint-disable prettier/prettier */
import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from '@vtex/css-handles'

import ButtonGroup from './ButtonGroup'
import Totalizers from './Totalizers'
import ProductGroup from './ProductGroup'
import styles from './styles.css'

type AddToCartInfoProps = {
  blockClass: string
}

const AddToCartInfo: React.FC<AddToCartInfoProps> = ({ blockClass }) => {
  const productInfo = useProduct()
  const {
    orderForm: { items, totalizers },
  } = useOrderForm()

  const container = generateBlockClass(styles.container, blockClass)
  const containerItem = generateBlockClass(styles.container__item, blockClass)
  const containerItemLeft = generateBlockClass(
    styles['container__item--left'],
    blockClass
  )
  const containerItemRight = generateBlockClass(
    styles['container__item--right'],
    blockClass
  )

  const classes = {
    container,
    containerItem,
    containerItemLeft,
    containerItemRight,
  }

  // eslint-disable-next-line no-console
  console.log('Product Information: ', productInfo)

  // eslint-disable-next-line no-console
  console.log('Order Information: ', items, totalizers)

  return (
    <>
      <ProductGroup listProducts={items} classes={classes} />
      <Totalizers listTotalizers={totalizers} />
      <ButtonGroup />
    </>
  )
}

export default AddToCartInfo
