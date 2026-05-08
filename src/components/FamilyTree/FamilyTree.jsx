import React, { createContext, useState } from 'react'
import GrandPa from './GrandPa'
import './FamilyTree.css'
 export  const AssetContext =createContext('')
 export const MoneyContext=createContext(0)
export default function FamilyTree() {

  const [money,setMoney]=useState(0)

  const asset="diamond";
  const newAsset="bike"
  return (
    <div className='family-tree'>
        <h1>Family Tree</h1>
        <h4> Total Familly Money :{money}</h4>
    <MoneyContext value={[money,setMoney]} >
       <AssetContext.Provider value={newAsset}>
          <GrandPa asset={newAsset}/>
 </AssetContext.Provider>
    </MoneyContext>
    </div>
  )
}
// 1.create a context useing createContext with a default value makeb sure you export the context to be used in other file  
