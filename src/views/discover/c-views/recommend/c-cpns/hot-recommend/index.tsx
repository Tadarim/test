import React, { ReactNode } from 'react'

import { RecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import SongMenuItem from '@/components/song-menu-item'

interface IProps {
  children?: ReactNode
}

const HotRecommend: React.FC<IProps> = () => {
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends
    }),
    shallowEqual
  )

  return (
    <RecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        morePath="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommends.map((item) => (
          <SongMenuItem key={item.id} itemData={item} />
        ))}
      </div>
    </RecommendWrapper>
  )
}

export default HotRecommend
