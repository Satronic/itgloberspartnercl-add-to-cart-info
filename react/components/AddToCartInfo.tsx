/* eslint-disable prettier/prettier */
import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'

const AddToCartInfo = () => {
  const productInfo = useProduct()
  const {
    orderForm: { items, totalizers },
  } = useOrderForm()

  // eslint-disable-next-line no-console
  console.log('Product Information: ', productInfo)

  // eslint-disable-next-line no-console
  console.log('Order Information: ', items, totalizers)

  return <div>This is the product info: </div>
}

export default AddToCartInfo
