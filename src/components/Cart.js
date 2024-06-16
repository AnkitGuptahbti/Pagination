import React from 'react'

const Cart = ({item}) => {
  return (
    <div>
      <img src={item.images[0]} alt={item.title} />
      <span>{item.title}</span>
    </div>
  );
}

export default Cart