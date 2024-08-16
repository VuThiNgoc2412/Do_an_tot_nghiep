import { Outlet } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"

const Layout = () => {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout