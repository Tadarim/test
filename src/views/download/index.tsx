import React, { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Download: React.FC<IProps> = () => {
  return (
    <>
      <div className="download">Download</div>
    </>
  )
}

export default Download

