import React from 'react'

export default function ProductTable({products}) {
  return (
    <div>
        <h3>products:
      {products.length}
        </h3>
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
               {
                products.map((product,index)=>
                     <tr key={index}>
                    <td>{index+1}</td>
                    <td>{product.productName}</td>
                    <td>{product.productPrice}</td>
                    <td>{product.productQuantity}</td>
                    <td><button>delete</button></td>
                </tr>
                )
               }
            </tbody>
            </table>
    </div>
  )
}
