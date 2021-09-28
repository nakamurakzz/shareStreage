import type { NextPage } from 'next'
import { createContext, useContext } from 'react'

// Contextを使うとpropsによるバケツリレーを回避できる
// SampleContextObject：Contextオブジェクト
const SampleContextObject = createContext("")

// ConsumerComponent：Consumerコンポーネント
const ConsumerComponent = ()=>{
  // useContext でContext オブジェクトから値を取得できる
  // 取得する値はvalueで指定された値
  const messageText = useContext(SampleContextObject)

  console.log(messageText)

  return <p>{messageText}</p>
}

const message = "I love React."

const Appp: NextPage = ()=>{
  return (
    // SampleContextObject.Provider：Providerコンポーネント
    // 共有したい値をvalue属性で指定する
    // 共有できるコンテキストオブジェクトの値は一つだけ
    <>
      <SampleContextObject.Provider value={message}>
        {/* Provider内であればvalueで指定した値を参照できる*/}
        <ConsumerComponent />
      </SampleContextObject.Provider>

    </>    
  )
}

export default Appp