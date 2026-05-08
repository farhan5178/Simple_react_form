import React, { useContext } from 'react'
import {AssetContext} from "./FamilyTree"

export default function Special({name,asset}) {
    const newAsset = useContext(AssetContext)
    console.log(newAsset)
  return (
    
    <div>
        <h3>Spcial:{name}</h3>
        <p>Asset:{asset}</p>
        <p>NewAsset :{newAsset}</p>
    </div>
    
  )
}
