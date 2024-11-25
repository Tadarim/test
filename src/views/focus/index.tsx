import React, { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Focus: React.FC<IProps> = () => {
  return (
    <>
      <div className="focus">Focus</div>
    </>
  )
}

export default Focus

