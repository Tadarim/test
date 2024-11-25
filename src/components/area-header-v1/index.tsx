import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { HeaderV1Wrapper } from './style'

interface IProps {
  title: string
  keywords?: string[]
  morePath?: string
  moreText?: string
  children?: ReactNode
}

const AreaHeaderV1: React.FC<IProps> = (props) => {
  const { title, keywords = [], morePath = '/', moreText = '更多' } = props

  return (
    <HeaderV1Wrapper className="sprite_02">
      <div className="left">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="keywords">
          {keywords.map((item: string) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link className="more" to={morePath}>
          {moreText}
        </Link>
        <i className="sprite_02 icon"></i>
      </div>
    </HeaderV1Wrapper>
  )
}

export default AreaHeaderV1
