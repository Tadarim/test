import React, { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Album: React.FC<IProps> = () => {
  return (
    <>
      <div className="album">Album</div>
    </>
  )
}

export default Album

