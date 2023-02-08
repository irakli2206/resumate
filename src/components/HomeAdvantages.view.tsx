import { Grid, Text, Image, Col, styled } from '@nextui-org/react'
import React from 'react'
import FeatureCard from './FeatureCard'
import { GiClick, GiPayMoney } from 'react-icons/gi'
import {SiOpenai} from 'react-icons/si'

const HomeAdvantages = () => {
    return (
        <>
            <Grid.Container css={{ my: 48, height: 'calc(100vh - 76px)', zIndex: 10, position: 'relative' }} alignItems='center' justify="center" >
                <Grid xs={7} direction='column'>
                    <Text css={{ color: '$accents6' }}>But Why Us?</Text>
                    <Text h1 css={{ py: 24 }}>Our Advantages</Text>
                    <CardsContainer >
                        <FeatureCard title='Cutting Edge AI Technology' body="OpenAI's brand new tools allow us 
                        to use the power of tech and artificial intelligence in ingenius ways."
                            icon={<SiOpenai color='#108944' size={32} />}
                            iconBackground='#ADF5CC'
                        />
                        <FeatureCard title='Intuitive Tools' body="You won't need any technical or any other type of 
                        additional knowledge and expertise to use our tools."
                            icon={<GiClick color='#0072F5' size={32} />}
                            iconBackground='#B7D5F8'
                        />
                        <FeatureCard title='Competitive Pricing' body="Despite using one of the most modern and flexible 
                        resume scanning technology on the market, we offer convenient prices to our customers."
                            icon={<GiPayMoney color='#B80A47' size={32} />}
                            iconBackground='#FCC5D8'
                        />
                    </CardsContainer>

                </Grid>
                {/* <Spacer x={12} /> */}
                <Grid xs={5} direction='column' alignItems='flex-end' >

                </Grid>
            </Grid.Container>
        </>
    )
}

const CardsContainer = styled(Col, {
    width: '100%',
})

export default HomeAdvantages