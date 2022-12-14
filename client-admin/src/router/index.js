import { createBrowserRouter, redirect } from 'react-router-dom'
import ProductsPage from '../views/ProductsPage'
import AddProductsPage from '../views/AddProductsPage'
import EditProductsPage from '../views/EditProductsPage'
import CategoriesPage from '../views/CategoriesPage'
import FormCategoriesPage from '../views/FormCategoriesPage'
import RegisterPage from '../views/RegisterPage'
import Root from '../views/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: () => {
      const token = localStorage.getItem("access_token")
      if(!token) {
        return redirect('/login')
      }
      return token
    },
    children: [
      {
        path: 'products',
        element: <ProductsPage />
      },
      {
        path: 'products/add',
        element: <AddProductsPage />
      },
      {
        path: 'products/edit/:id',
        element: <EditProductsPage />
      },
      {
        path: 'categories',
        element: <CategoriesPage />
      },
      {
        path: 'categories/add',
        element: <FormCategoriesPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      }
    ]
  },
  {
    path: '/login',
    element: <h1>ini login</h1>,
    loader: () => {
      const token = localStorage.getItem("access_token")
      if(token) {
        return redirect('/products')
      }
      return token
    }
  }
])

export default router