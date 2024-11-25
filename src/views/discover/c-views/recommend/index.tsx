import React, { ReactNode, useEffect } from 'react'

import {
  fetchBannerDataAction,
  fetchHotRecommendDataAction,
  fetchNewAlbumDataAction,
  fetchRankingsDataAction,
  fetchSettleArtistsDataAction
} from '@/store/modules/recommend'
import { useAppDispatch } from '@/store'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'
import UserLogin from './c-cpns/user-login'
import SettleArtist from './c-cpns/settle-artist'
import HotAnchor from './c-cpns/hot-anchor'

interface IProps {
  children?: ReactNode
}

const Recommend: React.FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendDataAction())
    dispatch(fetchNewAlbumDataAction())
    dispatch(fetchRankingsDataAction())
    dispatch(fetchSettleArtistsDataAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">
          <UserLogin />
          <SettleArtist />
          <HotAnchor />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default Recommend
