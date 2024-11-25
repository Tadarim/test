import { ReactNode } from 'react'
import { HeaderV2Wrapper } from './style'

interface IProps {
  children?: ReactNode
  title: string
  morePath?: string
  moreText?: string
}

const AreaHeaderV2: React.FC<IProps> = ({ title, morePath, moreText }) => {
  return (
    <HeaderV2Wrapper>
      <h3 className="title">{title}</h3>
      {morePath && moreText && <a href={morePath}>{moreText}</a>}
    </HeaderV2Wrapper>
  )
}

export default AreaHeaderV2
