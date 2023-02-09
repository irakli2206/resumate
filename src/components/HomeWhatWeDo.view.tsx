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
                    <Text h1>AI-powered Automated Resume Screening</Text>
                </Col>
            </Grid>
            <StepsWrapper gap={4} >
                <Grid xs={4} >
                    <ProcessStep number='1' title='Gather the Resumes' body='First, you have to collect all the documents 
                    you want analyzed. These documents can be in multiple formats.'  />
                </Grid>
                <Grid xs={4}>
                    <ProcessStep number='2' title='Enter Criteria' body='Choose the required and good to have traits, keywords and other 
                    parameters based on which the resumes will be rated.'  />
                </Grid>
                <Grid xs={4}>
                    <ProcessStep number='3' title='View Results' body='Receive a list of resumes, each with scores based on the 
                    criteria they satisfy. On top of the scores you can also view a summary of the whole resume.'  />
                </Grid>
                
            </StepsWrapper>
        </Grid.Container>
    )
}

const StepsWrapper = styled(Grid.Container, {
    position: 'relative',
    '&::before': {
        content: '',
        width: '65%',
        height: 2,
        position: 'absolute',
        top: 77,
        left: '50%',
        transform: 'translateX(-50%)',
        borderTop: '2px dashed grey',
        zIndex: 0
    },
    '& .nextui-c-eXAFyw': {
        position: 'relative',
        zIndex: 10
    }
})

export default HomeWhatWeDo