import { ReactNode } from 'react'
import { AnchorWrapper } from './style'
import { hotRadios } from '@/assets/data/local_data'

interface IProps {
  children?: ReactNode
}

const HotAnchor: React.FC<IProps> = () => {
  return (
    <AnchorWrapper>
      <div className="anchors-list">
        {hotRadios.map((item) => (
          <div className="item" key={item.picUrl}>
            <a className="image">
              <img src={item.picUrl} alt="" />
            </a>
            <div className="info">
              <div className="name">{item.name}</div>
              <div className="position">{item.position}</div>
            </div>
          </div>
        ))}
      </div>
    </AnchorWrapper>
  )
}

export default HotAnchor
