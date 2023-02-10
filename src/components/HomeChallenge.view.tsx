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
      <Grid.Container css={{ my: 48, minHeight: 'calc(100vh - 76px)', zIndex: 10, position: 'relative' }} direction='column-reverse' alignItems='center' justify="center" >

        <Grid xs={12} sm={7} direction='column' >
          <BadResumeSlider />
        </Grid>
        <Grid xs={12} sm={5} direction='column' >
          <Text css={{ color: '$accents6' }}>Who Do We Help?</Text>
          <Text h1 css={{ py: 24 }}>You have too many resumes to go through, but you value your time.</Text>
          <Text size='$xl' css={{ color: '$accents6' }}>
            You are an HR specialist, a Talent Acquisition Expert, a Recruiter, perhaps even a business owner 
            going on a hunt for employees by himself. In short, you are an employer of any kind looking for top notch 
            talent on the market. You have a pile of resumes and now have to spend lots of time crawling through them. Surely 
            there is a solution to this?
          </Text>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default HomeChallenge