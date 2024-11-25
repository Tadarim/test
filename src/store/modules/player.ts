import { getSongDetail, getSongLyric } from '@/service/module/player'
import { ILyric, parseLyric } from '@/utils/parse'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'

interface IPlayerState {
  currentSong: Song
  lyrics: ILyric[]
  lyricIndex: number
  songPlayList: Song[]
  songPlayIndex: number
  songPlayMode: number
}

interface IThunkState {
  state: RootState
}

export interface Root {
  songs: Song[]
  privileges: Privilege[]
  code: number
}

export interface Song {
  name: string
  id: number
  pst: number
  t: number
  ar: Ar[]
  alia: any[]
  pop: number
  st: number
  rt: string
  fee: number
  v: number
  crbt: any
  cf: string
  al: Al
  dt: number
  h: H
  m: M
  l: L
  sq: Sq
  hr: any
  a: any
  cd: string
  no: number
  rtUrl: any
  ftype: number
  rtUrls: any[]
  djId: number
  copyright: number
  s_id: number
  mark: number
  originCoverType: number
  originSongSimpleData: any
  tagPicList: any
  resourceState: boolean
  version: number
  songJumpInfo: any
  entertainmentTags: any
  awardTags: any
  single: number
  noCopyrightRcmd: any
  mv: number
  rtype: number
  rurl: any
  mst: number
  cp: number
  publishTime: number
}

export interface Ar {
  id: number
  name: string
  tns: any[]
  alias: any[]
}

export interface Al {
  id: number
  name: string
  picUrl: string
  tns: any[]
  pic_str: string
  pic: number
}

