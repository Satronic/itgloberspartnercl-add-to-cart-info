/* eslint-disable prettier/prettier */
import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'

import ButtonGroup from './ButtonGroup'
import Totalizers from './Totalizers'
import ProductGroup from './ProductGroup'

const AddToCartInfo = () => {
  const productInfo = useProduct()
  const {
    orderForm: { items, totalizers },
  } = useOrderForm()

  // eslint-disable-next-line no-console
  console.log('Product Information: ', productInfo)

  // eslint-disable-next-line no-console
  console.log('Order Information: ', items, totalizers)

  return (
    <>
      <ProductGroup listProducts={items} />
      <Totalizers />
      <ButtonGroup />
    </>
  )
}

export default AddToCartInfo
