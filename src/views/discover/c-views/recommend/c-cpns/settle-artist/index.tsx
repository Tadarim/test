import React, { ReactNode } from 'react'
import { ArtistWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { useAppSelector } from '@/store'
import { formatImageSize } from '@/utils/format'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const SettleArtist: React.FC<IProps> = () => {
  const { settleArtists } = useAppSelector(
    (state) => ({
      settleArtists: state.recommend.settleArtists
    }),
    shallowEqual
  )

  return (
    <ArtistWrapper>
      <AreaHeaderV2
        title="入驻歌手"
        moreText="查看全部 &gt;"
        morePath="/discover/artist/signed"
      />

      <div className="artist-list">
        {settleArtists.map((item) => (
          <a href="/discover/artist/signed" className="item" key={item.id}>
            <img src={formatImageSize(item.picUrl, 62)} alt="" />
            <div className="info">
              <div className="name">{item.name}</div>
              <div className="desc">{item.alias.join(' ')}</div>
            </div>
          </a>
        ))}
      </div>
      <div className="apply-for">
        <a href="https://music.163.com/st/musician" target="_blank">
          申请成为网易云音乐人
        </a>
      </div>
    </ArtistWrapper>
  )
}

export default SettleArtist
