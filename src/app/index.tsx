import { RouterProvider } from "react-router-dom";
import { router } from "./routing/Router";
import { GlobalStyle } from "./style/style";
import { Provider } from "react-redux";
import { store } from "./store/store";




export const App = () => {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router}/>
                <GlobalStyle/>
            </Provider>
        </>
    )
};

