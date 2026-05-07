        {/* jokhon khub beshi interactivity dorkar tokhon ei component use korbo */}

import React, { useState } from 'react'

export default function ControlledFild() {
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const handleFormAction=(e)=>{
    console.log(e)

  }
  const handlePasswordOnChange= e=>{
    console.log(e.target.value);
    setPassword(e.target.value);
    if(password.length <6){
      setError("Length is not fullfild")
    }else{
setError("next step")    }
  }
  return (
    <div>
        <form  action={handleFormAction}>
            <input type="email" name='email' id='' placeholder='Email' required />
            <br />
            <input type="password" placeholder='password'onChange={handlePasswordOnChange} defaultValue={password}  required/>
            <br />
            <input type="submit"  value="Submit"/>
        </form>
        <p style={{color:"red"}}>
          <small>{error} </small>
        </p>
    </div>
  )
}
