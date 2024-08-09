import { Outlet } from "react-router-dom"
import Header from "./components/header"

const Layout = () => {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout