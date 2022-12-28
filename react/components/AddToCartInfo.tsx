/* eslint-disable prettier/prettier */
import React from 'react'
import { useProduct } from 'vtex.product-context'

const AddToCartInfo = () => {
  const productInfo = useProduct()

  // eslint-disable-next-line no-console
  console.log('Producto Information: ', productInfo)

  return <div>This is the product info: </div>
}

export default AddToCartInfo
