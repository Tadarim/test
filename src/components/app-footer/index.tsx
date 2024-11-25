import React, { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const AppFooter: React.FC<IProps> = () => {
  return (
    <>
      <div className="app-footer">AppFooter</div>
    </>
  )
}

export default AppFooter

