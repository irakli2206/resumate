import { styled } from '@nextui-org/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.view'
import Header from '../components/Header.view'

const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

// export const RootLayout = styled("div", {
//     maxW: '100%'
// });

export default Root