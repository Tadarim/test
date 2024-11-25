import React, { ReactNode, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'

interface IProps {
  children?: ReactNode
}

const Discover: React.FC<IProps> = () => {
  return (
    <>
      <NavBar></NavBar>
      <Suspense fallback="loading2...">
        <Outlet></Outlet>
      </Suspense>
    </>
  )
}

export default Discover
