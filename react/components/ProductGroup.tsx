/* eslint-disable prettier/prettier */
import React from 'react'

interface ImageUrl {
  at1x: string
}

interface Product {
  id: string
  imageUrls: ImageUrl
  name: string
  quantity: number
  price: number
}

type ListProductProps = {
  listProducts: Product[]
}

const ProductGroup: React.FC<ListProductProps> = ({ listProducts }) => {
  // eslint-disable-next-line no-console
  console.log('Array de Productos: ', listProducts)

  return (
    <div>
      <p>Este es litado de productos: </p>
      {listProducts.map((product: Product, index: number) => {
        return (
          <div key={index}>
            <img src={product.imageUrls.at1x} alt={product.name} />
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>Cant: {product.quantity} und</p>
            <p>${product.price * product.quantity}</p>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default ProductGroup
