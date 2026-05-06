        {/* jokhon khub beshi interactivity dorkar tokhon ei component use korbo */}

import React from 'react'

export default function ControlledFild() {
  return (
    <div>
        <form >
            <input type="email" name='email' id='' placeholder='Email' required />
            <br />
            <input type="password"  required/>
            <br />
            <input type="submit"  value="Submit"/>
        </form>
    </div>
  )
}
