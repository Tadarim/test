import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { NavWrapper } from './style'
import { discoverMenu } from '@/assets/data/local_data'

interface IProps {
  children?: ReactNode
}

const NavBar: React.FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <div className="item" key={item.link}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavWrapper>
  )
}

export default memo(NavBar)
