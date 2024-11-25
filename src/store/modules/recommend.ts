import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail,
  getSettleArtists
} from '@/service/module/recommend'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface IBanner {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  monitorImpress: any
  monitorClick: any
  monitorType: any
  monitorImpressList: any
  monitorClickList: any
  monitorBlackList: any
  extMonitor: any
  extMonitorInfo: any
  adSource: any
  adLocation: any
  adDispatchJson: any
  encodeId: string
  program: any
  event: any
  video: any
  song: any
  scm: string
  bannerBizType: string
}

export interface IHotRecommends {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}

export interface INewAlbum {
  name: string
  id: number
  type: string
  size: number
  picId: number
  blurPicUrl: string
  companyId: number
  pic: number
  picUrl: string
  publishTime: number
  description: string
  tags: string
  company: string
  briefDesc: string
  artist: Artist
  songs: any
  alias: any[]
  status: number
  copyrightId: number
  commentThreadId: string
  artists: Artists[]
  paid: boolean
  onSale: boolean
  picId_str: string
}

export interface ITopRanking {
  id: number
  name: string
  coverImgId: number
  coverImgUrl: string
  coverImgId_str: string
  adType: number
  userId: number
  createTime: number
  status: number
  opRecommend: boolean
  highQuality: boolean
  newImported: boolean
  updateTime: number
  trackCount: number
  specialType: number
  privacy: number
  trackUpdateTime: number
  commentThreadId: string
  playCount: number
  trackNumberUpdateTime: number
  subscribedCount: number
  cloudTrackCount: number
  ordered: boolean
  description: string
  tags: any[]
  updateFrequency: any
  backgroundCoverId: number
  backgroundCoverUrl: any
  titleImage: number
  titleImageUrl: any
  detailPageTitle: any
  englishTitle: any
  officialPlaylistType: any
  copied: boolean
  relateResType: any
  coverStatus: number
  subscribers: any[]
  subscribed: boolean
  creator: any
  tracks: any[]
  videoIds: any
  videos: any
  trackIds: any[]
  bannedTrackIds: any
  mvResourceInfos: any
  shareCount: number
  commentCount: number
  remixVideo: any
  newDetailPageRemixVideo: any
  sharedUsers: any
  historySharedUsers: any
  gradeStatus: string
  score: any
  algTags: any
  distributeTags: any[]
  trialMode: number
  displayTags: any
  displayUserInfoAsTagOnly: boolean
  playlistType: string
  bizExtInfo: any
  ToplistType: string
}

interface Artist {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: any[]
  trans: string
  musicSize: number
  topicPerson: number
  picId_str: string
  transNames: string[]
  img1v1Id_str: string
}

interface Artists {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: any[]
  trans: string
  musicSize: number
  topicPerson: number
  img1v1Id_str: string
}

export interface IArtist {
  albumSize: number
  alias: string[]
  briefDesc: string
  fansCount: number
  followed: boolean
  id: number
  img1v1Id: number
  img1v1Id_str: string
  img1v1Url: string
  musicSize: number
  name: string
  picId: number
  picId_str: string
  picUrl: string
  topicPerson: number
  trans: string
}

interface IRecommendState {
  banners: IBanner[]
  hotRecommends: IHotRecommends[]
  newAlbums: INewAlbum[]
  rankings: ITopRanking[]
  settleArtists: IArtist[]
}

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (_, { dispatch }) => {
    const result = await getBanners()
    dispatch(changeBannersAction(result.banners))
  }
)

export const fetchHotRecommendDataAction = createAsyncThunk(
  'hotRecommend',
  async (_, { dispatch }) => {
    const result = await getHotRecommend(8)
    dispatch(changeHotRecommendAction(result.result))
  }
)

export const fetchNewAlbumDataAction = createAsyncThunk(
  'newAlbum',
  async (_, { dispatch }) => {
    const result = await getNewAlbum()
    dispatch(changeNewAlbumAction(result.albums))
  }
)

const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingsDataAction = createAsyncThunk(
  'ranking',
  async (_, { dispatch }) => {
    // 获取榜单的数据
    // 1.每一个请求单独处理
    // for (const id of rankingIds) {
    //   getPlaylistDetail(id).then((res) => {
    //     switch (id) {
    //       case 19723756:
    //         console.log('飙升榜的数据', res)
    //         break
    //       case 3779629:
    //         console.log('新歌榜的数据', res)
    //         break
    //       case 2884035:
    //         console.log('原创榜的数据', res)
    //         break
    //     }
    //   })
    // }

    // 2.将三个结果都拿到, 统一放到一个数组中管理\
    // 保障一: 获取到所有的结果后, 进行dispatch操作
    // 保障二: 获取到的结果一定是有正确的顺序
    const promises: Promise<any>[] = []

    rankingIds.forEach((id: number) => {
      promises.push(getPlaylistDetail(id))
    })

    const result = await Promise.all(promises)
    const playlists = result
      .filter((item) => item.playlist)
      .map((item) => item.playlist)
    dispatch(changeRankingsAction(playlists))
  }
)

export const fetchSettleArtistsDataAction = createAsyncThunk(
  'settleArtist',
  async (_, { dispatch }) => {
    const result = await getSettleArtists()
    dispatch(changeSettleArtistsAction(result.artists))
  }
)

// 统一放到一起
// export const fetchRecommendDataAction = createAsyncThunk(
//   'fetchdata',
//   (_, { dispatch }) => {
//     getBanners().then((res) => {
//       dispatch(changeBannersAction(res.banners))
//     })
//     getHotRecommend(8).then((res) => {
//       dispatch(changeHotRecommendAction(res.result))
//     })
//     getNewAlbum().then((res) => {
//       dispatch(changeNewAlbumAction(res.albums))
//     })
//   }
// )

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  settleArtists: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },
    changeSettleArtistsAction(state, { payload }) {
      state.settleArtists = payload
    }
  }
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeRankingsAction,
  changeSettleArtistsAction
} = recommendSlice.actions
export default recommendSlice.reducer
