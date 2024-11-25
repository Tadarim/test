import React, { ElementRef, ReactNode, useRef } from 'react'
import { NewAlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { Carousel } from 'antd'
import { useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const NewAlbum: React.FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  const { newAlbums } = useAppSelector((state) => ({
    newAlbums: state.recommend.newAlbums
  }), shallowEqual)

  function prevClickHandler() {
    bannerRef.current?.prev()
  }

  function nextClickHandler() {
    bannerRef.current?.next()
  }

  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title="新碟上架" morePath="/discover/album" />
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={prevClickHandler}
        ></button>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={1500}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {newAlbums.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <NewAlbumItem key={album.id} itemData={album} />
                      // return <div key={album.id}>{album.name}</div>
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={nextClickHandler}
        ></button>
      </div>
    </NewAlbumWrapper>
  )
}

export default NewAlbum
