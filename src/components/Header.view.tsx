import React from 'react'
import { Navbar, Button, Text, styled, Image } from "@nextui-org/react";
import { MdOutlineDocumentScanner } from 'react-icons/md'

const Header = () => {
    return (
         
            <Navbar variant="sticky" css={{
                position: 'fixed',
                '& > div': {
                    maxW: '100%'
                }
            }}>
                <Navbar.Brand>
                    <Image src='src/assets/logo.png' height={60}  />
                    
                </Navbar.Brand>
                <Navbar.Content hideIn="xs" variant="underline">
                    <Navbar.Link href="#">Features</Navbar.Link>
                    <Navbar.Link isActive href="#">Customers</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Company</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>

                    <Navbar.Item>
                        <Button rounded auto flat href="#">
                            Get Started
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
         
    )
}



export default Header