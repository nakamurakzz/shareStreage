import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

const selectArray = [
  {id:1,value:"content1"},
  {id:2,value:"content2"}
]

const SelectedItems = selectArray.map(item=>{
  return (
    <option value={item.value} key={item.id}>
      {item.value}
    </option>
  )
})

const Select: NextPage= () =>{
  const [selectedValue, setSelectedValue] = useState(undefined)
  const [selectedValue2, setSelectedValue2] = useState(undefined)

  const changeSelectedValue = (e:any)=>{
    setSelectedValue(e.target.value)
  }

  const changeSelectedValue2 = (e:any)=>{
    setSelectedValue2(e.target.value)
  }

  // useEffectで第二引数を省略した場合は画面描写が行われる度に第一引数で指定した関数が呼び出される
  // 無限ループに陥りやすい。実際には第二引数を省略することは少ない
  const callbackFunc = () => console.log("描写の度に実行")
  useEffect(callbackFunc)

  // useEffectで第二引数に空配列を指定した場合は初回レンダリング時のみ実行される
  const callback2 = () => console.log("初回のみ実行")
  useEffect(callback2,[])

  // useEffectで第二引数に空配列を指定した場合は初回レンダリング時のみ実行される
  const callback3 = () => {
    console.log("titleが変更された")
    document.title=selectedValue??""
  }
  useEffect(callback3,[selectedValue])

  // 副作用hookが返す関数をクリーンアップ関数と呼ぶ
  const callback4 = () => {
    console.log("これは副作用関数")
    return ()=> alert("これはクリーンアップ関数")
  }

  useEffect(callback4,[])

  return (
    <div>
      <select value={selectedValue} onChange={changeSelectedValue} >
        {SelectedItems}
      </select>
      <select value={selectedValue2} onChange={changeSelectedValue2} >
        {SelectedItems}
      </select>
    </div>
  )
}

export default Select