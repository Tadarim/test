export interface ILyric {
  time: number
  text: string
}

const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(lyric: string) {
  const lines: string[] = lyric.split('\n')
  const lyrics: ILyric[] = []

  for (const line of lines) {
    const results = timeRegExp.exec(line)
    if (!results) continue

    const time1 = parseInt(results[1]) * 60 * 1000
    const time2 = parseInt(results[2]) * 1000
    const time3 =
      results[3].length === 3 ? parseInt(results[3]) : parseInt(results[3]) * 10
    const time = time1 + time2 + time3

    const text = line.replace(timeRegExp, '')
    lyrics.push({ time, text })
  }

  return lyrics
}
