import { createBrowserRouter } from 'react-router-dom'
import ProductsPage from '../views/ProductsPage'
import CategoriesPage from '../views/CategoriesPage'
import RegisterPage from '../views/RegisterPage'
import Root from '../views/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'products',
        element: <ProductsPage />
      },
      {
        path: 'categories',
        element: <CategoriesPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      }
    ]
  }
])

export default router