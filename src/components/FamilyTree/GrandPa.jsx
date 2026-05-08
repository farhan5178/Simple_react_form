import React from 'react'
import Dad from './Dad'
import Unkle from './Unkle'
import Aunt from './Aunt'

export default function  GrandPa({asset}) {
  return (
    <div>
        <h3>Grandpa</h3>
        <section className='flex'>
            <Dad asset={asset}/>
            <Unkle></Unkle>
            <Aunt asset={asset}></Aunt>
        </section>
    </div>
  )
}
