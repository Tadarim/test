import { useAppSelector } from '@/store'
import React, {
  ReactNode,
  useState,
  useCallback,
  useRef,
  ElementRef
} from 'react'
import { shallowEqual } from 'react-redux'
import { Carousel } from 'antd'
import classNames from 'classnames'

import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const TopBanner: React.FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const divRef = useRef(null)

  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  const beforeChangeHandler = useCallback((from: number, to: number) => {
    setTimeout(() => {
      setCurrentIndex(to)
    }, 0)
  }, [])

  //获取背景图片
  let bgImage = banners[currentIndex]?.imageUrl
  if (banners.length > 0 && banners[currentIndex]) {
    bgImage = bgImage + '?imageView&blur=40x20'
  }

  function afterChangeHandler(current: number) {
    setCurrentIndex(current)
  }

  function prevClickHandler() {
    bannerRef.current?.prev()
  }

  function nextClickHandler() {
    bannerRef.current?.next()
  }

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2" ref={divRef}>
        <BannerLeft>
          <Carousel
            autoplay
            dots={false}
            effect="fade"
            ref={bannerRef}
            afterChange={afterChangeHandler}
            beforeChange={beforeChangeHandler}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: index === currentIndex
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={prevClickHandler}></button>
          <button className="btn right" onClick={nextClickHandler}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default TopBanner
