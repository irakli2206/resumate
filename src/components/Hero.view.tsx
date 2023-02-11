import { Container, Grid, Spacer, Text, Image, styled } from '@nextui-org/react'
import React from 'react'

const Hero = () => {
    return (
        <>
            <BackgroundImage src='src/assets/hero-bg.png' />
            <Grid.Container css={{ py: 12, minHeight: 'calc(100vh - 76px)', zIndex: 10, position: 'relative', marginTop: 100 }} alignItems='center' justify="center" >
                <Grid xs={12} sm={5} direction='column'>
                    <Text h1>Use the power of AI to analyze candidate resumes and CVs.</Text>
                    <Text size='$xl' css={{ color: '$accents6', mt: 24, mb: 48 }} >No more sifting through a sea of resumes, let AI help you
                        find the best candidates.</Text>
                    <Text h4 css={{cursor: 'pointer'}}>Learn More</Text>
                </Grid>
                {/* <Spacer x={12} /> */}
                <Grid xs={0} sm={7} css={{ pt: 200  }}>
                    <Image src='src/assets/hero-deco.svg' />
                </Grid>
            </Grid.Container>
        </>


    )
}


const BackgroundImage = styled('img', {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    // transform: 'translateY(-40%)',
    right: -200
})

export default Hero