export interface H {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface M {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface L {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface Sq {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface Privilege {
  id: number
  fee: number
  payed: number
  st: number
  pl: number
  dl: number
  sp: number
  cp: number
  subp: number
  cs: boolean
  maxbr: number
  fl: number
  toast: boolean
  flag: number
  preSell: boolean
  playMaxbr: number
  downloadMaxbr: number
  maxBrLevel: string
  playMaxBrLevel: string
  downloadMaxBrLevel: string
  plLevel: string
  dlLevel: string
  flLevel: string
  rscl: any
  freeTrialPrivilege: FreeTrialPrivilege
  rightSource: number
  chargeInfoList: ChargeInfoList[]
  code: number
  message: any
}

export interface FreeTrialPrivilege {
  resConsumable: boolean
  userConsumable: boolean
  listenType: number
  cannotListenReason: number
  playReason: any
  freeLimitTagType: any
}

export interface ChargeInfoList {
  rate: number
  chargeUrl: any
  chargeMessage: any
  chargeType: number
}

const initialState: IPlayerState = {
  currentSong: {
    name: '温柔',
    id: 386538,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 13193,
        name: '五月天',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: '600902000000534560',
    fee: 1,
    v: 80,
    crbt: null,
    cf: '',
    al: {
      id: 38285,
      name: '我们是五月天',
      picUrl:
        'https://p1.music.126.net/XlMYABTsvXGxOn0h9F61VQ==/109951168750902183.jpg',
      tns: [],
      pic_str: '109951168750902183',
      pic: 109951168750902180
    },
    dt: 269800,
    h: {
      br: 320000,
      fid: 0,
      size: 10794885,
      vd: -63966,
      sr: 44100
    },
    m: {
      br: 192000,
      fid: 0,
      size: 6476948,
      vd: -61383,
      sr: 44100
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4317980,
      vd: -59695,
      sr: 44100
    },
    sq: {
      br: 1053726,
      fid: 0,
      size: 35536923,
      vd: -64088,
      sr: 44100
    },
    hr: null,
    a: null,
    cd: '1',
    no: 2,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 17179877888,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 80,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    mv: 10929721,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 684010,
    publishTime: 1049126400000
  },
  lyrics: [],
  lyricIndex: -1,
  songPlayList: [
    {
      name: '温柔',
      id: 386538,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 13193,
          name: '五月天',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '600902000000534560',
      fee: 1,
      v: 80,
      crbt: null,
      cf: '',
      al: {
        id: 38285,
        name: '我们是五月天',
        picUrl:
          'https://p1.music.126.net/XlMYABTsvXGxOn0h9F61VQ==/109951168750902183.jpg',
        tns: [],
        pic_str: '109951168750902183',
        pic: 109951168750902180
      },
      dt: 269800,
      h: {
        br: 320000,
        fid: 0,
        size: 10794885,
        vd: -63966,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6476948,
        vd: -61383,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4317980,
        vd: -59695,
        sr: 44100
      },
      sq: {
        br: 1053726,
        fid: 0,
        size: 35536923,
        vd: -64088,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '1',
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17179877888,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 80,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 10929721,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 684010,
      publishTime: 1049126400000
    },
    {
      name: '夜奔',
      id: 2167123508,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 28867854,
          name: '果汁er',
          tns: [],
          alias: []
        },
        {
          id: 0,
          name: '四六時Shirokuji',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 70,
      st: 0,
      rt: '',
      fee: 0,
      v: 4,
      crbt: null,
      cf: '',
      al: {
        id: 199522362,
        name: '夜奔',
        picUrl:
          'https://p1.music.126.net/toNdF3H7zHlrnJOpRL9rmA==/109951169693483770.jpg',
        tns: [],
        pic_str: '109951169693483770',
        pic: 109951169693483780
      },
      dt: 220392,
      h: {
        br: 320000,
        fid: 0,
        size: 8817645,
        vd: -60040,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5290605,
        vd: -57454,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3527085,
        vd: -55830,
        sr: 48000
      },
      sq: {
        br: 0,
        fid: 0,
        size: 0,
        vd: 0,
        sr: 0
      },
      hr: null,
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 128,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 2135118821,
        name: '夜奔',
        artists: [
          {
            id: 12308369,
            name: '黄诗扶'
          }
        ],
        albumMeta: {
          id: 250221188,
          name: '说书·今日无事'
        }
      },
      tagPicList: null,
      resourceState: true,
      version: 4,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      mst: 9,
      cp: 0,
      rtype: 0,
      rurl: null,
      publishTime: 0
    }
  ],
  songPlayIndex: -1,
  songPlayMode: 0
}

export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  IThunkState
>('currentSong', async (id, { dispatch, getState }) => {
  const songPlayList = getState().player.songPlayList
  const findIndex = songPlayList.findIndex((item) => item.id === id)

  if (findIndex === -1) {
    // 获取歌曲信息
    const result = await getSongDetail(id)
    if (!result.songs.length) return
    const song = result.songs[0]

    const newSongPlayList = [...songPlayList, song]
    dispatch(changeSongPlayList(newSongPlayList))
    dispatch(changeSongPlayIndex(newSongPlayList.length - 1))
    dispatch(changeCurrentSongAction(song))
  } else {
    dispatch(changeCurrentSongAction(songPlayList[findIndex]))
    dispatch(changeLyricsIndexAction(findIndex))
  }

  // 获取歌词
  const lyric = await getSongLyric(id)
  dispatch(changeLyricsAction(parseLyric(lyric?.lrc?.lyric)))
})

export const changeSongAction = createAsyncThunk<void, boolean, IThunkState>(
  'changeSong',
  async (isNext, { dispatch, getState }) => {
    const { songPlayList, songPlayIndex, songPlayMode } = getState().player

    let newIndex = songPlayIndex
    if (songPlayMode === 1) {
      newIndex = Math.floor(Math.random() * songPlayList.length)
    } else {
      newIndex = isNext ? newIndex + 1 : newIndex - 1
    }

    const lyric = await getSongLyric(songPlayList[newIndex].id)
    dispatch(changeLyricsAction(parseLyric(lyric?.lrc?.lyric)))
    dispatch(changeCurrentSongAction(songPlayList[newIndex]))
    dispatch(changeSongPlayIndex(newIndex))
  }
)

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricsIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changeSongPlayList(state, { payload }) {
      state.songPlayList = payload
    },
    changeSongPlayIndex(state, { payload }) {
      state.songPlayIndex = payload
    },
    changeSongPlayMode(state, { payload }) {
      state.songPlayMode = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricsIndexAction,
  changeSongPlayIndex,
  changeSongPlayList,
  changeSongPlayMode
} = playerSlice.actions
export default playerSlice.reducer
