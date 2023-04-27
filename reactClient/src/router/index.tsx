import { useRoutes, RouteObject } from 'react-router-dom'
import Home from '@/views/Home'
import Table from '@/views/Table'
import Main from '@/views/Main'

export default function Router() {
  const routes: RouteObject[] = [
    {
      path: '',
      element: <Home />,
    },
    {
      path: 'table',
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
    }
  ]
  return useRoutes(routes)
}