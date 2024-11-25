import { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import AppPlayerBar from './views/player/app-player-bar'
import { useAppDispatch } from './store'
import { fetchCurrentSongAction } from './store/modules/player'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongAction(287063))
  }, [])

  return (
    <>
      <AppHeader />
      <Suspense fallback="loading......">
        <div className="App">{useRoutes(routes)}</div>
      </Suspense>
      <AppPlayerBar />
      <AppFooter />
    </>
  )
}

export default App
