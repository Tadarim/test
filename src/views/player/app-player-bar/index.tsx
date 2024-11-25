import { NavLink } from 'react-router-dom'
import { BarControl, BarOperator, BarPlayerInfo, BarWrapper } from './style'
import { message, Slider } from 'antd'
import { useAppDispatch, useAppSelector } from '@/store'
import { formatImageSize, formatTime } from '@/utils/format'
import { shallowEqual } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import {
  changeLyricsIndexAction,
  changeSongAction,
  changeSongPlayMode
} from '@/store/modules/player'
import { getSongPlayUrl } from '@/service/module/player'

const AppPlayerBar: React.FC = () => {
  const { currentSong, lyrics, lyricIndex, songPlayMode } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex,
      songPlayMode: state.player.songPlayMode
    }),
    shallowEqual
  )

  const [isPlaying, setIsPlaying] = useState(false)
  const [isSliding, setIsSliding] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  const dispatch = useAppDispatch()

  useEffect(() => {
    getSongPlayUrl(currentSong?.id).then((res) => {
      if (res?.data?.length) {
        audioRef.current!.src = res?.data[0]?.url
        setIsPlaying(true)
      }
    })

    if (isPlaying) {
      audioRef.current?.play().catch(() => setIsPlaying(false))
    }

    setDuration(currentSong?.dt)
  }, [currentSong])

  function playBtnClickHandler() {
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))

    setIsPlaying(!isPlaying)
  }

  function changeBtnClickHandler(isNext = true) {
    dispatch(changeSongAction(isNext))
  }

  function playModeChangeHandler() {
    dispatch(changeSongPlayMode((songPlayMode + 1) % 3))
  }

  function timeUpdateHandler() {
    // 获取当前播放时间
    const currentTime = audioRef.current!.currentTime

    // 计算歌曲进度
    if (!isSliding) {
      const progress = ((currentTime * 1000) / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime * 1000)
    }

    let index = lyrics.length - 1
    //匹配歌词
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i]
      if (lyric.time > currentTime * 1000) {
        index = i - 1
        break
      }
    }

    if (index === lyricIndex || index === -1) return
    dispatch(changeLyricsIndexAction(index))

    message.open({
      key: 'lyric',
      content: lyrics[index]?.text,
      duration: 0
    })
  }

  function timeEndedHandler() {
    if (songPlayMode === 2) {
      audioRef.current!.currentTime = 0
      audioRef.current?.play()
    } else {
      changeBtnClickHandler()
    }
  }

  function sliderChangingHandler(value: number) {
    // 设置目前为拖拽状态
    setIsSliding(true)

    // 设置progress
    setProgress(value)

    // 获取value对应位置的时间 并改变显示的当前时间
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
  }

  function sliderChangeHandler(value: number) {
    // 获取点击位置的时间
    const currentTime = (value / 100) * duration

    // 设置当前播放的时间
    audioRef.current!.currentTime = currentTime / 1000

    // currentTime/progress
    setCurrentTime(currentTime)
    setProgress(value)
    setIsSliding(false)
  }

  return (
    <BarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={isPlaying}>
          <button
            className="btn sprite_playbar prev"
            onClick={() => changeBtnClickHandler(false)}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={playBtnClickHandler}
          ></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => changeBtnClickHandler()}
          ></button>
        </BarControl>
        <BarPlayerInfo>
          <NavLink to={'/discover/player'}>
            <img src={formatImageSize(currentSong?.al?.picUrl, 34)} alt="" />
          </NavLink>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <span className="singer-name">
                {currentSong?.ar?.length && currentSong?.ar[0]?.name}
              </span>
            </div>
            <div className="progress">
              <div className="time">
                <Slider
                  step={0.5}
                  value={progress}
                  tooltip={{ formatter: null }}
                  onChange={sliderChangingHandler}
                  onChangeComplete={sliderChangeHandler}
                ></Slider>
                <div className="current">{formatTime(currentTime)}</div>
                <div className="divider">/</div>
                <div className="duration">{formatTime(duration)}</div>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playMode={songPlayMode}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right">
            <button className="btn sprite_playbar volume"></button>
            <button
              className="btn sprite_playbar loop"
              onClick={playModeChangeHandler}
            ></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
        onEnded={timeEndedHandler}
      ></audio>
    </BarWrapper>
  )
}

export default AppPlayerBar
