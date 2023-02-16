import { Grid, Text, Image, Col, styled } from '@nextui-org/react'
import React from 'react'
import FeatureCard from './FeatureCard'
import { GiClick, GiPayMoney } from 'react-icons/gi'
import {SiOpenai} from 'react-icons/si'
// import {motion} from 'framer-motion'

const HomeAdvantages = () => {
    return (
        <>
            <Grid.Container css={{ my: 48, minHeight: 'calc(100vh - 76px)', zIndex: 10, position: 'relative' }} alignItems='center' justify="center" >
                <Grid xs={12} sm={5} direction='column' css={{paddingRight: 40}}>
                    <Text  css={{ color: '$accents6' }}>But Why Us?</Text>
                    <Text h1  css={{ py: 24 }}>Our Advantages</Text>
                    <CardsContainer >
                        <FeatureCard title='Cutting Edge AI Technology' body="OpenAI's latest tools harness the power of technology and AI to revolutionize the way we work and live."
                            icon={<SiOpenai color='#108944' size={32} />}
                            iconBackground='#ADF5CC'
                        />
                        <FeatureCard title='User-Friendly' body="You won't need any technical or any other type of 
                        additional knowledge and expertise to use our tools."
                            icon={<GiClick color='#0072F5' size={32} />}
                            iconBackground='#B7D5F8'
                        />
                        <FeatureCard title='Competitive Pricing' body="Despite using one of the most modern and flexible 
                        technologies on the market, we offer convenient prices to our customers."
                            icon={<GiPayMoney color='#B80A47' size={32} />}
                            iconBackground='#FCC5D8'
                        />
                    </CardsContainer>

                </Grid>
                {/* <Spacer x={12} /> */}
                <Grid xs={0} sm={7} direction='column' alignItems='flex-end' >
                    <img src='src/assets/paginated-results-deco.svg' style={{
                        width: '80%', 
                        height: 'auto',
                        filter: 'drop-shadow(0px 2px 10px lightgrey)',
                        transform: ' perspective(75em) rotateY(-30deg) rotateX(18deg)'
                }} />
                </Grid>
            </Grid.Container>
        </>
    )
}

const CardsContainer = styled(Col, {
    width: '100%',
})

export default HomeAdvantages