import React from 'react'
import Special from './Special'
import Friend from './Friend'

export default function Cousine({name,asset}) {
  return (
    <div>
        <h3>{name}</h3>
        {
            name==="Sadik" && <Special></Special>
        }
        {
            name==="farhan" && <Friend></Friend>
        }
    </div>
  )
}
