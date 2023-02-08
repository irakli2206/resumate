import { Container } from '@nextui-org/react'
import React from 'react'
import Hero from '../components/Hero.view'
import HomeAdvantages from '../components/HomeAdvantages.view'
import HomeChallenge from '../components/HomeChallenge.view'
import HomeWhatWeDo from '../components/HomeWhatWeDo.view'

const Home = () => {
    return (
        <>
            <Container lg >
                <Hero />
                <HomeChallenge />
                <HomeWhatWeDo />
                <HomeAdvantages />
            </Container>

        </>
    )
}

export default Home