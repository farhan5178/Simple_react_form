import React from 'react'

export default function () {

    const handleEvent=(event)=>{
        event.preventDefault();
        console.log(event.target.name.value)
        console.log(event.target.email.value)
    }

  return (
    <div>
        <form onSubmit={handleEvent}>
            <input type="text" placeholder='Your Name' name='name' />
            <br />
            <input type="text" placeholder='Your Mail ' name='email' />
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
