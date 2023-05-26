import { useRoutes, RouteObject } from 'react-router-dom'
import Home from '@/views/Home'
import Table from '@/views/Table'
import Main from '@/views/Main'
import Reducer from '@/views/Reducer'
import Cesium from '@/views/Cesium'
import Music from '@/views/Music'
import NotFound from '@/views/Error/404'

export default function Router() {
  const routes: RouteObject[] = [
    {
      path: '',
      element: <Home />,
    },
    {
      path: 'cesium',
      element: <Cesium />,
    },
    {
      path: 'music',
      element: <Music />,
    },
    {
      path: 'table/:id',
      element: <Table />,
    },
    {
      path: 'main',
      element: <Main />,
      children: [
        {
          path: 'page1',
          element: <div>page1</div>
        },
        {
          path: 'page2',
          element: <div>page2</div>
        },
      ]
    },
    {
      path: 'reducer',
      element: <Reducer />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]
  return useRoutes(routes)
}