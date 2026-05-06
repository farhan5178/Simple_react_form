import React from 'react'

export default function () {
    const handlFormAction=(FormData)=>{
        console.log(FormData.get("name"))
        console.log(FormData.get("email"))
    } 
  return (
    <div>
        <form action={handlFormAction}>
            <input type="text" placeholder='Name' name='name' />
            <br />
            <input type="email" placeholder='Email' name='email'/>
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
