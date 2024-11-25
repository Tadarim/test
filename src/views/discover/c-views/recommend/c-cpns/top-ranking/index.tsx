import React, { ReactNode } from 'react'
import { RankingWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import TopRankingItem from '../top-ranking-item'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const TopRanking: React.FC<IProps> = () => {
  const { topRankings } = useAppSelector(
    (state) => ({
      topRankings: state.recommend.rankings
    }),
    shallowEqual
  )

  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" morePath="/toplist" />
      <div className="content">
        {topRankings.map((item) => (
          <TopRankingItem key={item?.coverImgUrl} itemData={item} />
        ))}
      </div>
    </RankingWrapper>
  )
}

export default TopRanking
