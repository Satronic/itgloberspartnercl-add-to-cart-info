/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import React from 'react'

interface Totalizers {
  id: string
  name: string
  value: number
}

type ListTotalizersProps = {
  listTotalizers: Totalizers[]
}

const Totalizers: React.FC<ListTotalizersProps> = ({ listTotalizers }) => {
  const totalItems = listTotalizers.length
  const [price, ,] = listTotalizers
  const totalPrice = price?.value

  return (
    <div>
      <p>Tienes {totalItems} items en tu compra</p>
      <p>Total: {totalPrice}</p>
    </div>
  )
}

export default Totalizers
