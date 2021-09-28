import type { NextPage } from 'next'
import { useState } from 'react'

const TextInput: NextPage= () =>{
  const [inputText, setInputText] = useState("")

  const changeText = (e:any)=>{
    setInputText(e.target.value)
  }

  return (
    <div>
      <input type="text" defaultValue="sss" onChange={changeText} />
      {inputText}
    </div>
  )
}

export default TextInput