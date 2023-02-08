import { styled } from '@nextui-org/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

// export const RootLayout = styled("div", {
//     maxW: '100%'
// });

export default Root