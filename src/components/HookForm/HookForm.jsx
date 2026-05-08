import React from 'react'
import useInputField from '../../hooks/UseInputField';

export default function HookForm() {
  const [name,nameOnChange]=useInputField("")
  const [email,emailOnChange]=useInputField("")
  const [password,passwordOnchange]=useInputField("")
  const handleSubmit=e=>{
    e.preventDefault();
    console.log(name,email,password)
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input defaultValue={name} onChange={nameOnChange} type="name" placeholder='Name'/><br />
            <input defaultValue={email} onChange={emailOnChange} type="email" placeholder='Email'/><br />
            <input defaultValue={password}  onChange={passwordOnchange}type="password" placeholder='Password'/><br />
<input type="submit" value="Submit" />
</form>
    </div>
  )
}
