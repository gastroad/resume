import { FC } from "react"
import Main from "page/Main"
import { Provider } from 'react-redux'
import store from "./store"


const App: FC = () => {
    return (
        <div >
            <Provider store={store}>
                <Main />
            </Provider>
        </div>
    )

}
export default App

