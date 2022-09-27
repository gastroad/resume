import Header from "components/Header"
import Footer from "components/Footer"

import Main from "page/Main"



const App: React.FC = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )

}
export default App

// const App: React.FC = () => {
//     return (
//         <>
//             <>hi</>
//             <BrowserRouter >
//                 <div id={"root-modal"} />
//                 <Header />
//                 <Routes>
//                     <Route path="/main" element={<Main />} />
//                     <Route path="/sub" element={<Sub />} />
//                     <Route
//                         path="*"
//                         element={
//                             <div>
//                                 <p>/404/</p>
//                             </div>
//                         }
//                     />
//                 </Routes>

//                 <Footer />
//             </BrowserRouter>
//         </>
//     )

// }