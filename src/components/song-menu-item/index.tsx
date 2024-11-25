import React, { ReactNode } from 'react'
import { MenuItemWrapper } from './style'
import { IHotRecommends } from '@/store/modules/recommend'
import { formatCount, formatImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: IHotRecommends
}

const SongMenuItem: React.FC<IProps> = ({ itemData }) => {
  return (
    <MenuItemWrapper>
      <div className="top">
        <img src={formatImageSize(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              {formatCount(itemData.playCount)}
            </span>
            <i className="play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </MenuItemWrapper>
  )
}

export default SongMenuItem
