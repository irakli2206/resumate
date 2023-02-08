import React from 'react'
import { Navbar, Button, Text, styled } from "@nextui-org/react";
import { MdOutlineDocumentScanner } from 'react-icons/md'

const Header = () => {
    return (
         
            <Navbar variant="sticky" css={{
                '& > div': {
                    maxW: '100%'
                }
            }}>
                <Navbar.Brand>
                    < MdOutlineDocumentScanner size={42} />
                    <Text b color="inherit" css={{ px: 12 }} hideIn="xs">
                        ACME
                    </Text>
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