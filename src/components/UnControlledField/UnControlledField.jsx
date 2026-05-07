import React, { useRef } from "react";

export default function UnControlledField() {
    const emailRef=useRef('');
    const passref=useRef('');
    const handleSubmit=e=>{
        e.preventDefault();
        console.log(emailRef.current.value)
        console.log(passref.current.value)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
       <input ref={emailRef} type="email" /> <br />
       <input ref={passref} type="password" /><br />
       <input type="submit" value="submit" />
      </form>
    </div>
  );
}
