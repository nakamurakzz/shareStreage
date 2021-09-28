import type { NextPage } from 'next'
import { useState } from 'react'

const HomePage: NextPage = () => {
  const [clickCount,setClickCount]=useState(0)

  const countUp = ()=>{
    const count = clickCount + 1
    setClickCount(count)
  }

  const countDown = ()=>{
    const count = clickCount - 1
    setClickCount(count)
  }

  return (
    <>
      <div style={{margin:20}}>
        <button onClick={countUp}>count up</button>
        <button onClick={countDown}>count down</button>
        <div>count：{clickCount}</div>
      </div>
    </>
    
  )
}

export default HomePage

