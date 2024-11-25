import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Discover = React.lazy(() => import('@/views/discover'))
const Download = React.lazy(() => import('@/views/download'))
const Focus = React.lazy(() => import('@/views/focus'))
const Mine = React.lazy(() => import('@/views/mine'))
const Recommend = React.lazy(() => import('@/views/discover/c-views/recommend'))
const Album = React.lazy(() => import('@/views/discover/c-views/album'))
const Artist = React.lazy(() => import('@/views/discover/c-views/artist'))
const Djradio = React.lazy(() => import('@/views/discover/c-views/djradio'))
const Ranking= React.lazy(() => import('@/views/discover/c-views/ranking'))
const Songs = React.lazy(() => import('@/views/discover/c-views/songs'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/discover'} />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: 'recommend',
        element: <Recommend />
      },
      {
        path: 'album',
        element: <Album />
      },
      {
        path: 'artist',
        element: <Artist />
      },
      {
        path: 'djradio',
        element: <Djradio />
      },
      {
        path: 'ranking',
        element: <Ranking />
      },
      {
        path: 'songs',
        element: <Songs />
      }
    ]
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/focus',
    element: <Focus></Focus>
  },
  {
    path: '/mine',
    element: <Mine></Mine>
  }
]

export default routes
