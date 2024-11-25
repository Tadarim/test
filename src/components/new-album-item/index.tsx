import { ReactNode } from 'react'
import { AlbumItemWrapper } from './style'
import { INewAlbum } from '@/store/modules/recommend'
import { formatImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: INewAlbum
}

const NewAlbumItem: React.FC<IProps> = ({ itemData }) => {
  return (
    <AlbumItemWrapper>
      <div className="top">
        <img src={formatImageSize(itemData.picUrl, 100)} alt="" />
        <a className="cover sprite_cover"></a>
      </div>
      <div className="bottom">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </AlbumItemWrapper>
  )
}

export default NewAlbumItem
