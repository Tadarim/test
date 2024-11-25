import React, { ReactNode } from 'react'
import { RankingItemWrapper } from './style'
import { ITopRanking } from '@/store/modules/recommend'
import { formatImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: ITopRanking
}

const TopRankingItem: React.FC<IProps> = ({ itemData }) => {
  return (
    <RankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={formatImageSize(itemData?.coverImgUrl, 80)} alt="" />
          <a href="" className="sprite_cover"></a>
        </div>
        <div className="info">
          <div className="name">{itemData?.name}</div>
          <div>
            <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {itemData?.tracks &&
          itemData?.tracks.slice(0, 10).map((item, index) => {
            return (
              <div className="item" key={item.id}>
                <div className="index">{index + 1}</div>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="operate">
                    <button className="btn sprite_02 play"></button>
                    <button className="btn sprite_icon2 add"></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <div className="footer">
        <a href="/discover/ranking">查看全部 &gt;</a>
      </div>
    </RankingItemWrapper>
  )
}

export default TopRankingItem
