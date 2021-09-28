import type { NextPage } from 'next'
import { useState } from 'react'

type Props = {
  count:number
}

const CounterText: React.FC<Props>=(props)=>{
  return(
    <div>count：{props.count}</div>
  )
}

const Counter =()=>{
  const [clickCount,setClickCount]=useState(0)

  const countUp = ()=>{
    setClickCount(clickCount + 1)
  }

  const countDown = ()=>{
    setClickCount(clickCount - 1)
  }

  const reset = () =>{
    setClickCount(0)
  }
  return(
    <>
      <CounterText count={clickCount}/>
      <button onClick={countUp}>count up</button>
      <button onClick={countDown}>count down</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

const HomePage: NextPage = () => {

  return (
    <>
      <div style={{margin:20}}>
        <Counter />
        <Counter />
        <Counter />
      </div>
    </>
    
  )
}

export default HomePage

