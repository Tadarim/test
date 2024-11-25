export function formatCount(count: number): string | number {
  return count > 100000 ? Math.floor(count / 10000) + '万' : count
}

export function formatImageSize(
  imageUrl: string,
  width: number,
  height: number = width
) {
  return imageUrl + `?param=${width}y${height}`
}

export function formatTime(time: number) {
  const timeSeconds = time / 1000
  const minute = Math.floor(timeSeconds / 60)
  const second = Math.floor(timeSeconds % 60)

  const formatMinute = String(minute).padStart(2, '0')
  const formatSecond = String(second).padStart(2, '0')

  return `${formatMinute}:${formatSecond}`
}
