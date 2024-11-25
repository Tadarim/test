import React, { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Mine: React.FC<IProps> = () => {
  return (
    <>
      <div className="mine">Mine</div>
    </>
  )
}

export default Mine

