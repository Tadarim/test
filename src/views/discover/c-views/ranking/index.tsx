import React, { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Ranking: React.FC<IProps> = () => {
  return (
    <>
      <div className="ranking">Ranking</div>
    </>
  )
}

export default Ranking

