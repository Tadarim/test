import myRequest from '@/service'

export function getBanners() {
  return myRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit: number = 30) {
  return myRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum() {
  return myRequest.get({
    url: '/album/newest'
  })
}

export function getPlaylistDetail(id: number) {
  return myRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function getSettleArtists(limit: number = 5) {
  return myRequest.get({
    url: '/artist/list',
    params: {
      limit
    }
  })
}
