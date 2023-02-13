import { styled } from '@nextui-org/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.view'
import Header from '../components/Header.view'

const Root = () => {
    return (
        <>
            <Header />
            <OutletWrapper>
                <Outlet />
            </OutletWrapper>
            <Footer />
        </>
    )
}

const HEADER_HEIGHT = 76

export const OutletWrapper = styled("div", {
    minHeight: '100vh',
    pt: `calc(${HEADER_HEIGHT}px + 50px)`,
    pb: '50px'
});

export default Root