import React, { useState } from 'react'

export default function ProductForm({handleAddProduct}) {
    const [error,setError]=useState('')
    const handleProductSubmit=e=>{
        e.preventDefault();
        
        const productName=e.target.name.value;
        const productPrice=e.target.price.value;
        const productQuantity=e.target.quantity.value;
        console.log(productName,productPrice,productQuantity)
        const newProduct ={
            productName,
            productPrice,
            productQuantity
        }
        // console.log(newProduct)
       
                    handleAddProduct(newProduct);
      
        // validation
        if(productName.length===0){
 setError("Please provie a product name");
 return;
        }else if(productPrice.length===0){
            setError('please provie a price ')
            return;
        }else if(productPrice<0 ){
            setError("price can not be negative");
            return;
        } else{
            setError('');
        }
    }
  return (
    <div>
        <h3>Add A product</h3>
        <form onSubmit={handleProductSubmit} >
            <input type="text" name='name' placeholder='ProductName' /> <br />
            <input type="text" name='price' placeholder='Price' /> <br />
            <input type="text" name='quantity' placeholder='Quantity' /> <br />
            <input type="submit" value="Submit" />
        </form>
        <p style={{color:"red"}}><small>{error}</small></p>
    </div>
  )
}
