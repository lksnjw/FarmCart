import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'

import Footer from '../Components/Footer'
import Header from '../Components/Header'

function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default MainLayout
