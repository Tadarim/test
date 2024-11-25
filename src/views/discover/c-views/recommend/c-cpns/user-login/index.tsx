import { ReactNode } from 'react'
import { LoginWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const UserLogin: React.FC<IProps> = () => {
  return <LoginWrapper className='sprite_02'>
    <p>登陆网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
    <a href="/login" className='sprite_02'>用户登录</a>
  </LoginWrapper>
}

export default UserLogin
