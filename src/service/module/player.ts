import myRequest from "..";

export function getSongDetail(ids: number) {
  return myRequest.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getSongLyric(id: number) {
  return myRequest.get({
    url: '/lyric',
    params: {
      id
    }
  })
}

export function getSongPlayUrl(id: number) {
  return myRequest.get({
    url: "/song/url",
    params: {
      id
    }
  })
}