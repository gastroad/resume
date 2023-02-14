import { FC } from "react"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Preview from "page/Preview"

import MainLayout from "src/components/MainLayout"
import Information from "components/Information"
import Introduce from "components/Introduce"
import Career from "components/Career"
import Certificate from "components/EtCetera"



const App: FC = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Preview />,
            errorElement: <>에러</>,
        },
        {
            path: "/resume",
            element: <MainLayout />,
            children: [
                {
                    path: "/resume/info",
                    element: <>
                        <Information />
                        <Introduce />
                        <Career />
                        <Certificate />
                    </>,
                },
            ],
            errorElement: <>에러</>,

        },
    ]);



    return (
        <RouterProvider router={router} />
    )

}
export default App

