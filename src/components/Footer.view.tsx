import { Grid, styled, Row, Col, Text, Container, Image } from '@nextui-org/react'
import React from 'react'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTop alignItems='flex-start' justify="space-evenly" css={{
        textAlign: 'center',
        '@sm': {
          textAlign: 'left'
        }
        }} >
        <Grid xs={12} sm={2}>
          <Image src='src/assets/logo.png' height={60} />
        </Grid>
        <Grid xs={12} sm={2}>
          <Col css={{ pt: 16, width: 'auto', marginInline: 'auto' }} >
            <Text h3>Account</Text>
            <Text>Log In</Text>
            <Text>Sign Up</Text>
          </Col>
        </Grid>
        <Grid xs={12} sm={2}  >
          <Col css={{ pt: 16, width: 'auto', marginInline: 'auto' }} >
            <Text h3>Resources</Text>
            <Text>About Us</Text>
            <Text>Demo</Text>
          </Col>
        </Grid>
        <Grid xs={12} sm={2}>
          <Col css={{ pt: 16, pb: 16, width: 'auto', marginInline: 'auto' }} >
            <Text h3>Support</Text>
            <Text>Contact Us</Text>
            <Text>Privacy Policy</Text>
          </Col>
        </Grid>
      </FooterTop>
      <FooterBottom >
        <Row>
          <Text>2023 ResuMate, All Rights Reserved</Text>
        </Row>
      </FooterBottom>
    </FooterWrapper>
  )
}

const FooterWrapper = styled('footer', {
  width: '100%',
  height: 'auto',
  backgroundImage: 'url("src/assets/footer-bg.svg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
})


const FooterTop = styled(Grid.Container, {
  position: 'relative',

  minHeight: '400px',
  width: '100%',
  px: '$3xl',
  pt: '$3xl',
  columnGap: 24

})

const FooterBottom = styled('div', {
  width: '100%',
  position: 'relative',

  padding: '$xs $xl',

  '& *': {
    fontSize: '$sm'
  }
})

export default Footer