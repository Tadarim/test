import React, { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Artist: React.FC<IProps> = () => {
  return (
    <>
      <div className="artist">Artist</div>
    </>
  )
}

export default Artist

