import React, { use } from 'react'
import Cousine from './Cousine'
import { MoneyContext } from './FamilyTree'

export default function Aunt ({asset}) {
  const [money,setMoney] =use(MoneyContext);
  const handleAddMoney=()=>{
    setMoney(money+5000)
  }
  return (
    <div>
      <h3>Aunt</h3>
      <section className='flex'>
        <Cousine asset={asset} name={"farhan"}></Cousine>
        <Cousine name={"Sadik"}></Cousine>
        <button onClick={handleAddMoney}> Add 5000 Tk</button>
      </section>
    </div>
  )
}
