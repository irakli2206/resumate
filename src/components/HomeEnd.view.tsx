import { Button, Grid, Text, Row, styled } from '@nextui-org/react'
import { motion } from 'framer-motion'
import React from 'react'

const HomeEnd = () => {
    return (
        <>
            <Grid.Container css={{ my: 48, minHeight: 'calc(80vh - 76px)', zIndex: 10, position: 'relative' }} alignItems='center' justify="center" >
                <Grid css={{ position: 'relative', zIndex: 10 }}>
                    <Text h1 css={{ py: 24, textShadow: '0 0 10px white', textAlign: 'center' }}>Try the demo, or get straight into it.</Text>
                    <Row justify='space-evenly' align='center' css={{
                        flexDirection: 'column',
                        gap: 8,
                        '@sm': {
                            flexDirection: 'row'
                        }
                    }} >
                        <Button size='lg' rounded flat >Try Demo</Button>
                        <Button size='lg' shadow rounded  >Get Started</Button>
                    </Row>
                </Grid>
                <Decoration src='src/assets/flying-shape-1.svg' css={{ top: 100, left: 0 }}
                    initial={{ y: 0  }}
                    animate={{ y: 15  }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse'
                    }}
                />
                <Decoration src='src/assets/flying-shape-2.svg' css={{ 
                    display: 'none',
                    top: -100, 
                    right: 200,
                    '@sm': {
                        display: 'initial'
                    }
                }}
                    initial={{ y: 0 }}
                    animate={{ y: 15 }}
                    transition={{
                        duration: 2,
                        delay: 1,
                        repeat: Infinity,
                        repeatType: 'reverse'
                    }}
                />
                <Decoration src='src/assets/flying-shape-3.svg' css={{ bottom: -50, right: 0 }}
                    initial={{ y: 0 }}
                    animate={{ y: 15 }}
                    transition={{
                        duration: 2,
                        delay: 2,
                        repeat: Infinity,
                        repeatType: 'reverse'
                    }}
                />
            </Grid.Container>
        </>
    )
}

const Decoration = styled(motion.img, {
    position: 'absolute',
    zIndex: 1,
    width: '300px'
})

export default HomeEnd