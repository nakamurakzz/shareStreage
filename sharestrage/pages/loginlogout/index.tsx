import type { NextPage } from 'next'
import { useState } from 'react'

type Props = {
  changeLoggedInState: () => void
}

const LogoutButton: React.FC<Props>=(props)=>{
  return <button onClick={props.changeLoggedInState}>ログアウト</button>
}

const LogInButton: React.FC<Props>=(props)=>{
  return <button onClick={props.changeLoggedInState}>ログイン</button>
}


const LoginControl =()=>{
  // 親Componentでログインのstateを管理
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const changeLoggedInState = ()=>{
    setIsLoggedIn(!isLoggedIn)
  }

  // 子のComponentにPropsとしてstateを変更する関数を渡す
  if(isLoggedIn) return <LogoutButton changeLoggedInState={changeLoggedInState}/>

  return <LogInButton changeLoggedInState={changeLoggedInState}/>
}

const LoginLogout: NextPage= () =>{
  return (
    <div>
      <LoginControl />
    </div>
  )
}

export default LoginLogout