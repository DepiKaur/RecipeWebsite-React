import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import RootLayout from './pages/Root'
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ViewRecipe from '../src/components/ViewRecipe/ViewRecipe';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />},    /* (index: true) if the path is same as the parent path */
      { path: '/recipes/:recipeId', element: <ViewRecipe />}
    ]
  }
]);

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;