import { FC } from "react"
import { Outlet } from "react-router-dom"

import Header from "components/Header"
import Footer from "components/Footer"


const MainLayout: FC = () => {
    return (
        <>
            <Header />
            <section>
                <Outlet />
            </section>
            <Footer />
        </>
    )
}

export default MainLayout