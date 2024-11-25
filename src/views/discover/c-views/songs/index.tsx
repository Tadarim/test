import React, { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Songs: React.FC<IProps> = () => {
  return (
    <>
      <div className="songs">Songs</div>
    </>
  )
}

export default Songs

