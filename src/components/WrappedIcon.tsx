import { styled } from '@nextui-org/react'
import React from 'react'

type Props = {
    iconBackground: string 
    icon: JSX.Element
}

const WrappedIcon = ({icon, iconBackground}: Props) => {
  return (
    <IconWrapper css={{background: iconBackground, mr: 10 }}>
        {icon}
    </IconWrapper>
  )
}

const IconWrapper = styled('div', {
    borderRadius: '50%',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

export default WrappedIcon