import React from 'react'
import { Navbar, Button, Text, styled, Image, Link as NextUILink } from "@nextui-org/react";
import { MdOutlineDocumentScanner } from 'react-icons/md'
import { Link, useMatch } from 'react-router-dom';

const Header = () => {
    const match = useMatch('/demo')

    console.log(match)

    const navbarLinks = [
        {
            path: '/features',
            name: 'Features'
        },
        {
            path: '/pricing',
            name: 'Pricing'
        },
        {
            path: '/demo',
            name: 'Demo'
        },
    ]

    return (
        <>
            <Navbar variant="sticky" css={{
                position: 'fixed',
                // display: 'none',
                '& > div': {
                    maxW: '100%'
                },
                // '@sm': {
                //     display: 'initial'
                // }
            }}>
                <Navbar.Brand as={Link} to='/' css={{ cursor: 'pointer' }}  >
                    <Image src='src/assets/logo.png' height={60} />

                </Navbar.Brand>
                <Navbar.Content hideIn="xs" variant="underline">
                    {navbarLinks.map((link) => {
                        const isActive = match?.pathnameBase === link.path
                        return (
                            <Navbar.Link as={Link} isActive={isActive} to={link.path}>{link.name}</Navbar.Link>
                        )
                    })}
                </Navbar.Content>
                <Navbar.Content hideIn="xs">

                    <Navbar.Item>
                        <Button rounded auto flat href="#">
                            Get Started
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
                <Navbar.Collapse css={{
                    
                    '& ul': {
                        overflow: 'hidden',
                        height: '100%',
                        background: 'transparent !important',
                        bf: 'none'
                    }
                }}>
                    <>
                        {navbarLinks.map((item, index) => {
                            const isActive = match?.pathnameBase === item.path
                            return (
                                <Navbar.CollapseItem
                                    key={item.name}
                                    activeColor="secondary"
                                    css={{
                                        '&:hover': {
                                            marginLeft: 10,
                                            transition: '0.3 ease'
                                        }
                                        
                                }}
                                    isActive={isActive}
                                >
                                    <NextUILink
                                        as={Link}
                                        color="inherit"
                                        css={{
                                            minWidth: "100%",
                                        }}
                                        to={item.path}
                                    >
                                        {item.name}
                                    </NextUILink>
                                </Navbar.CollapseItem>
                            )
                        })}
                        <Button size='lg' rounded auto flat href="#">
                            Get Started
                        </Button>
                    </>
                </Navbar.Collapse>
                <Navbar.Toggle showIn="xs" />
            </Navbar>



        </>
    )
}



export default Header