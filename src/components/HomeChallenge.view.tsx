import { Grid, Text } from '@nextui-org/react'
import React from 'react'
import BadResumeSlider from './BadResumeSlider'

const HomeChallenge = () => {
  return (
    //First a top part saying smth like "You feel like you spend more time than needed discarding a pile of resumes, surely
    //there is a solution to this?"
    //Answer - Obviously. It's called ResuMate.
    //Concept - Avatar of a HR woman with comments like 'why did he even send the CV', 'did he read job description' etc.
    //Text lines change based on resume, resumes are navigable with a slider
    <>
      <Grid.Container css={{
        my: 48, minHeight: 'calc(100vh - 76px)', zIndex: 10, position: 'relative',
        flexDirection:'column-reverse',  
        '@sm': {
          flexDirection:'row',
        }
      }} alignItems='center' justify="center" >

        <Grid xs={12} sm={7} direction='column' >
          <BadResumeSlider />
        </Grid>
        <Grid xs={12} sm={5} direction='column' >
          <Text css={{ color: '$accents6' }}>Who Do We Help?</Text>
          <Text h1 css={{ py: 24 }}>Let ResuMate's AI technology be your guide to the perfect resume.</Text>
          <Text size='$xl' css={{ color: '$accents6' }}>
          At ResuMate, we help job seekers of all levels and across a wide range of industries. Whether you're a recent graduate or an experienced professional, our AI-powered career coach can assist you in creating a standout resume and navigating the job search process with confidence.
          </Text>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default HomeChallenge