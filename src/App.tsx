import { FC } from "react"
import { Provider } from 'react-redux'

import Main from "page/Main"
import store from "src/store"


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

