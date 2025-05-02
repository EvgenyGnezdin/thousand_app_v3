import { createBrowserRouter } from "react-router-dom";
// import { lazy } from "react";
import { MainLayoute } from "../../shared";
import { lazy } from "react";
// import HomePage from "#pages/HomePage/HomePage.tsx";
// import GamePage from "#pages/GamePage/GamePage.tsx";
// import AddPlayerPage from "#pages/AddPlayerPage/AddPlayerPage.tsx";

const HomePage = lazy(() => import('../../pages/HomePage'))
const GamePage = lazy(() => import('../../pages/GamePage'))
const AddPlayerPage = lazy(() => import('../../pages/AddPlayerPage'))

export const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayoute/>,
      children: [
        {
          index: true,
          element: <HomePage/>
        },
        {
          path: '/game-page',
          element: <GamePage/>
        },
        {
          path: '/add-player',
          element: <AddPlayerPage/>
        }
      ]
    }],
    {
      basename: `${process.env.NODE_ENV === 'production' ? '/thousand_app_v3' : '/'}`
    }
  )


