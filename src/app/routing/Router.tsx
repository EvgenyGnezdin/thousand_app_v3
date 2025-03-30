import { createBrowserRouter } from "react-router-dom";
import { AddPlayerPage, GamePage, HomePage } from "../../pages";
import { MainLayoute } from "../../shared";


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
      basename: '/'
    }
  )


