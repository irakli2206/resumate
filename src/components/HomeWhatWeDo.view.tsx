import { Grid, Col, Text, Row, styled } from '@nextui-org/react'
import React from 'react'
import ProcessStep from './ProcessStep'

const HomeWhatWeDo = () => {
    //Describe what automating resume scanning means, after that show the our advantages page
    return (
        <Grid.Container css={{ my: 48, minHeight: 'calc(60vh - 76px)', zIndex: 10, position: 'relative' }} alignItems='center' justify="center" >
            <Grid>
                <Col>
                    <Text css={{ color: '$accents6' }}>The Solution</Text>
                    <Text h1>Transform the Job Hunt Experience in 3 Steps</Text>
                </Col>
            </Grid>
            <StepsWrapper gap={4} >
                <Grid xs={12} sm={4} >
                    <ProcessStep number='1' title='Sign Up' body='Guess you already knew that part!'  />
                </Grid>
                <Grid xs={12} sm={4}>
                    <ProcessStep number='2' title='Provide the Data' body='You will need to provide us with your resume 
                    and answer a few questions about your career objectives.'  />
                </Grid>
                <Grid xs={12} sm={4}>
                    <ProcessStep number='3' title='Sky is the Limit' body='Finally you can start getting feedback from 
                    ResuMate AI and improve both your resume and job hunt skills.'  />
                </Grid>
                
            </StepsWrapper>
        </Grid.Container>
    )
}

const StepsWrapper = styled(Grid.Container, {
    position: 'relative',
    flexDirection: 'column',

    '& .nextui-c-eXAFyw': {
        position: 'relative',
        zIndex: 10
    },
    '@sm': {
        flexDirection: 'row',
        '&::before': {
            content: '',
            width: '65%',
            height: 2,
            position: 'absolute',
            top: 77,
            left: '50%',
            transform: 'translateX(-50%)',
            borderTop: '2px dashed lightgrey',
            zIndex: 0
        },
    }
})

export default HomeWhatWeDo