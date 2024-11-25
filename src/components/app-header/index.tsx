import React, { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import headerLinks from '@/assets/data/header_titles.json'

interface IProps {
  children?: ReactNode
}

function renderItem(item: any) {
  if (item.type === 'path') {
    return (
      <NavLink to={item.link}>
        {item.title}
        <i className="icon sprite_01"></i>
      </NavLink>
    )
  } else {
    return (
      <a href={item.link} target="_blank">
        {item.title}
      </a>
    )
  }
}

const AppHeader: React.FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="title-list">
            {headerLinks.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {renderItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <div className="search">
            <Input
              prefix={<SearchOutlined />}
              placeholder="音乐/视频/电台/用户"
            ></Input>
          </div>
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default AppHeader
