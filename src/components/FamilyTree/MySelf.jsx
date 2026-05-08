import React from 'react'
import Special from './Special'

export default function MySelf({asset}) {
  return (
    <div>
        <h3>Myself</h3>
        <section className='flex'>
            <Special asset={asset} name={"Me"}></Special>
        </section>
    </div>
  )
}
