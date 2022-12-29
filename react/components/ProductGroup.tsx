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

interface Classes {
  container: string
  containerItem: string
  containerItemLeft: string
  containerItemRight: string
}

type ListProductProps = {
  listProducts: Product[]
  classes: Classes
}

const ProductGroup: React.FC<ListProductProps> = ({
  listProducts,
  classes,
}) => {
  // eslint-disable-next-line no-console
  console.log('Array de Productos: ', listProducts)

  return (
    <div className={classes.container}>
      <p>Este es litado de productos: </p>
      {listProducts.map((product: Product, index: number) => {
        return (
          <div key={index} className={classes.containerItem}>
            <div className={classes.containerItemLeft}>
              <img src={product.imageUrls.at1x} alt={product.name} />
            </div>
            <div className={classes.containerItemRight}>
              <p className="ma1 f6">{product.id}</p>
              <p className="ma1 f6">{product.name}</p>
              <p className="ma1 f6">Cant: {product.quantity} und</p>
              <p className="ma1 f6">${product.price * product.quantity}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductGroup
